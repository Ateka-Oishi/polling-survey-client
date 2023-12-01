// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-4/12 my-4 text-center font-bold mx-auto">
            <p className="text-[#854D0E] md:text-xl">--- {subheading} ---</p>
            <h3 className="text-xl md:text-3xl  text-[#854D0E] uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;