#!/bin/bash

# Deployment Script for Next.js Business Website
# This script automates the build and deployment process

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18 or higher."
        exit 1
    fi

    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18 or higher is required. Current version: $(node -v)"
        exit 1
    fi

    print_success "Node.js version: $(node -v)"
}

# Function to check if npm is installed
check_npm() {
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm."
        exit 1
    fi

    print_success "npm version: $(npm -v)"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi
    
    print_success "Dependencies installed successfully"
}

# Function to run linting
run_lint() {
    print_status "Running ESLint..."
    
    if npm run lint; then
        print_success "Linting passed"
    else
        print_warning "Linting found issues. Please fix them before deploying."
        read -p "Continue with deployment anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Deployment cancelled due to linting issues"
            exit 1
        fi
    fi
}

# Function to build the project
build_project() {
    print_status "Building the project..."
    
    # Clean previous build
    if [ -d ".next" ]; then
        rm -rf .next
        print_status "Cleaned previous build"
    fi
    
    # Build the project
    if npm run build; then
        print_success "Build completed successfully"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Function to test the build locally
test_build() {
    print_status "Testing build locally..."
    
    # Start the production server in background
    npm start &
    SERVER_PID=$!
    
    # Wait for server to start
    sleep 5
    
    # Check if server is running
    if curl -s http://localhost:3000 > /dev/null; then
        print_success "Local test successful - server is running on http://localhost:3000"
        
        # Ask user if they want to continue
        read -p "Press Enter to stop the test server and continue with deployment..."
        
        # Stop the server
        kill $SERVER_PID 2>/dev/null || true
    else
        print_error "Local test failed - server is not responding"
        kill $SERVER_PID 2>/dev/null || true
        exit 1
    fi
}

# Function to deploy to Netlify (if CLI is available)
deploy_to_netlify() {
    if command_exists netlify; then
        print_status "Deploying to Netlify..."
        
        # Check if user is logged in
        if netlify status 2>/dev/null; then
            print_status "Deploying to production..."
            netlify deploy --prod --dir=.next
            print_success "Deployment to Netlify completed"
        else
            print_warning "Not logged in to Netlify CLI. Please run 'netlify login' first."
            print_status "You can deploy manually by dragging the .next folder to Netlify"
        fi
    else
        print_warning "Netlify CLI not installed. Install with: npm install -g netlify-cli"
        print_status "You can deploy manually by dragging the .next folder to Netlify"
    fi
}

# Function to create deployment package
create_deployment_package() {
    print_status "Creating deployment package..."
    
    # Create deployment directory
    DEPLOY_DIR="deployment-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$DEPLOY_DIR"
    
    # Copy necessary files
    cp -r .next "$DEPLOY_DIR/"
    cp -r public "$DEPLOY_DIR/"
    cp package.json "$DEPLOY_DIR/"
    cp next.config.js "$DEPLOY_DIR/"
    cp netlify.toml "$DEPLOY_DIR/"
    
    # Create deployment info
    cat > "$DEPLOY_DIR/DEPLOYMENT_INFO.txt" << EOF
Deployment Package Created: $(date)
Build Version: $(git rev-parse HEAD 2>/dev/null || echo "Unknown")
Node Version: $(node -v)
npm Version: $(npm -v)

Files included:
- .next/ (built application)
- public/ (static assets)
- package.json (dependencies)
- next.config.js (Next.js configuration)
- netlify.toml (Netlify configuration)

To deploy:
1. Upload this folder to Netlify
2. Set build command: npm run build
3. Set publish directory: .next
EOF
    
    print_success "Deployment package created: $DEPLOY_DIR"
    print_status "You can upload this folder to Netlify for deployment"
}

# Function to show deployment options
show_deployment_options() {
    echo
    print_status "Deployment Options:"
    echo "1. Deploy to Netlify (if CLI is available)"
    echo "2. Create deployment package"
    echo "3. Exit"
    echo
    
    read -p "Choose an option (1-3): " -n 1 -r
    echo
    
    case $REPLY in
        1)
            deploy_to_netlify
            ;;
        2)
            create_deployment_package
            ;;
        3)
            print_status "Exiting..."
            exit 0
            ;;
        *)
            print_error "Invalid option"
            show_deployment_options
            ;;
    esac
}

# Function to show build information
show_build_info() {
    echo
    print_status "Build Information:"
    echo "Node.js Version: $(node -v)"
    echo "npm Version: $(npm -v)"
    echo "Next.js Version: $(npm list next | grep next | cut -d' ' -f2)"
    echo "Build Directory: .next"
    echo "Public Directory: public"
    echo
}

# Main deployment function
main() {
    echo "🚀 Next.js Business Website Deployment Script"
    echo "=============================================="
    echo
    
    # Check prerequisites
    check_node_version
    check_npm
    
    # Show build information
    show_build_info
    
    # Install dependencies
    install_dependencies
    
    # Run linting
    run_lint
    
    # Build the project
    build_project
    
    # Test the build (optional)
    read -p "Test the build locally? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        test_build
    fi
    
    # Show deployment options
    show_deployment_options
    
    echo
    print_success "Deployment process completed!"
    print_status "Your Next.js business website is ready for production! 🎉"
}

# Function to show help
show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -b, --build    Only build the project (skip deployment)"
    echo "  -t, --test     Build and test locally"
    echo "  -d, --deploy   Build and deploy to Netlify"
    echo
    echo "Examples:"
    echo "  $0              # Full deployment process"
    echo "  $0 --build      # Only build the project"
    echo "  $0 --test       # Build and test locally"
    echo "  $0 --deploy     # Build and deploy to Netlify"
}

# Parse command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    -b|--build)
        check_node_version
        check_npm
        install_dependencies
        run_lint
        build_project
        print_success "Build completed successfully!"
        exit 0
        ;;
    -t|--test)
        check_node_version
        check_npm
        install_dependencies
        run_lint
        build_project
        test_build
        exit 0
        ;;
    -d|--deploy)
        check_node_version
        check_npm
        install_dependencies
        run_lint
        build_project
        deploy_to_netlify
        exit 0
        ;;
    "")
        main
        ;;
    *)
        print_error "Unknown option: $1"
        show_help
        exit 1
        ;;
esac
