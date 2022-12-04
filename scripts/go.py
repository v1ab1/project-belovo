import time
import win32com.client as comctl
time.sleep(5)
wsh = comctl.Dispatch("WScript.Shell")

# Google Chrome window title
wsh.AppActivate("icanhazip.com")
wsh.SendKeys("{F11}")