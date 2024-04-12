/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { isTrue } from "/utils/state"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_8117202eaed9ff0539a2f585717363c1 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`#`} passHref={true}>
  <RadixThemesButton>
  {`Git`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_a60f3ecd8b12d50969ee21ad8634d8d3 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://youtube.com`} passHref={true}>
  <RadixThemesButton>
  {`YouTube`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_682a658ce064c280eb7f4e7fee438a16 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`#`} passHref={true}>
  <RadixThemesButton>
  {`Twitch`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_61464b2eeebc3c917b7e09a91d9eb917 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com`} passHref={true}>
  <RadixThemesButton>
  {`Github`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "zIndex": "999"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"height": "40px"}}>
  {`mouredev`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesAvatar fallback={`BM`} size={`5`}/>
  <RadixThemesText as={`p`}>
  {`@mouredev`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Hola aqui va el texto de descripcion mas largo.`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <Link_682a658ce064c280eb7f4e7fee438a16/>
  <Link_a60f3ecd8b12d50969ee21ad8634d8d3/>
  <Link_61464b2eeebc3c917b7e09a91d9eb917/>
  <Link_8117202eaed9ff0539a2f585717363c1/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <img src={`favicon.ico`}/>
  <RadixThemesLink asChild={true}>
  <NextLink href={`https://victor-jvp.github.io`} passHref={true}>
  {`2020-2024. Aqui va el footer.`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`}>
  {`Sigue el footer aca abajo`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Link Bio | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
