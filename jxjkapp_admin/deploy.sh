
expect <<-EOF
set timeout -1
spawn ssh root@39.108.58.184
expect "Welcome"
send "tmux a -t jxjk \r"
expect "server start"
send "\03"
expect "*#"
send "git pull \r"
expect "*#"
send "npm run build\r"
expect "Build complete"
send "npm run proxy-server\r"
expect "server start"
send "\02"
send "d"
expect "detached"
send "exit\r"
interact
expect eof
EOF
echo "部署成功!"
