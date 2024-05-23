// COMPONENTS
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";

// ICONS
import LinkedinIcon from "./assets/ic_linkedin.svg";
import XIcon from "./assets/ic_x.svg";
import DribbbleIcon from "./assets/ic_dribbble.svg";

import "./App.css";

function App() {
  return (
    <>
      {/* <Team.Root>
        <Team.Headline />

        <Team.Content>
          <Team.Cards>
            <Team.Card
              fullname="Samuel Leite Pereira"
              jobTitle="Desenvolvedor Fullstack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
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
              jobTitle="Desenvolvedora Front-End"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
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
              fullname="Milena"
              jobTitle="Desenvolvedora Full-Stack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
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
      </Team.Root> */}

      <Contact.Root>
        <Contact.Headline />
        <Contact.Form>
          <Contact.Input name="Name" />
          <Contact.Input name="Email" />
          <Contact.Textarea name="Message" />
          <Contact.Terms name="I accepted the" hyperlink="#"/>
          <Contact.Button text="Submit" type="submit" />
        </Contact.Form>
      </Contact.Root>
    </>
  );
}

export default App;
