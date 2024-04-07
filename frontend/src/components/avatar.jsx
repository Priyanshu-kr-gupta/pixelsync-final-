import React from "react";
import {User} from "@nextui-org/react";
import avatarImg from "../assets/image.png"
const avatar = () => {
  return (
    <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: {avatarImg}
      }}
    />
  )
}

export default avatar