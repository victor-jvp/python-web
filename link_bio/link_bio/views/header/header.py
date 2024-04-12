import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(
            size="5",
            fallback="BM"
        ),
        rx.text("@mouredev"),
        rx.text("""Hola aqui va el texto de descripcion mas largo.""")
    )
