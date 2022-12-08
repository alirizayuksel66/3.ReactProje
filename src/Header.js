import { memo } from "react";

function Header() {
    console.log('Header Rendered')
    return (
        <header>HEADER</header>
    )
}

export default memo(Header)