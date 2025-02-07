import PageH1 from '../../PageH1';
import SeparatorBottomImage from '../../../../assets/images/landing/separator-bottom.svg'
const TitleSection = ({ title }) => {
    return (
        <section className="relative pt-20 px-14 max-1024:pt-7 max-1024:px-4 max-1024:from-20% max-700:from-30% max-520:from-50%">
            <div className="flex justify-center flex-col mb-20">
                <PageH1>

                    <p className="text-[48px] inline-block bg-gradient-to-r from-[var(--sandy-brown)] from-0%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
                        {title}
                    </p>
                </PageH1>


            </div>
            <img src={SeparatorBottomImage} className="w-full" alt="" />
        </section>
    );
};

export default TitleSection;

