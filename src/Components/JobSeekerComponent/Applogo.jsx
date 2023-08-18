const Applogo = () => {
  return (
    <div>
      <div className="flex justify-center my-24">
        <div className="flex gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.bringin.io" target="_blank">
            <img
              className="lg:w-[200px] lg:h-[62px] w-[130px] h-[32px] md:w-[200px] md:h-[62px]"
              src="/images/playstore.png"
            />
          </a>

          <a href="">
            <img
              className="lg:w-[200px] lg:h-[62px] w-[130px] h-[32px] md:w-[200px] md:h-[62px]"
              src="/images/appstore.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Applogo;
