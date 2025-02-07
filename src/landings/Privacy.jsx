import TitleSection from '../components/landing/law/sections/TitleSection';
import FaqSection from '../components/landing/law/sections/FaqSection';
import ContactSection from '../components/landing/general-sections/ContactSection';
import SeparatorBottomImage from '../assets/images/landing/separator-bottom.svg';
const Privacy = () => {
    return (
        <>
            <TitleSection title="Polityka Prywatności" />

            <div className="my-20 max-w-[1024px] mx-auto max-1024:px-4">
                <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-4">

                        <p className="text-[24px] font-bold">Spis treści</p>
                        <p className="text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur (the “Sites”).
                        </p>
                        <p className="text-[16px]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className="text-[16px]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <p className="text-[24px] font-bold">Nagłówek 2</p>
                        <p className="text-[16px]">
                            We collect certain personal information about visitors and users of our Sites. http://rainbowit.net/themes/imroz
                        </p>
                        <p className="text-[16px]">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                            dolorem eum fugiat quo voluptas nulla pariatur.
                        </p>
                        <p className="text-[24px] font-bold">Nagłówek 3</p>
                        <p className="text-[16px]">
                            I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
                            account of the system, and expound the actual teachings.
                        </p>
                        <p className="text-[16px]">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga.
                        </p>
                        <p className="text-[16px]">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of
                            pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal
                            blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and
                            pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when
                            nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain
                            circumstances and owing to the claims of duty or the obligations
                        </p>
                    </div>
                </div>
            </div>
            <FaqSection />
            <img src={SeparatorBottomImage} className="w-full" alt="" />
            <ContactSection />
        </>

    );
};
export default Privacy;
