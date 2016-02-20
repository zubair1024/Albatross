/**
 * Created by zubair on 20-Feb-16.
 */

App.component.Cmd = function () {
    console.log('Cmd is running..');

    var me = this;

    /**
     * Ajax Setup
     */
    $.ajaxSetup({
        dataType: "json",
        type: "POST",
        crossDomain: true
    });

    /**
     * Log in functionality
     */
    var loginUser = function () {
        $.ajax({
            url: App.baseUrl + '/logon',
            data: {
                'username': $('#email').val(),
                'password': $('#password').val()
            },
            success: function (res) {
                window.location.pathname = '/dashboard';
            },
            error: function (err) {
                console.log(err);
                $('html').html(err.responseText);
            }
        });
    };

    /**
     * Install handlers
     */
    var installHandlers = function () {
        //login a give user
        $('#logIn').click(function () {
            loginUser();
        });
        //Navigation button
        $(".button-collapse").sideNav();
    };

    installHandlers();
};

