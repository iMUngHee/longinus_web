import React from "react";
import { FiHome } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { SiApache } from "react-icons/si";
import {RiArrowDropDownFill, RiArrowDropUpFill} from 'react-icons/ri';

export const MenuData = [
  {
    title: 'Home',
    path: '/home',
    icon: <FiHome />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
  },
  {
    title: 'Project',
    path: '/project',
    icon: <BsBox />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
  },
  {
    title: 'Post',
    path: '/post',
    icon: <HiOutlinePencil />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
  },
  {
    title: 'Review',
    path: '/review',
    icon: <SiApache />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
  },
]
