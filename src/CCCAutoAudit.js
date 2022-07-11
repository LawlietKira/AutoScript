// ==UserScript==
// @name         git自动填审核者
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hjw
// @include      http://git.pathea.com/cccmulti/client_multi/-/merge_requests/new*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let chooseUser = function (a) {
        setTimeout(()=>{
            if (a.find('.dropdown-content li[data-user-id="17"] a').length > 0) {
                a.find('.dropdown-content li[data-user-id="17"] a').trigger('click')
            } else {
                console.log('未找到user')
                chooseUser(a)
            }
        }, 100)
    }
    $('.assign-to-me-link').trigger('click')
    //$('#merge_request_force_remove_source_branch').attr('checked', false)
    //$('.dropdown-menu-reviewer').find('li[data-user-id=17] a').trigger('click')
    let a = $('.merge-request-reviewer .dropdown')
    a.children().trigger('click')
    a.find('.dropdown-input-field').val('wang')
    chooseUser(a)
    // Your code here...
})();