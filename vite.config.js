export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        port: 3000,
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true 
    }
}
