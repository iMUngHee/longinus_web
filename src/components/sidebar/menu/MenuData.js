import React from "react";
import { FiHome } from "react-icons/fi";
import { BsBox, BsArrowReturnRight } from "react-icons/bs";
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
    subNav: [
      {
        title: 'About',
        path: '/home/about',
        icon: <BsArrowReturnRight />
      },
      {
        title: 'Skill',
        path: '/home/skill',
        icon: <BsArrowReturnRight />
      },
    ]
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <BsBox />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
    subNav: [
      {
        title: 'Project',
        path: '/portfolio/project',
        icon: <BsArrowReturnRight />
      },
    ]
  },
  {
    title: 'Post',
    path: '/post',
    icon: <HiOutlinePencil />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
    subNav: [
      {
        title: 'Algorithm',
        path: '/post/algorithm',
        icon: <BsArrowReturnRight />
      },
      {
        title: 'React',
        path: '/post/react',
        icon: <BsArrowReturnRight />
      },
    ]
  },
  {
    title: 'Review',
    path: '/review',
    icon: <SiApache />,
    iconClosed: <RiArrowDropDownFill />,
    iconOpened: <RiArrowDropUpFill />,
    subNav: [
      {
        title: 'Book',
        path: '/review/book',
        icon: <BsArrowReturnRight />
      },
      {
        title: 'Movie',
        path: '/review/movie',
        icon: <BsArrowReturnRight />
      },
    ]
  },
]
