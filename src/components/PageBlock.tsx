import './PageBlock.css';

function PageBlock(props: { children: React.ReactNode }){
    return (<div className="PageBlock">
        {props.children}
    </div>);
}

export default PageBlock;