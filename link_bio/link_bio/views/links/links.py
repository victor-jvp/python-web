import reflex as rx
from link_bio.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        link_button("Twitch", "#"),
        link_button("YouTube", "https://youtube.com"),
        link_button("Github", "https://github.com"),
        link_button("Git", "#")
    )
