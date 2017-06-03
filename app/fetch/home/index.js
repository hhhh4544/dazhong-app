/* /api/ad
 */
import {get} from '../index'
export function getAd() {
    return get('/api/ad')
}

/*导出2个方法 在Home->Subpage->Ad.js
import {getAd} from '../../../fetch/home'*/

export function getList(city,page) {
    //访问http://localhost:3000/api/ad  可以拿到后台数据
    return get('/api/list/'+city+'/'+page)
}
