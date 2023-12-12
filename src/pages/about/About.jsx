import { Acc } from "../../components/pages/about-components/accordion/Accordion"
import { Better } from "../../components/pages/about-components/better/Better"
import { Mobile } from "../../components/pages/about-components/mobile/Mobile"
import { Values } from "../../components/pages/about-components/values/Values"

export const About = () => {
  return (
    <>
      <Mobile />
      <Better />
      <Values />
      <Acc />
    </>
  )
}
