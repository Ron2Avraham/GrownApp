import React, { useEffect, useState } from 'react';
import IGuide from 'models/IGuide';
import useStyles from './styles';
// const guidePics = '../../assets/guide/'

const Guide = (props: { guide: IGuide }) => {
    const [state, setstate] = useState<any>()
    const classes = useStyles()

    useEffect(() => {
        import("../../assets/guide/" + props.guide.guidePic).then((data) => setstate(data))

    }, [])
    return (
        <div className={classes.shadowDiv}>
            <img src={state !== undefined ? state?.default : ""} style={{ minHeight: 200, width: "50%", borderRadius: 25, marginTop: 50,height: 'auto' }} />
        </div>
    )
}
export default Guide;