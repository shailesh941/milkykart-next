module.exports = {
  apps: [
    {
      name: "milkykart-next",
      script: "npm",
      args: "start",
      cwd: "/var/www/milkykart-next", // your project path
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};