# Theming

![Theming](/functionality/theming.png)

Mini Apps are web applications designed to have a native appearance. This includes not only the use
of components that mimic native elements but also the adoption of the parent application's color
scheme.

Mini Apps are provided with colors that currently match those used in the Openweb3 application.
These colors should be utilized by Mini Apps to ensure a consistent and native look.

## Retrieving

### Launch Parameter

Openweb3 Mini Apps provides theming data through a launch parameter known
as [tgWebAppThemeParams](launch-parameters.md#tgwebappthemeparams). This
parameter represents a serialized JSON object containing a list of optional properties, with each
property describing one of the palette colors.

Here is a complete example of the parameter value:

```json
{
  "accent_text_color": "#6ab2f2",
  "bg_color": "#17212b",
  "button_color": "#5288c1",
  "button_text_color": "#ffffff",
  "bottom_bar_bg_color": "#ffffff",
  "destructive_text_color": "#ec3942",
  "header_bg_color": "#17212b",
  "hint_color": "#708499",
  "link_color": "#6ab3f3",
  "secondary_bg_color": "#232e3c",
  "section_bg_color": "#17212b",
  "section_header_text_color": "#6ab3f3",
  "subtitle_text_color": "#708499",
  "text_color": "#f5f5f5"
}
```

### Openweb3 Mini Apps Method

Nevertheless, retrieving theming data via launch parameters is not the only way. Openweb3 Mini Apps
also permits obtaining the theme through a method
called [web_app_request_theme](methods.md#web-app-request-theme).

As a result of calling this method, Openweb3 will emit an event
named [theme_changed](events.md#theme-changed). The payload of this event
contains a property called `theme_params`, which has the format described in the previous section.

## Background and Header Colors

As long as a Mini App is always displayed within a native component, which consists of parts such
as the _header_ and _body_, Openweb3 Mini Apps also allows changing their colors.

To change the header color, developers should utilize
the [web_app_set_header_color](methods.md#web-app-set-header-color) method,
which provides a way to set the color either by using a theme key or a custom RGB string.

To update the body color, it is required to use
the [web_app_set_background_color](methods.md#web-app-set-background-color)
method.
