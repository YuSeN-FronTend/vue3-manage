export function generateRoutesFromMenu(menu:any) {
    if (!menu || !menu.length) {
        return;
    }
    let newRouters;
    newRouters = menu.map((item:any) => {
        let paths = loadComponent(item?.component);
        
        let rts = {
            name: item.name,
            path: item.path,
            redirect: item?.redirect,
            meta: item?.meta,
            component: paths,
            children: []
        }
        if (item.children && item.children.length) {
            rts.children = generateRoutesFromMenu(item.children)
        }
        return rts;
    })
    return newRouters
}
function loadComponent(url: string) {
    let Module = import.meta.glob("../view/**/*.vue")
    
    let path = Module[`../view/${url}.vue`];
    return path;
}
