const join = require('path').join;
const CORE_JS_URIPATH = '/js/modules';
const CORE_JS_BASEPATH = join(__dirname, '../../frontend', CORE_JS_URIPATH);

const injections = [
  {angular: ['esn.core'], files: ['core.js'], innerApps: ['esn']},
  {angular: ['esn.datepickerUtils'], files: ['datepicker-utils.js'], innerApps: ['esn']},
  {angular: ['esn.cache'], files: ['cache.js'], innerApps: ['esn']},
  {angular: ['esn.scroll'], files: ['scroll.js'], innerApps: ['esn']},
  {angular: ['esn.multi-input'], files: ['multi-input.js'], innerApps: ['esn']},
  {angular: ['esn.http'], files: ['http.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.header'], files: [
    'header/header.js',
    'header/search/search-header.component.js',
    'header/search/search-header.controller.js',
    'header/search/settings/search-header-settings.controller.js',
    'header/search/settings/search-header-settings.service.js'
  ], innerApps: ['esn']},
  {angular: ['esn.profile-menu'], files: [
    'header/profile-menu/profile-menu.module.js',
    'header/profile-menu/profile-menu.component.js',
    'header/profile-menu/profile-menu.controller.js',
    'header/profile-menu/profile-menu.config.js'
  ], innerApps: ['esn']},
  {angular: ['esn.subheader'], files: [
    'subheader/subheader.module.js',
    'subheader/subheader.constants.js',
    'subheader/sub-header.service.js',
    'subheader/sub-header.directive.js',
    'subheader/sub-header-container.directive.js',
    'subheader/sub-header-aware.directive.js',
    'subheader/save-button/save-button.controller.js',
    'subheader/save-button/save-button.component.js'
  ], innerApps: ['esn']},
  {angular: ['esn.socketio'], files: ['socketio.js'], innerApps: ['esn']},
  {angular: ['esn.domain'], files: ['domain.js'], innerApps: ['esn']},
  {angular: ['esn.member'], files: ['member.js'], innerApps: ['esn']},
  {angular: ['esn.module-registry'], files: ['module-registry/module-registry.module.js', 'module-registry/module-registry.service.js'], innerApps: ['esn']},
  {angular: ['esn.search'], files: ['search.js'], innerApps: ['esn']},
  {angular: ['esn.infinite-list'], files: [
    'infinite-list/infinite-list.module.js',
    'infinite-list/infinite-list-scroll-helper-builder.service.js',
    'infinite-list/infinite-list-scroll-helper.service.js',
    'infinite-list/infinite-list-scroll-on-groups-helper.service.js',
    'infinite-list/infinite-list.config.js',
    'infinite-list/infinite-list.constants.js',
    'infinite-list/infinite-list.directive.js',
    'infinite-list/infinite-list.service.js'
  ], innerApps: ['esn']},

  {angular: ['esn.sidebar'], files: ['sidebar.js'], innerApps: ['esn']},
  {angular: ['esn.avatar'], files: [
    'avatar.js',
    'avatar/list/avatar-list.component.js',
    'avatar/list/avatar-list.controller.js',
    'avatar/avatar-url.service.js'
  ], innerApps: ['esn']},
  {angular: ['esn.user'], files: ['user.js'], innerApps: ['esn']},
  {angular: ['esn.message'], files: ['message.js'], innerApps: ['esn']},
  {angular: ['esn.session'], files: ['session.js'], innerApps: ['esn']},
  {angular: ['esn.oauth-application'], files: [
    'oauth-application/oauth-application.module.js',
    'oauth-application/oauth-application.config.js',
    'oauth-application/oauth-application.router.js',
    'oauth-application/oauth-application-client.service.js',
    'oauth-application/card/oauth-application-card.component.js',
    'oauth-application/form/add/oauth-application-add-form-modal.component.js',
    'oauth-application/form/add/oauth-application-add-form.component.js',
    'oauth-application/form/add/oauth-application-add-form.controller.js',
    'oauth-application/form/edit/oauth-application-edit-form.component.js',
    'oauth-application/form/edit/oauth-application-edit-form.controller.js',
    'oauth-application/list/oauth-application-list.component.js',
    'oauth-application/list/oauth-application-list.controller.js',
    'oauth-application/menu/oauth-application-menu-controlcenter.directive.js',
    'oauth-application/view/oauth-application-view.component.js',
    'oauth-application/view/oauth-application-view.controller.js'
  ], innerApps: ['esn']},
  {angular: ['esn.authentication'], files: ['authentication.js'], innerApps: ['esn']},
  {angular: ['esn.notification'], files: ['notification.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.api-notification'], files: ['api-notification.js'], innerApps: ['esn']},
  {angular: ['esn.community'], files: ['community.js'], innerApps: ['esn']},
  {angular: ['esn.rest.helper'], files: ['rest-helper.js'], innerApps: ['esn']},
  {angular: ['esn.activitystream'], files: [
    'activitystream.js',
    'activitystream/services.js',
    'activitystream/controllers.js',
    'activitystream/directives.js'
  ], innerApps: ['esn']},
  {angular: ['esn.websocket'], files: ['websocket.js'], innerApps: ['esn']},
  {angular: ['esn.collaboration'], files: [
    'collaboration/collaboration.module.js',
    'collaboration/collaboration.run.js',
    'collaboration/collaboration.constants.js',
    'collaboration/create/collaboration-create-button.component.js',
    'collaboration/invite/collaboration-invite-users.directive.js',
    'collaboration/member/collaboration-member-avatar.component.js',
    'collaboration/member/collaboration-member-avatar.controller.js',
    'collaboration/members/list/collaboration-members-list.component.js',
    'collaboration/members/list/collaboration-members-list.controller.js',
    'collaboration/members/collaboration-members-widget.directive.js',
    'collaboration/members/collaboration-members.component.js',
    'collaboration/members/add/collaboration-members-add.component.js',
    'collaboration/members/add/collaboration-members-add.controller.js',
    'collaboration/members/add/add-item/collaboration-members-add-item.component.js',
    'collaboration/members/add/add-item/collaboration-members-add-item.controller.js',
    'collaboration/membership/collaboration-membership-requests-actions.controller.js',
    'collaboration/membership/collaboration-membership-requests-actions.directive.js',
    'collaboration/membership/collaboration-membership-requests-widget.controller.js',
    'collaboration/membership/collaboration-membership-requests-widget.directive.js',
    'collaboration/services/collaboration-client.service.js',
    'collaboration/services/collaboration-listener.service.js',
    'collaboration/services/collaboration.service.js',
    'collaboration/services/collaboration-member-pagination-provider.service.js',
    'collaboration/user-notifications/collaboration-invitation-accept-button.directive.js',
    'collaboration/user-notifications/collaboration-invitation-decline-button.directive.js',
    'collaboration/user-notifications/collaboration-join.directive.js',
    'collaboration/user-notifications/collaboration-membership-invitation.directive.js',
    'collaboration/user-notifications/collaboration-membership-request-accepted.component.js',
    'collaboration/user-notifications/collaboration-membership-request-declined.component.js',
    'collaboration/user-notifications/collaboration-request-membership-action.controller.js'
  ], innerApps: ['esn']},
  {angular: ['esn.feedback'], files: ['feedback.js'], innerApps: ['esn']},
  {angular: ['esn.maps'], files: ['maps.js'], innerApps: ['esn']},
  {angular: ['esn.activitystreams-tracker'], files: ['activitystreams-tracker.js'], innerApps: ['esn']},
  {angular: ['esn.paginate'], files: ['paginate.js'], innerApps: ['esn']},
  {angular: ['esn.pagination'], files: [
    'pagination/pagination.module.js',
    'pagination/pagination.constants.js',
    'pagination/pagination-provider-builder.service.js',
    'pagination/pagination-provider.service.js'
  ], innerApps: ['esn']},
  {angular: ['esn.object-type'], files: ['object-type.js'], innerApps: ['esn']},
  {angular: ['esn.file'], files: ['file.js'], innerApps: ['esn']},
  {angular: ['esn.form.helper'], files: ['form-helper.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.background'], files: ['background.js'], innerApps: ['esn']},
  {angular: ['esn.parser'], files: ['parser.js'], innerApps: ['esn']},
  {angular: ['esn.parser'], files: ['markdown-parser.js'], innerApps: ['esn']},
  {angular: ['esn.parser'], files: ['markdown-parser.js'], innerApps: ['esn']},
  {angular: ['esn.widget.helper'], files: ['widget-helper.js'], innerApps: ['esn']},
  {angular: ['esn.twitter'], files: ['twitter.js'], innerApps: ['esn']},
  {angular: ['esn.oembed'], files: ['oembed/oembed.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.youtube'], files: ['oembed/youtube.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.instagram'], files: ['oembed/instagram.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.soundcloud'], files: ['oembed/soundcloud.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.deezer'], files: ['oembed/deezer.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.vimeo'], files: ['oembed/vimeo.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.slideshare'], files: ['oembed/slideshare.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.codepen'], files: ['oembed/codepen.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.gist'], files: ['oembed/gist.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.twitter'], files: ['oembed/twitter.js'], innerApps: ['esn']},
  {angular: ['esn.oembed.image'], files: ['oembed/image.js'], innerApps: ['esn']},
  {angular: ['esn.injection'], files: ['injection.js'], innerApps: ['esn']},
  {angular: ['esn.localstorage'], files: ['localstorage.js'], innerApps: ['esn']},
  {angular: ['esn.profile'], files: ['profile.js'], innerApps: ['esn']},
  {angular: ['esn.summernote-wrapper'], files: ['esn.summernote.js'], innerApps: ['esn']},
  {angular: ['esn.poll'], files: ['poll.js'], innerApps: ['esn']},
  {angular: ['esn.array-helper'], files: ['array-helper.js'], innerApps: ['esn']},
  {angular: ['esn.alphalist'], files: ['alphalist.js'], innerApps: ['esn']},
  {angular: ['esn.ui'], files: ['ui.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.attendee'], files: [
    'attendee/attendee.module.js',
    'attendee/attendee.run.js',
    'attendee/attendee.constants.js',
    'attendee/attendee.service.js'
  ], innerApps: ['esn']},
  {angular: ['esn.jmap-client-wrapper'], files: ['jmap-client-wrapper.js'], innerApps: ['esn']},
  {angular: ['esn.iframe-resizer-wrapper'], files: ['iframe-resizer-wrapper.js'], innerApps: ['esn']},
  {angular: ['esn.box-overlay'], files: ['box-overlay.js'], innerApps: ['esn']},
  {angular: ['esn.back-detector'], files: ['back-detector.js'], innerApps: ['esn']},
  {angular: ['esn.fullscreen-edit-form'], files: ['fullscreen-edit-form.js'], innerApps: ['esn']},
  {angular: ['esn.offline-wrapper'], files: ['esn.offline.js'], innerApps: ['esn']},
  {angular: ['esn.router'], files: ['esn.router.js'], innerApps: ['esn']},
  {angular: ['esn.url'], files: ['url.js'], innerApps: ['esn']},
  {angular: ['esn.actionList'], files: ['action-list.js'], innerApps: ['esn']},
  {angular: ['esn.lodash-wrapper'], files: ['lodash-wrapper.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.aggregator'], files: ['aggregator.js'], innerApps: ['esn']},
  {angular: ['esn.provider'], files: ['provider.js'], innerApps: ['esn']},
  {angular: ['esn.application-menu'], files: ['application-menu.js'], innerApps: ['esn']},
  {angular: ['esn.settings-overlay'], files: ['settings-overlay.js'], innerApps: ['esn']},
  {angular: ['esn.desktop-utils'], files: ['desktop-utils.js'], innerApps: ['esn']},
  {angular: ['esn.beforeunload'], files: ['beforeunload.js'], innerApps: ['esn']},
  {angular: ['esn.configuration'], files: [
    'config/config.module.js',
    'config/config.constants.js',
    'config/config.service.js',
    'config/config-api.service.js'
  ], innerApps: ['esn']},
  {angular: ['esn.highlight'], files: ['highlight.js'], innerApps: ['esn']},
  {angular: ['esn.dragndrop'], files: ['dragndrop.js'], innerApps: ['esn']},
  {angular: ['esn.autolinker-wrapper'], files: ['esn.autolinker-wrapper.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.like'], files: ['like.js'], innerApps: ['esn']},
  {angular: ['esn.resource-link'], files: ['resource-link.js'], innerApps: ['esn']},
  {angular: ['esn.timeline'], files: ['timeline.js'], innerApps: ['esn']},
  {angular: ['esn.follow'], files: ['follow.js'], innerApps: ['esn']},
  {angular: ['esn.escape-html'], files: ['escape-html.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.dropdownList'], files: ['dropdown-list.js'], innerApps: ['esn']},
  {angular: ['esn.file-preview'], files: ['file-preview/file-preview.js'], innerApps: ['esn']},
  {angular: ['esn.file-preview.image'], files: ['file-preview/image.js'], innerApps: ['esn']},
  {angular: ['esn.async-action'], files: ['async-action.js'], innerApps: ['esn']},
  {angular: ['esn.touchscreen-detector'], files: ['touchscreen-detector.js'], innerApps: ['esn']},
  {angular: ['esn.previous-page'], files: ['previous-page.js'], innerApps: ['esn']},
  {angular: ['esn.file-saver'], files: ['file-saver.js'], innerApps: ['esn']},
  {angular: ['esn.media.query'], files: ['media-query.js'], innerApps: ['esn']},
  {angular: ['esn.ldap'], files: ['ldap.js'], innerApps: ['esn']},
  {angular: ['esn.registry'], files: ['registry.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.attachment'], files: [
    'attachment/attachment.module.js',
    'attachment/attachment.constant.js',
    'attachment/attachment-icon.component.js',
    'attachment/attachment-icon.controller.js',
    'attachment/attachment.component.js',
    'attachment/attachment.controller.js',
    'attachment/viewer/attachment-viewer.constants.js',
    'attachment/viewer/attachment-viewer.service.js',
    'attachment/viewer/attachment-viewer-registry.service.js',
    'attachment/viewer/attachment-viewer-gallery.service.js',
    'attachment/viewer/attachment-viewer-view.service.js',
    'attachment/viewer/attachment-viewer.directive.js',
    'attachment/viewer/default-viewer/default-viewer.run.js',
    'attachment/viewer/default-viewer/default-viewer.directive.js',
    'attachment/viewer/video-viewer/video-viewer.run.js',
    'attachment/viewer/video-viewer/video-viewer.directive.js',
    'attachment/viewer/image-viewer/image-viewer.run.js',
    'attachment/viewer/image-viewer/image-viewer.directive.js'
  ], innerApps: ['esn']},
  {angular: ['esn.attachment-list'], files: [
    'attachment/list/attachment-list.module.js',
    'attachment/list/attachment-list-providers.service.js',
    'attachment/list/attachment-list.component.js',
    'attachment/list/attachment-list.controller.js',
    'attachment/list/item/attachment-list-item.component.js'
  ], innerApps: ['esn']},
  {angular: ['esn.user-notification'], files: [
    'user-notification/user-notification.module.js',
    'user-notification/list/item/user-notification-list-item.component.js',
    'user-notification/list/user-notification-list.component.js',
    'user-notification/list/user-notification-list.controller.js',
    'user-notification/services/user-notification-counter.service.js',
    'user-notification/services/user-notification.service.js',
    'user-notification/subheader/user-notification-subheader.component.js',
    'user-notification/templates/user-notification-external.directive.js',
    'user-notification/templates/user-notification-template-displayer.component.js',
    'user-notification/toggler/user-notitication-toggler.controller.js',
    'user-notification/toggler/user-notification-toggler.directive.js',
    'user-notification/user-notification.constants.js',
    'user-notification/user-notification.controller.js',
    'user-notification/user-notification.router.js'
  ], innerApps: ['esn']},
  {angular: ['esn.user-configuration'], files: [
    'user-configuration/user-configuration.module.js',
    'user-configuration/user-configuration.service.js',
    'user-configuration/user-configuration.constants.js'
  ], innerApps: ['esn']},
  {angular: ['esn.waves'], files: ['esn.waves.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.mutation-observer'], files: ['esn.mutation-observer.js'], innerApps: ['esn']},
  {angular: ['esn.textarea-autosize'], files: ['textarea-autosize.js'], innerApps: ['esn', 'welcome']},
  {angular: ['esn.login'], files: ['login.js', 'login/login-success.service.js'], innerApps: ['esn', 'welcome', 'password-reset']},
  {angular: ['esn.company'], files: ['company.js'], innerApps: ['welcome']},
  {angular: ['esn.invitation'], files: ['invitation.js'], innerApps: ['welcome']},
  {angular: ['esn.i18n'], files: [
    'i18n/i18n.module.js',
    'i18n/i18n.service.js',
    'i18n/i18n.constants.js',
    'i18n/i18n.config.js',
    'i18n/i18n-loader.service.js',
    'i18n/i18n-interpolator.service.js',
    'i18n/i18n-string.service.js',
    'i18n/i18n.filter.js'
  ], innerApps: ['esn', 'welcome']},
  {angular: ['esn.datetime'], files: [
    'datetime/datetime.module.js',
    'datetime/datetime.run.js',
    'datetime/datetime-date-formater.filter.js',
    'datetime/datetime.constants.js',
    'datetime/datetime.service.js',
    'datetime/timeformat-selector/timeformat-selector.component.js',
    'datetime/timeformat-selector/timeformat-selector.controller.js'
  ], innerApps: ['esn']},
  {angular: ['esn.business-hours'], files: [
    'business-hours/business-hours.module.js',
    'business-hours/working-days/working-days.component.js',
    'business-hours/working-days/working-days.controller.js',
    'business-hours/working-hours/working-hours.component.js',
    'business-hours/working-hours/working-hours.controller.js',
    'business-hours/business-hours.component.js',
    'business-hours/business-hours.controller.js'
  ], innerApps: ['esn']},
  {angular: ['esn.feature-registry'], files: [
    'feature-registry/feature-registry.module.js',
    'feature-registry/feature-registry.service.js'
  ], innerApps: ['esn', 'welcome']},
  {angular: ['esn.shortcuts'], files: [
    'shortcuts/shortcuts.module.js',
    'shortcuts/shortcuts.config.js',
    'shortcuts/shortcuts.run.js',
    'shortcuts/shortcuts.constants.js',
    'shortcuts/shortcuts.service.js',
    'shortcuts/shortcuts-registry.service.js',
    'shortcuts/shortcuts-global.service.js',
    'shortcuts/shortcuts-action.service.js',
    'shortcuts/sheet/shortcuts-sheet.service.js',
    'shortcuts/sheet/shortcuts-sheet.controller.js'
  ], innerApps: ['esn']}
];

if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-process-env
  injections.unshift({
    angular: ['esn.production'],
    files: ['production.js'],
    innerApps: ['esn', 'welcome']
  });
}

function coreFrontendInjections(webserverWrapper) {
  injections.forEach(injection => {
    const localJsFiles = injection.files.map(file => join(CORE_JS_BASEPATH, file));

    webserverWrapper.injectAngularModules('core', injection.files, injection.angular, injection.innerApps, {
      localJsFiles
    });
  });
}

module.exports = coreFrontendInjections;
