// COMPONENTS
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";

// ICONS
import LinkedinIcon from "./assets/ic_linkedin.svg";
import XIcon from "./assets/ic_x.svg";
import DribbbleIcon from "./assets/ic_dribbble.svg";

import "./App.css";

function App() {
  return (
    <>
      <Team.Root>
        <Team.Headline />

        <Team.Content>
          <Team.Cards>
            <Team.Card
              fullname="Samuel Leite Pereira"
              jobTitle="Desenvolvedor Fullstack"
              description="Quem não sabe o que busca, não identifica o que acha."
              image="https://avatars.githubusercontent.com/u/131712358?v=4"
            >
              <Team.SocialNetworks>
                <Team.SocialNetwork
                  icon={LinkedinIcon}
                  hyperlink="https://linkedin.com"
                />
                <Team.SocialNetwork icon={XIcon} hyperlink="https://x.com" />
                <Team.SocialNetwork
                  icon={DribbbleIcon}
                  hyperlink="https://dribbble.com"
                />
              </Team.SocialNetworks>
            </Team.Card>

            <Team.Card
              fullname="Paulo Bezerra"
              jobTitle="Desenvolvedor Front-End"
              description="Caminhos tortuosos são apenas desafios para minha alma inquieta. Cada passo é uma história, cada aventura é uma lição."
              image="https://avatars.githubusercontent.com/u/137209259?v=4"
            >
              <Team.SocialNetworks>
                <Team.SocialNetwork
                  icon={LinkedinIcon}
                  hyperlink="https://linkedin.com"
                />
                <Team.SocialNetwork icon={XIcon} hyperlink="https://x.com" />
                <Team.SocialNetwork
                  icon={DribbbleIcon}
                  hyperlink="https://dribbble.com"
                />
              </Team.SocialNetworks>
            </Team.Card>

            <Team.Card
              fullname="Lucas Correa"
              jobTitle="Desenvolvedor Fullstack"
              description=" Cada palavra é uma jornada, cada aprendizado é uma vitória."
              image="https://avatars.githubusercontent.com/u/91700610?v=4"
            >
              <Team.SocialNetworks>
                <Team.SocialNetwork
                  icon={LinkedinIcon}
                  hyperlink="https://linkedin.com"
                />
                <Team.SocialNetwork icon={XIcon} hyperlink="https://x.com" />
                <Team.SocialNetwork
                  icon={DribbbleIcon}
                  hyperlink="https://dribbble.com"
                />
              </Team.SocialNetworks>
            </Team.Card>

            <Team.Card
              fullname="Greice Santana"
              jobTitle="Analista de Dados"
              description="Minha vida é uma obra de arte em constante evolução, cada momento é uma nova inspiração."
              image="https://avatars.githubusercontent.com/u/103227472?v=4"
            >
              <Team.SocialNetworks>
                <Team.SocialNetwork
                  icon={LinkedinIcon}
                  hyperlink="https://linkedin.com"
                />
                <Team.SocialNetwork icon={XIcon} hyperlink="https://x.com" />
                <Team.SocialNetwork
                  icon={DribbbleIcon}
                  hyperlink="https://dribbble.com"
                />
              </Team.SocialNetworks>
            </Team.Card>

            <Team.Card
              fullname="Milena Melo"
              jobTitle="Desenvolvedora Full-Stack"
              description="Cada batalha é uma oportunidade de mudança, cada vitória é um passo em direção à justiça."
              image="https://avatars.githubusercontent.com/u/148809944?v=4"
            >
              <Team.SocialNetworks>
                <Team.SocialNetwork
                  icon={LinkedinIcon}
                  hyperlink="https://linkedin.com"
                />
                <Team.SocialNetwork icon={XIcon} hyperlink="https://x.com" />
                <Team.SocialNetwork
                  icon={DribbbleIcon}
                  hyperlink="https://dribbble.com"
                />
              </Team.SocialNetworks>
            </Team.Card>

            <Team.Card
              fullname="Daniel"
              jobTitle="Analista de Dados"
              description="In God we trust. All others, bring me DATA."
              image="https://avatars.githubusercontent.com/u/132000699?v=4"
            >
              <Team.SocialNetworks>
                <Team.SocialNetwork
                  icon={LinkedinIcon}
                  hyperlink="https://linkedin.com"
                />
                <Team.SocialNetwork icon={XIcon} hyperlink="https://x.com" />
                <Team.SocialNetwork
                  icon={DribbbleIcon}
                  hyperlink="https://dribbble.com"
                />
              </Team.SocialNetworks>
            </Team.Card>
          </Team.Cards>
        </Team.Content>
      </Team.Root>

      <Contact.Root>
        <Contact.Headline />
        <Contact.Form>
          <Contact.Input name="Name" />
          <Contact.Input name="Email" />
          <Contact.Textarea name="Message" />
          <Contact.Terms name="I accepted the" hyperlink="#" />
          <Contact.Button text="Submit" type="submit" />
        </Contact.Form>
      </Contact.Root>

      <Header.Root>
        <Header.Headline title="Medium length hero headline goes here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat." />

        <Header.Actions>
          <Header.Button primary text="Submit" action={() => console.log("Submit Button")} />
          <Header.Button text="Cancel" action={() => console.log("Cancel Button")} />
        </Header.Actions>
      </Header.Root>
    </>
  );
}

export default App;
