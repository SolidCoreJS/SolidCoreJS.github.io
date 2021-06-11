import os

os.chdir('D:\[Github]\SolidCoreJS\solidcorejs')

print('')

final_content = ''

for f in os.listdir():
    if f.endswith(".js") and f != 'solidcore.js':
        print('>> Reading', f)
        jsf = open(f, "r")
        content = jsf.read()
        final_content += content
        final_content += '\n\n\n'

with open('solidcore.js', 'w', encoding="utf-8") as fp:
    pass
    print('>> Writing solidcore.js')
    fp.write(final_content)

print('\n>> Done!\n')
