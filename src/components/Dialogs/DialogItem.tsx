import { NavLink } from "react-router-dom";

// penpals
const DialogItem = ({ name, id }: { name: string, id: number, props: any }) => {
    let path = "/dialogs/" + id;

    return <div>
        <NavLink to={path}>{name}</NavLink>
    </div>
}

export default DialogItem;