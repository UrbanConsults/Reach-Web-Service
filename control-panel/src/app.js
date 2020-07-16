requirejs.config({
    paths: {
        "carbon-components": "libs/carbon-components/index",
        "carbon-components-react": "libs/carbon-components-react/index",
        "carbon-icons": "libs/carbon-icons/index",
        "object-assign": "libs/object-assign/index",
        "prop-types": "libs/prop-types/index",
        "react": "libs/react/index",
        "react-dom": "libs/react-dom/index",
        "react-is": "libs/react-is/index",
        "react-router": "libs/react-router/index",
        "@carbon/icons-react": "libs/@carbon/icons-react/index",
        "recoil": "libs/recoil/index",
        "react-refresh": "libs/react-refresh/index"
    }
});

const socket = new WebSocket('ws://localhost:8086/livereload');
// Connection opened
socket.addEventListener('open', function (event) {
    // socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log(event);
    window.location.reload();
});

require(["react", "react-dom", "carbon-components-react", "@carbon/icons-react", "recoil"], (React, ReactDOM, ccr, icons, recoil) => {

    const h = React.createElement;
    console.log(ccr);
    console.log(recoil);

    const nav = recoil.atom({
        key: "nav",
        default: {
            active: "Status",
            items: [
                {title: "Status", href: "#"},
                {title: "Accounts", href: "#"},
                {title: "Hosts", href: "#"},
                {title: "Platform", href: "#"},
                {title: "Settings", href: "#"}
            ]
        }
    });

    const useSideBar = () => {
        const [isSideNavExpanded, setExpanded] = React.useState(false);

        React.useEffect(() => {
            const onResize = () => {
                if (window.innerWidth >= 1056 && isSideNavExpanded == true) {
                    setExpanded(false);
                }
            };
            window.addEventListener("resize", onResize);
            return () => {
                window.removeEventListener("resize", onResize);
            }
        }, [isSideNavExpanded]);

        return [isSideNavExpanded, () => {
            setExpanded(!isSideNavExpanded);
        }];
    }

    // console.log(icons);
    const app = () => {

        const [dashNav, setDashNav] = recoil.useRecoilState(nav);

        const [isSideNavExpanded, toggleExpanded] = useSideBar();

        return h("div", {className: "container"}, 
            h(ccr.Header, {"aria-label": "Header"}, 
                h(ccr.HeaderMenuButton, {
                    "aria-label": "Open Menu",
                    onClick: toggleExpanded,
                    isActive: isSideNavExpanded
                }),
                h(ccr.HeaderName, {prefix: "RWS"}, "DASHBOARD"),
                h(ccr.HeaderNavigation, {"aria-label": "Navigation"}, ...dashNav.items.map((item) => h(ccr.HeaderMenuItem, {href: item.href, "aria-current": item.title == dashNav.active ? "page" : undefined}, item.title))),
                h(ccr.HeaderGlobalBar, {}, 
                    h(ccr.HeaderGlobalAction, {title: "Account", "aria-label": "Aaccount"}, h(icons.UserAvatar20)),
                    h(ccr.HeaderGlobalAction, {title: "Notifications", "aria-label": "Notifications"}, h(icons.Notification20))
                ),
                h(ccr.SideNav, {
                    expanded: isSideNavExpanded,
                    defaultExpanded: false,
                    isPersistent: false,
                    "aria-label": "Side Navigation"
                }, 
                    h(ccr.SideNavItems, {}, ...dashNav.items.map((item) => h(ccr.SideNavLink, {href: item.href, "aria-label": item.title, "aria-current": item.title == dashNav.active ? "page" : undefined}, item.title)))    
                )
            )
        );
    };

    const recoil_container = () => {
        return h(recoil.RecoilRoot, {}, h(app));
    }

    ReactDOM.render(h(recoil_container), document.getElementById("app"));
    
});