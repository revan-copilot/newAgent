

function SplitLayout({
    title,
    description,
    image,
    imageAlt,
    alignItems = 'center',
    imageSticky = false,
    rightContent,
    children
}) {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="container">
                <div className={`flex flex-col lg:flex-row items-${alignItems} gap-10 lg:gap-20`}>
                    {/* Left Content */}
                    <div className="flex-1 w-full">
                        <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-text-dark mb-4">
                            {title}
                        </h2>
                        <p className="text-text-gray text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
                            {description}
                        </p>

                        {children}
                    </div>

                    {/* Right Content/Image */}
                    <div className={`flex-1 flex justify-center lg:justify-end w-full ${imageSticky ? 'lg:sticky lg:top-32' : ''}`}>
                        {rightContent ? (
                            rightContent
                        ) : (
                            image && (
                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="w-full max-w-[380px] sm:max-w-[500px] object-cover"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SplitLayout;
