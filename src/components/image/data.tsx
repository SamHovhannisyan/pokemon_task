//styles
// import './Images.scss'

import React, {useEffect} from "react"
import { Dispatch } from "redux"
import { useDispatch, shallowEqual,useSelector } from "react-redux"
// import { savePokemons } from "../../store/actions/categoryAction"

//custom imports

type Props = {
}
export const Data: React.FC<Props> = () => {
    const dispatch: Dispatch<any> = useDispatch()

    // const pokmonsData: any = useSelector(
    //     (state: StoreType) => state.categoryReducer.pokemons,
    //     shallowEqual
    // )
    // const page: number = useSelector(
    //     (state: StoreType) => state.image.page,
    //     shallowEqual
    // )
    // const selected: category | null = useSelector(
    //     (state: StoreType) => state.category.selected,
    //     shallowEqual
    // )
    // @ts-ignore
    // useEffect(() => {
    //     dispatch(getImages(selected,page))
    // }, [selected, page, dispatch])

    // useEffect(() => {
    //     dispatch(savePokemons())
    // }, [dispatch])

    // const handleSetPage = () =>{
    //     dispatch(setPage())
    // }

    console.log(pokmonsData, 'pokmonsData')

    return (
        <div className="images">
            {/* <ul >
                {images?.map(image =>{
                    return <li key={image.id}>
                        <img alt={image.id} src={image.url}/>
                    </li>
                })
                }
            </ul>
            {images.length? <button type="button" onClick={handleSetPage}>load more</button> : null} */}
        </div>
    )
}
export default Data;