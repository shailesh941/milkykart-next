module.exports = {
  apps: [
    {
      name: "milkykart-next",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/var/www/milkykart-next",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};