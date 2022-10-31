import axios from "axios"
//요청 타임아웃, 요청 헤더 등 인스턴스 생성해서 사용해도 됨

const axiosGet = async (uri,data) => {
    let response = null;
    try {
      response = await axios.get(uri, data);
    //   if (response.status === 200) {
    //     console.log('Okay')
    //   }
    }
    catch(error) {
      response = error.response
      console.log('404 Error')
    }
    finally {
      if (response.status === 200) {
      }
      return response;
    }

}

const axiosPost = async (uri, data) => {
    let response = null;

    try {
        response = await axios.post(uri, data);
        // if (response.status === 200) {
        //   console.log('Okay')
        // }
      }
      catch(error) {
        response = error.response
        console.log('404 Error')
      }
      finally {
        if (response.status === 200) {
        }

        return response;
      }
}

export {axiosGet, axiosPost};