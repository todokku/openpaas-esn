(function() {
  'use strict';

  angular.module('esn.user-notification')
    .constant('ESN_USER_NOTIFICATION_SCREEN_SM_MIN', 768)
    .constant('ESN_USER_NOTIFICATION_ITEM_HEIGHT', 75)
    .constant('ESN_USER_NOTIFICATION_MOBILE_BROWSER_URL_BAR', 56)
    .constant('ESN_USER_NOTIFICATION_POPOVER_ARROW_HEIGHT', 10)
    .constant('ESN_USER_NOTIFICATION_POPOVER_TITLE_HEIGHT', 35)
    .constant('ESN_USER_NOTIFICATION_POPOVER_PAGER_BUTTONS_HEIGHT', 30)
    .constant('ESN_USER_NOTIFICATION_BOTTOM_PADDING', 5)
    .constant('ESN_USER_NOTIFICATION_UNREAD_REFRESH_TIMER', 10 * 1000)
    .constant('ESN_USER_NOTIFICATION_OFFSET_START', 0)
    .constant('ESN_USER_NOTIFICATION_LIMIT_PAGER', 25);
})();