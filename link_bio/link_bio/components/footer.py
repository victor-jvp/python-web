import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(f"2020-{datetime.date.today().year}. Aqui va el footer.",
                href="https://victor-jvp.github.io"),
        rx.text("Sigue el footer aca abajo")
    )
