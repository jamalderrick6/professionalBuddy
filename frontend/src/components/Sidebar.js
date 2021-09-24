import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { NavLink as RouterNavLink, withRouter } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";
import "../vendor/perfect-scrollbar.css";

// import history from '../pages/history';

import {
  Chip,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

import routes from "../routes/index";

// import logo from './logo/Lobstr_logo.svg';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Box = styled.div`
  margin-top: 21.9px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
`;

const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
    background: #0a2540;
  }
`;

const Scrollbar = styled(PerfectScrollbar)`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const List = styled(MuiList)`
  margin-top: 20px;
`;

const Items = styled.div`
  padding-top: 98px;
  padding-bottom: ${(props) => props.theme.spacing(2.5)}px;
`;

const Brand = styled(ListItem)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.background};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;

const Category = styled(ListItem)`
  display: flex;
  justify-content: center !important;
  width: 40px !important;
  height: 40px;
  border-radius: 45px;

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    svg {
      filter: brightness(0) invert(1);
    }
  }

  &.${(props) => props.activeClassName} {
    background: #ff0000;
    svg {
      filter: brightness(0) invert(1);
    }
  }
`;

const CategoryText = styled.p`
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: #0a2540;
  position: fixed;
  margin-top: 9px;
  margin-left: 115px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: 600;
  width: 70px;
`;

const CategoryIconLess = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconMore = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const LinkBadge = styled(Chip)`
  font-size: 11px;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: ${(props) => props.theme.sidebar.badge.background};

  span.MuiChip-label,
  span.MuiChip-label:hover {
    cursor: pointer;
    color: ${(props) => props.theme.sidebar.badge.color};
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const CategoryBadge = styled(LinkBadge)`
  top: 12px;
`;

function SidebarCategory({
  name,
  icon,
  classes,
  isOpen,
  isCollapsable,
  badge,
  ...rest
}) {
  return (
    <Category {...rest}>
      {icon}
      {isCollapsable ? (
        isOpen ? (
          <CategoryIconMore />
        ) : (
          <CategoryIconLess />
        )
      ) : null}
      {badge ? <CategoryBadge label={badge} /> : ""}
    </Category>
  );
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: routes,
      isHovered: {},
    };
  }

  handleMouseEnter = (index) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  handleMouseLeave = (index) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  // profileClick = () =>{
  //   history.push('/profile')
  // }

  toggle = (index) => {
    // Collapse all elements
    Object.keys(this.state).forEach(
      (item) =>
        this.state[index] ||
        this.setState(() => ({
          [item]: false,
        }))
    );

    // Toggle selected element
    this.setState((state) => ({
      [index]: !state[index],
    }));
  };

  UNSAFE_componentWillMount() {
    /* Open collapse element that matches current url */
    const pathName = this.props.location.pathname;

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/" ? true : false;

      this.setState(() => ({
        [index]: isActive || isOpen || isHome,
      }));
    });
  }

  render() {
    const { classes, staticContext, ...other } = this.props;
    const { array, isHovered } = this.state;
    const WindowLocation = Array.from(
      new Set(window.location.pathname.split("/"))
    );
    console.log("window location", WindowLocation);

    return (
      <Drawer variant="permanent" {...other}>
        <Brand>
          <Box>
            PB
            {/* <a href onClick={() => history.push('/')}> */}
            {/* <img alt="lobstr logo" src={logo}/> */}
            {/* </a> */}
          </Box>
        </Brand>
        <Scrollbar>
          <List disablePadding>
            <Items>
              {array.map((category, index) => (
                <React.Fragment key={index}>
                  <IconContainer>
                    <SidebarCategory
                      onMouseEnter={() => this.handleMouseEnter(index)}
                      onMouseLeave={() => this.handleMouseLeave(index)}
                      isCollapsable={false}
                      to={category.path}
                      activeClassName={
                        // WindowLocation.length === 2 && WindowLocation[1] ===  category.path.replace('/','') ?  'active' :
                        WindowLocation[1] === category.path.replace("/", "")
                          ? "active"
                          : null
                      }
                      component={NavLink}
                      icon={category.icon}
                      disableGutters={true}
                      badge={category.badge}
                    />
                    {isHovered[index] && (
                      <CategoryText>{category.id}</CategoryText>
                    )}
                  </IconContainer>
                </React.Fragment>
              ))}
            </Items>
          </List>
        </Scrollbar>
      </Drawer>
    );
  }
}

export default withRouter(Sidebar);
