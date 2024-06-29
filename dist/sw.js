self.addEventListener('fetch', event => {
    // 检查请求 URL 或其他条件
    const url = new URL(event.request.url);
    // 例如，只对同源请求添加头部
    if (url.origin === self.location.origin) {
        console.log(url.origin, self.location.origin)
        event.respondWith(
            fetch(event.request).then(response => {
                const newHeaders = new Headers(response.headers);
                newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
                newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
                return new Response(response.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders
                });
            })
        );
    } else {
        console.log(url.origin, "123")
        // 对于不需要修改的请求，直接返回原始响应
        event.respondWith(fetch(event.request));
    }
});
