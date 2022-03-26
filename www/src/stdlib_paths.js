;(function($B){

$B.stdlib = {}
var pylist = ['VFS_import','__future__','_codecs','_codecs_jp','_collections','_collections_abc','_compat_pickle','_compression','_contextvars','_csv','_dummy_thread','_frozen_importlib','_functools','_imp','_io','_markupbase','_multibytecodec','_operator','_py_abc','_pydecimal','_queue','_random','_signal','_socket','_sre','_struct','_sysconfigdata','_sysconfigdata_0_brython_','_testcapi','_thread','_threading_local','_weakref','_weakrefset','abc','antigravity','argparse','ast','atexit','base64','bdb','binascii','bisect','browser.aio','browser.ajax','browser.highlight','browser.html','browser.idbcache','browser.indexed_db','browser.local_storage','browser.markdown','browser.object_storage','browser.session_storage','browser.svg','browser.template','browser.timer','browser.ui','browser.webcomponent','browser.websocket','browser.webworker','browser.worker','calendar','cmath','cmd','code','codecs','codeop','colorsys','configparser','contextlib','contextvars','copy','copyreg','csv','dataclasses','datetime','decimal','difflib','doctest','enum','errno','external_import','faulthandler','fnmatch','formatter','fractions','functools','gc','genericpath','getopt','getpass','gettext','glob','gzip','heapq','hmac','imp','inspect','interpreter','io','ipaddress','itertools','json','keyword','linecache','locale','mimetypes','nntplib','ntpath','numbers','opcode','operator','optparse','os','pathlib','pdb','pickle','pkgutil','platform','posixpath','pprint','profile','pwd','py_compile','pydoc','queue','quopri','re','re1','reprlib','select','selectors','shlex','shutil','signal','site','site-packages.__future__','site-packages.docs','site-packages.header','site-packages.test_sp','socket','sre_compile','sre_constants','sre_parse','stat','statistics','string','stringprep','struct','subprocess','symtable','sys','sysconfig','tabnanny','tarfile','tb','tempfile','test.namespace_pkgs.module_and_namespace_package.a_test','textwrap','this','threading','time','timeit','token','tokenize','traceback','turtle','types','typing','uu','uuid','warnings','weakref','webbrowser','zipfile','zipimport','zlib']
for(var i = 0; i < pylist.length; i++){$B.stdlib[pylist[i]] = ['py']}

var js = ['_aio','_ajax','_ast','_base64','_binascii','_io_classes','_json','_jsre','_locale','_multiprocessing','_posixsubprocess','_profile','_sre','_sre_utils','_string','_strptime','_svg','_symtable','_webcomponent','_webworker','_zlib_utils','aes','array','bry_re','builtins','dis','encoding_cp932','hashlib','hmac-md5','hmac-ripemd160','hmac-sha1','hmac-sha224','hmac-sha256','hmac-sha3','hmac-sha384','hmac-sha512','html_parser','long_int','marshal','math','md5','modulefinder','pbkdf2','posix','python_re','rabbit','rabbit-legacy','random','rc4','ripemd160','sha1','sha224','sha256','sha3','sha384','sha512','tripledes','unicodedata']
for(var i = 0; i < js.length; i++){$B.stdlib[js[i]] = ['js']}

var pkglist = ['browser.widgets','collections','concurrent','concurrent.futures','email','email.mime','encodings','html','http','importlib','logging','multiprocessing','multiprocessing.dummy','pydoc_data','site-packages.foobar','site-packages.simpleaio','site-packages.ui','test','test.encoded_modules','test.leakers','test.namespace_pkgs.not_a_namespace_pkg.foo','test.support','test.test_email','test.test_importlib','test.test_importlib.builtin','test.test_importlib.extension','test.test_importlib.frozen','test.test_importlib.import_','test.test_importlib.source','test.test_json','test.tracedmodules','unittest','unittest.test','unittest.test.testmock','urllib']
for(var i  =0; i < pkglist.length; i++){$B.stdlib[pkglist[i]] = ['py', true]}
})(__BRYTHON__)