!macro customInstall
   WriteRegStr HKCR ".sb3" "" "hterobotscratch"
   WriteRegStr HKCR ".xml\OpenWithProgids" "hterobotscratchXML" "hterobotscratch"
   WriteRegStr HKCR "hterobotscratch" "" ""
   WriteRegStr HKCR "hterobotscratch\shell" "" ""
   WriteRegStr HKCR "hterobotscratch\shell\open" "" "Open with DouBao编程软件"
   WriteRegStr HKCR "hterobotscratch\shell\open\command" "" '"$INSTDIR\DouBao编程软件.exe" "%1"'
!macroend
!macro customUninstall
   DeleteRegKey HKCR ".sb3"
   DeleteRegKey HKCR "hterobotscratch"
!macroend
