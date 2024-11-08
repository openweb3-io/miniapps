# Settings Button

![Popup](/components/settings-button.png)

The Settings Button is a component displayed in the top right menu of the Mini App interface. Like
many other Openweb3 Mini Apps components, this button does not have a built-in action, and it's up
to the developer to decide how to handle a click on this button.

Until Openweb3 Mini Apps version `6.10`, this button was only displayed for Mini Apps belonging to
Openweb3 Ads' major advertisers' bots. Starting from version `6.10`, all developers have the option
to display this button using
the [web_app_setup_settings_button](methods.md#web-app-setup-settings-button)
method.

When a user clicks the Settings Button, the Openweb3 application emits
the [settings_button_pressed](events.md#settings-button-pressed) event.