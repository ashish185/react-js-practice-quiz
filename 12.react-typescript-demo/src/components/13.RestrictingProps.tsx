
/* 
Restricting Props ka matlab h


*/

type CommonProps = {
    title: string
}

type IconNotSrc = CommonProps & {
    icon?: JSX.Element;
    src?: never;
};

type SrcNotIcon = CommonProps & {
    icon?: never;
    src?: string;
};

type AvatarProps = IconNotSrc | SrcNotIcon;

export const RestrictingPropsContainer = () => {
    return (
        <div>
            <Avatar title="abc" />
            <Avatar src="img/hero.png" title="abc" />
            <Avatar icon={<img src="logo192.png" alt="Logo" />} title="abc" />
        </div>
    )
}

const Avatar = (props: AvatarProps): JSX.Element => {
    const { icon, src, title } = props;
    return (
        <div title={title}>
            {icon && icon}
            {JSON.stringify(src)}
        </div>
    );
};
