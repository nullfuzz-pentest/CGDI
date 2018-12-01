
[Setup]
AppId={{1729CFC1-2935-4EC1-8589-D903175D07B1}
AppName=CGDI
AppVersion=0.0.4
AppVerName=CGDI 0.0.4
DefaultDirName={pf}\CGDI
DisableProgramGroupPage=yes
OutputBaseFilename="CGDI 0.0.4 Setup"
SolidCompression=yes
Compression=lzma2/ultra64
LZMAUseSeparateProcess=yes
LZMADictionarySize=1048576
LZMANumFastBytes=273

[Languages]
Name: "spanish"; MessagesFile: "compiler:Languages\Spanish.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "D:\Proyecto\CGDI\CGDI-win32-x64\CGDI.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Proyecto\CGDI\CGDI-win32-x64\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{commonprograms}\CGDI"; Filename: "{app}\CGDI.exe"
Name: "{commondesktop}\CGDI"; Filename: "{app}\CGDI.exe"; Tasks: desktopicon

[Run]
Filename: "{app}\CGDI.exe"; Description: "{cm:LaunchProgram,CGDI}"; Flags: nowait postinstall skipifsilent

