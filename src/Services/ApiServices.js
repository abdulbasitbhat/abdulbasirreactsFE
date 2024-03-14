import React, {useState,useEffect} from 'react';

export const get_all_blogs = async () => {
    const requestOptions = {
        method:'GET',
        headers:{'Content-Type':'application/json'}
    }
    var url = `http://127.0.0.1:8000/get_all_blog_posts/`
    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export const get_all_blogs_by_id = async (id) => {
    const requestOptions = {
        method:'GET',
        headers: {'Content-Type': 'application/json'},
    }
    var url = `http://127.0.0.1:8000/get_all_blog_posts/?blog_id=${id}`
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    return data
}

export const create_blog = async (name,blog_data,created_by) => {
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "name": name, "blog_data":blog_data, "created_by":created_by }),
    }
    var url = `http://127.0.0.1:8000/create_blogpost/`
    const response = await fetch(url,requestOptions);
    const data = await response.json();
    return data;
}



// export const get_all_model_categories_id = async (unique_id=null) => {
//     // const token = 'Token ' + get('token')
//     const token = 'Token 32fc5a8fd402ef2cea3c56181be004b8b3787ef3a647a4c5bd6125a2aa36373a'
//     const requestOptions = {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json', Authorization: token },
//       params: {}
//     };
//     var url = ''
//     if(unique_id){
//        url = `${environment.server_root}/api/avatar/get_avatar_categories_id/?unique_id=${unique_id}`
//     }
//     else{
//        url = `${environment.server_root}/api/avatar/get_avatar_categories_id/`
//     }
//     const response = await fetch(url,requestOptions);
//     const data = await response.json();
//     return data;
//   }
//   export const set_avatar_category = async (unique_id) => {
//     // const token = 'Token ' + get('token')
//     const token = 'Token 32fc5a8fd402ef2cea3c56181be004b8b3787ef3a647a4c5bd6125a2aa36373a'
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json', Authorization: token },
//       body: JSON.stringify({ "unique_id": unique_id })
//     };
//     const response = await fetch(`${environment.server_root}/api/avatar/set_avatar_category/`, requestOptions);
//     const data = await response.json();
//     return data;
//   }  