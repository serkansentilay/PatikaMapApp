import axios from "axios";
import { useState, useEffect, useCallback } from "react"

export default useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)




    // bu şekilde useeffect fetch her çağrıldığında yeniden oluşturulacak bunun yerine 0 dan oluşturmak yerine
    //**
    // const fetch = async () => {
    //     try {
    //         const { data: response } = await axios.get(url)
    //         setData(response)
    //         setLoading(false)
    //     } catch (error) {
    //         setError(error)
    //         setLoading(false)
    //     }

    // }

    // useEffect(() => {
    //     fetch()
    // }, [fetch])




    // 1. çözüm fetch içindekini useeffecte yaz then catch kullan 
    // useEffect(() => {
    //     try {
    //         const { data: response } = axios.get(url)
    //          .then
    //         .catch
    //         setData(response)
    //         setLoading(false)
    //     } catch (error) {
    //         setError(error)
    //         setLoading(false)
    //     }
    // }, [fetch])



    //2.çözmü callback kullanmak, içine gönderdiğimiz fonksiyonu tekrar tekrar çağırıldığı zaman oluşturmuyor mevcut
    //olan en son değişmiş halini, hafızada tuttuğu veriyi gönderiyor
    // usecallback 1.parametresi callback, içine gönderdiğimiz fonksiyon, 2.parametrei dependency hangi koşullarda değişmesi gerekir, hangi durumda şartlar olmalı bunu da biz şuan url değiştiğinde yapmasını istiyoruz
    //bu fonksiyon çağrı işlemi gerçekleşiyor 
    //url parametresini ilk parametrede ayarlamazsak hep aynı değeri dönderecektir
    const fetch = useCallback(async () => {
        try {
            const { data: response } = await axios.get(url)
            setData(response)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }

    }, [url])


    useEffect(() => {
        fetch()
    }, [fetch])

    return { data, error, loading }


    //usecallback bir fonksiyonun değişim durumunu takip eder
    //usememo belli bir değeri takip eder, sabit değerleri takip eder, örn username herhangi bir yolla tetiklenecek gereksiz yere tekrar tanımlanmaya maruz kalacak durumlarda kullanılır
    //use memo kullanıldığında bir componentin tekrar tekrar render aldığında aynı değer generate( oluşmayacak) edilmeyecek

    // const filteredValues = React.useMemo(data.filter(...),[data]) gibi 1.parametre tekrar render olmayacak olanı belirliyoruz 2.parametre hangi koşulda tekrar çağırılsın onu belirliyoruz ve böylelikle boş yere render olmayacak
    //her seferinde filtrele olmayacak sadece data gönderdiğimiz için data değiştiğinde çalışacak

}