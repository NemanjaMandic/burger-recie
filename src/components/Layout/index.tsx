import React, {FC, ReactNode} from 'react';
import './layout.css';


interface IProps {
  children?: ReactNode;
}
const Layout: FC<IProps> = (props) => {
  return (
   <>
    <div>
AAAAAAAAAAAAAAA
    </div>
    <main className="content">
        {props.children}
    </main>
   </>
  );
}

export default Layout;
