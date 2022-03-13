NYC Instruments Rental Project


====================================================

New instructions for DevCloud users:

Step 0:
Follow instructions to set up Devcloud login
https://devcloud.intel.com/oneapi/get_started/baseToolkitSamples/

Step1:
Open new terminal, let’s call it terminal 1: 

1.ssh devcloud (enter basic version) 

2.qsub -I（Enter an advanced version） 

3.Find hostname suffix, For example: hostname ”u135599@s001-n054:~$” -> s001-n054 

Step2:
Open another terminal, let’s call this terminal 2 

1.ssh -L 3000:localhost:3000 devcloud (connect the local 3000 port to the basic DevCloud’s 3000 port) 

2.ssh -L 3000:localhost:3000 “hostname suffix”(connect the basic 3000 port to the advanced 3000 port, for example, ssh -L 3000:localhost:3000 s001-n054) 

3.git clone https://github.com/pumpkin649/nyc-music-rental.git 

4.cd nyc-music-rental/final_build 

5.python3 -m http.server 3000 

6.Open a browser, input “http://localhost:3000/”

====================================================

Old instructions:

1. navigate to the root directory.

2. npm install.

3. npm start.

4. open localhost:3000 via Chrome.
