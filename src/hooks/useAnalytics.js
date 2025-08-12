import { useEffect } from 'react';
import { track } from '@vercel/analytics';

// Custom analytics hook for enhanced tracking
export function useAnalytics() {
  // Track page views
  const trackPageView = (pageName, properties = {}) => {
    track('page_view', {
      page: pageName,
      ...properties
    });
  };

  // Track button clicks
  const trackButtonClick = (buttonName, properties = {}) => {
    track('button_click', {
      button: buttonName,
      ...properties
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName, properties = {}) => {
    track('form_submission', {
      form: formName,
      ...properties
    });
  };

  // Track service interactions
  const trackServiceInteraction = (serviceName, action, properties = {}) => {
    track('service_interaction', {
      service: serviceName,
      action: action,
      ...properties
    });
  };

  // Track theme changes
  const trackThemeChange = (theme) => {
    track('theme_change', {
      theme: theme
    });
  };

  // Track contact actions
  const trackContactAction = (method, properties = {}) => {
    track('contact_action', {
      method: method,
      ...properties
    });
  };

  // Track social media clicks
  const trackSocialClick = (platform, properties = {}) => {
    track('social_click', {
      platform: platform,
      ...properties
    });
  };

  // Track scroll depth
  const trackScrollDepth = (depth) => {
    track('scroll_depth', {
      depth: depth
    });
  };

  // Track time on page
  const trackTimeOnPage = (duration) => {
    track('time_on_page', {
      duration: duration
    });
  };

  return {
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackServiceInteraction,
    trackThemeChange,
    trackContactAction,
    trackSocialClick,
    trackScrollDepth,
    trackTimeOnPage
  };
}

// Hook for automatic page view tracking
export function usePageViewTracking(pageName) {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(pageName);
  }, [pageName, trackPageView]);
}

// Hook for scroll depth tracking
export function useScrollTracking() {
  const { trackScrollDepth } = useAnalytics();

  useEffect(() => {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90];
    const trackedThresholds = new Set();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
      }

      // Track scroll depth at specific thresholds
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);
}

// Hook for time on page tracking
export function useTimeOnPageTracking() {
  const { trackTimeOnPage } = useAnalytics();

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const duration = Math.round((Date.now() - startTime) / 1000); // in seconds
      trackTimeOnPage(duration);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const duration = Math.round((Date.now() - startTime) / 1000);
        trackTimeOnPage(duration);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackTimeOnPage]);
}
