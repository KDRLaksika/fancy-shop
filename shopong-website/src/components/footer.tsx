import React from 'react'

const footer = () => {
  return (
    <footer
      className=" flex  flex-wrap w-screen  items-center justify-center gap-3 border-t-[5px] border-t-primary py-8 md:flex-col "
      style={{
        ...(isMobile ? { padding: "50px 20px" } : {}),
      }}
    >
      <div className="absolute -top-[0] left-[10vw]">
        <Decoratives.Chipping
          width={70}
          height={10}
          swapColors={true}
          rotation={180}
          angleFactor={10}
        />
      </div>

      <div className="absolute -top-[20px] left-[75vw]">
        <Decoratives.Chipping
          width={100}
          height={15}
          swapColors={true}
          angleFactor={11}
        />
      </div>

      <div
        className="flex flex-wrap justify-center items-center gap-y-6"
        style={{
          ...(isMobile ? { width: "100%"} : {}),
        }}
      >
        <Image src={Logo} alt="" width={250}  className="-translate-x-8 h-20" style={{
          ...(isMobile ? { marginLeft:"60px"} : {}),
        }}/>
        <Image src={SB_Logo} alt="" width={300} className="h-18 mr-4 -translate-x-6" style={{
          ...(isMobile ? { marginLeft:"50px"} : {}),
        }} />
        <Image src={WIE_Logo} alt="" width={290} className="h-18 mr-4 -translate-x-4" style={{
          ...(isMobile ? { marginLeft:"50px"} : {}),
        }} />
        <Image src={IEEE_NSBM_CS_LOGO} alt="" width={180} className="h-18 ml-2"/>
      </div>

      <div
        className="flex w-screen flex-col items-center justify-center "
        style={{
          ...(isMobile ? { flexDirection: "column", width: "100%" } : {}),
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-y-3"
          style={{
            ...(isMobile ? { width: "100%" } : {}),
          }}
        >
          <Decoratives.Comment
            comment="FOLLOW US @"
            className="text-[10px] text-white"
          />

          <div className="flex flex-row gap-5">
            <Link href="https://www.instagram.com">
              <FaInstagram className={iconClasses} size={iconSize} />
            </Link>

            <Link href="https://www.linkedin.com">
              <FaLinkedin className={iconClasses} size={iconSize} />
            </Link>

            <Link href="https://www.facebook.com">
              <FaFacebook className={iconClasses} size={iconSize} />
            </Link>

            <Link href="https://www.youtube.com">
              <FaYoutube className={iconClasses} size={iconSize} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Decoratives.Comment
          comment="© Copyright Duothan. All Rights Reserved"
          className="text-[10px] "
        />
      </div>
    </footer>
  );
}


export default footer
