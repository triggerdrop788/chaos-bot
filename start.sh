#!/bin/bash
python3 bot.py
chmod +x start.sh
worker: ./start.sh
git add .
git commit -m "Add Procfile and deploy script"
git push
#!/bin/bash
python3 bot.py
