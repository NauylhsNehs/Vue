import { ref } from "vue";

import axios from "axios";

export default function <T>(url: string) {
    const loading = ref(true);
    const result = ref<T | null>(null);
    const errorMsg = ref("");
    axios.get(url).then(Response => {
        loading.value = false
        result.value = Response.data
    }).catch(e => {
        loading.value = false
        errorMsg.value = e.message || '未知错误'
    }
    );

    return {
        loading,
        result,
        errorMsg,
    };
}
