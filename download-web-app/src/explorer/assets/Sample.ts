export const tempHCmock: string = `Package: libws-commons-util-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 101
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.0.1-7
Description: Common utilities from the Apache Web Services Project
 This is a small collection of utility classes, that allow high
 performance XML processing based on SAX.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://ws.apache.org/commons/util/

Package: python-pkg-resources
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 175
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: distribute
Version: 0.6.24-1ubuntu1
Replaces: python2.3-setuptools, python2.4-setuptools
Provides: python2.6-setuptools, python2.7-setuptools
Depends: python (>= 2.6), python (<< 2.8)
Suggests: python-distribute, python-distribute-doc
Conflicts: python-setuptools (<< 0.6c8-3), python2.3-setuptools (<< 0.6b2), python2.4-setuptools (<< 0.6b2)
Description: Package Discovery and Resource Access using pkg_resources
 The pkg_resources module provides an API for Python libraries to
 access their resource files, and for extensible applications and
 frameworks to automatically discover plugins.  It also provides
 runtime support for using C extensions that are inside zipfile-format
 eggs, support for merging packages that have separately-distributed
 modules or subpackages, and APIs for managing Python's current
 "working set" of active packages.
Original-Maintainer: Matthias Klose <doko@debian.org>
Homepage: http://packages.python.org/distribute
Python-Version: 2.6, 2.7

Package: tcpd
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: net
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: tcp-wrappers
Version: 7.6.q-21
Replaces: libwrap0 (<< 7.6-8)
Depends: libc6 (>= 2.4), libwrap0 (>= 7.6-4~)
Description: Wietse Venema's TCP wrapper utilities
 Wietse Venema's network logger, also known as TCPD or LOG_TCP.
 .
 These programs log the client host name of incoming telnet,
 ftp, rsh, rlogin, finger etc. requests.
 .
 Security options are:
  - access control per host, domain and/or service;
  - detection of host name spoofing or host address spoofing;
  - booby traps to implement an early-warning system.
Original-Maintainer: Marco d'Itri <md@linux.it>

Package: libbsf-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 130
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:2.4.0-5
Depends: libapache-pom-java
Suggests: bsh, libxalan2-java, rhino
Description: Bean Scripting Framework to support scripting languages in Java
 Bean Scripting Framework (BSF) is a set of Java classes which provides
 scripting language support within Java applications, and access to Java
 objects and methods from scripting languages. BSF allows one to write JSPs in
 languages other than Java while providing access to the Java class library. In
 addition, BSF permits any Java application to be implemented in part (or
 dynamically extended) by a language that is embedded within it. This is
 achieved by providing an API that permits calling scripting language engines
 from within Java, as well as an object registry that exposes Java objects to
 these scripting language engines.
 .
 BSF supports these scripting languages:
  * Python (using Jython)
  * JavaScript (using rhino)
  * XSLT Stylesheets (as a component of Apache XML project's Xalan and Xerces)
  * BeanShell (using bsh) via its own bsf adapter
 .
 Support for Tcl, NetRexx is not available in this Debian
 package since Jacl, NetRexx (non-free) are not packaged.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jakarta.apache.org/bsf/

Package: libaspectj-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 11710
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: aspectj
Version: 1.6.12+dfsg-3
Replaces: aspectj (<< 1.6.10+dfsg-1)
Suggests: aspectj
Conflicts: aspectj (<< 1.6.10+dfsg-1)
Description: aspect-oriented extension for Java - library
 AspectJ enables the clean modularization of crosscutting concerns
 such as: error checking and handling, synchronization, context-sensitive
 behavior, performance optimizations, monitoring and logging, debugging
 support, multi-object protocols.
 .
 This package provides the JAR libraries of aspectj.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.eclipse.org/aspectj

Package: libslf4j-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 315
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.6.4-1
Suggests: libcommons-logging-java, liblog4j1.2-java
Description: Simple Logging Facade for Java
 The Simple Logging Facade for Java (or SLF4J) is intended to serve as
 a simple facade for various logging APIs allowing to the end-user to
 plug in the desired implementation at deployment time. SLF4J also
 allows for a gradual migration path away from Apache Commons
 Logging (CL)
 .
 Logging API implementations can either choose to implement the SLF4J
 interfaces directly, e.g. logback or SimpleLogger. Alternatively, it
 is possible (and rather easy) to write SLF4J adapters for the given
 API implementation, e.g. Log4jLoggerAdapter or JDK14LoggerAdapter.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.slf4j.org/

Package: libplexus-sec-dispatcher-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 89
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-sec-dispatcher
Version: 1.3.1-5
Depends: junit (>= 3.8.2), libplexus-cipher-java, libplexus-container-default-java, libplexus-utils-java
Suggests: libplexus-sec-dispatcher-java-doc
Description: Plexus Security Dispatcher Component used by Maven
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: https://github.com/sonatype/plexus-sec-dispatcher

Package: libtext-wrapi18n-perl
Status: install ok installed
Priority: required
Section: perl
Installed-Size: 68
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.06-7
Depends: libtext-charwidth-perl
Description: internationalized substitute of Text::Wrap
 This module is a substitution for Text::Wrap, supporting
 multibyte characters such as UTF-8, EUC-JP, and GB2312, fullwidth
 characters such as east Asian characters, combining characters
 such as diacritical marks and Thai, and languages which don't
 use whitespaces between words such as Chinese and Japanese.
 .
 It provides wrap().
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://search.cpan.org/search?module=Text::WrapI18N

Package: java-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: java
Installed-Size: 242
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.43ubuntu2
Suggests: default-jre, equivs
Description: Base of all Java packages
 This package must be installed in the system if a Java environment
 is desired. It covers useful information for Java users in
 Debian GNU/Linux, including:
  * The Java policy document which describes the layout of Java support in
    Debian and how Java packages should behave.
  * The Debian-Java-FAQ which provides information on the status of
    Java support in Debian, available compilers, virtual machines, Java
    programs and libraries as well as on legal issues.
  * Information on how to create dummy packages to fulfill java2
    requirements.
Original-Maintainer: Debian Java Mailing List <debian-java@lists.debian.org>

Package: libantlr-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 493
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: antlr
Version: 2.7.7+dfsg-3
Replaces: antlr (<< 2.7.7-8)
Breaks: antlr (<< 2.7.7-8)
Description: language tool for constructing recognizers, compilers etc (java library)
 ANTLR, ANother Tool for Language Recognition, (formerly PCCTS) is
 a language tool that provides a framework for constructing recognizers,
 compilers, and translators from grammatical descriptions containing C++
 or Java actions [You can use PCCTS 1.xx to generate C-based parsers].
 .
 This package contains the java libraries without a dependency on any runtime
 to be able to bootstrap gcj without a dependency on a java runtime.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.antlr2.org/

Package: libhttp-date-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 64
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.00-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, libtimedate-perl
Breaks: libwww-perl (<< 6.00)
Description: module of date conversion routines
 HTTP::Date provides functions that deal the date formats used by the HTTP
 protocol (and then some more). Only the first two functions, time2str() and
 str2time(), are exported by default.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTTP-Date/

Package: libio-stringy-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 273
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: io-stringy
Version: 2.110-5
Depends: perl
Description: Perl modules for IO from scalars and arrays
 The libio-stringy-perl package (which corresponds to the CPAN package
 IO-stringy) provides the following Perl modules:
   IO::AtomicFile    Write a file which is updated atomically
   IO::Lines         I/O handle to read/write to array of lines
   IO::Scalar        I/O handle to read/write to a string
   IO::ScalarArray   I/O handle to read/write to array of scalars
   IO::Wrap          Wrap old-style FHs in standard OO interface
   IO::WrapTie       Tie your handles & retain full OO interface
Original-Maintainer: Bart Martens <bartm@debian.org>
Homepage: http://search.cpan.org/dist/IO-stringy/

Package: debconf
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 609
Maintainer: Colin Watson <cjwatson@ubuntu.com>
Architecture: all
Version: 1.5.42ubuntu1
Replaces: debconf-tiny
Provides: debconf-2.0
Pre-Depends: perl-base (>= 5.6.1-4)
Recommends: apt-utils (>= 0.5.1), debconf-i18n
Suggests: debconf-doc, debconf-utils, whiptail | dialog | gnome-utils, libterm-readline-gnu-perl, libgtk2-perl (>= 1:1.130), libnet-ldap-perl, perl, libqtgui4-perl, libqtcore4-perl
Conflicts: apt (<< 0.3.12.1), cdebconf (<< 0.96), debconf-tiny, debconf-utils (<< 1.3.22), dialog (<< 0.9b-20020814-1), menu (<= 2.1.3-1), whiptail (<< 0.51.4-11), whiptail-utf8 (<= 0.50.17-13)
Conffiles:
 /etc/apt/apt.conf.d/70debconf 7e9d09d5801a42b4926b736b8eeabb73
 /etc/bash_completion.d/debconf 8fa1862734fbe54d7178aaaa419f5a11
 /etc/debconf.conf 8c0619be413824f1fc7698cee0f23811
Description: Debian configuration management system
 Debconf is a configuration management system for debian packages. Packages
 use Debconf to ask questions when they are installed.
Original-Maintainer: Debconf Developers <debconf-devel@lists.alioth.debian.org>

Package: libhttpcore-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 454
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: httpcomponents-core
Version: 4.1.4-1
Provides: libhttpcore-nio-java
Description: set of low level HTTP transport components for Java
 HttpCore is a set of low level HTTP transport components that can be used
 to build custom client and server side HTTP services with a minimal
 footprint. HttpCore supports two I/O models:
 .
  - blocking I/O model, based on the classic Java I/O;
  - non-blocking, event driven I/O model based on Java NIO.
 .
 The blocking I/O model may be more appropriate for data intensive, low
 latency scenarios, whereas the non-blocking model may be more appropriate
 for high latency scenarios where raw data throughput is less important
 than the ability to handle thousands of simultaneous HTTP connections in
 a resource efficient manner.
Original-Maintainer: David Paleino <dapal@debian.org>
Homepage: http://hc.apache.org/httpcomponents-core/index.html

Package: liblog4j1.2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 465
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: apache-log4j1.2
Version: 1.2.16-3ubuntu1
Suggests: liblog4j1.2-java-doc, libgnumail-java, libmx4j-java
Description: Logging library for java
 log4j is a tool to help the programmer output log statements to a variety of
 output targets.
 .
 It is possible to enable logging at runtime without modifying the application
 binary. The log4j package is designed so that log statements can remain in
 shipped code without incurring a high performance cost.
 .
 One of the distinctive features of log4j is the notion of hierarchical
 loggers. Using loggers it is possible to selectively control which log
 statements are output at arbitrary granularity.
 .
 Log4j can output to: a file, a rolling file, a database with a JDBC driver,
 many output  asynchronously, a JMS Topic, a swing based logging console,
 the NT event log, /dev/null, a SMTP server (using javamail), a socket server,
 syslog, telnet daemon and stdout.
 .
 The format of the output can be defined using one of the various layout
 (or user defined layout) like: simple text, html, date, pattern defined and
 XML.
Homepage: http://logging.apache.org/log4j/1.2/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libjaxp1.3-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 661
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.3.05-2ubuntu2
Suggests: libjaxp1.3-java-gcj
Conflicts: libxalan2-java (<= 2.7.1-3)
Description: Java XML parser and transformer APIs (DOM, SAX, JAXP, TrAX)
 xml-apis.jar from the Apache XML Commons project is used by the Xerces-J XML
 parser and Xalan-J XSLT processor and specifies these APIs:
  * Document Object Model (DOM) level 3
  * Simple API for XML (SAX) 2.0.2
  * Java APIs for XML Processing (JAXP) 1.3.04
  * Transformation API for XML (TrAX) 1.3.04
  * Document Object Model (DOM) Level 3 Load and Save
  * JSR 206 Java API for XML Processing 1.3
 .
 These classes are also used in Sun's reference implementation. A GPL'ed
 implementation of these APIs can be found in the libgnujaxp-java package.
Homepage: http://java.sun.com/xml/jaxp/index.jsp
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libitext1-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1315
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.4-5
Description: Java Library to generate PDF on the Fly
 iText is a library that allows you to generate PDF files on the fly.
 The iText classes are very useful for people who need to generate read-only,
 platform independent documents containing text, lists, tables and images.
 The library is especially useful in combination with Java(TM)
 technology-based Servlets: The look and feel of HTML is browser dependent;
 with iText and PDF you can control exactly how your servlet's output will look.
 iText requires JDK 1.2. It's available for free under a multiple license:
 MPL and LGPL.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.lowagie.com/iText/

Package: libelf1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 164
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: elfutils
Version: 0.152-1ubuntu3
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: library to read and write ELF files
 The libelf1 package provides a shared library which allows reading and
 writing ELF files on a high level.  Third party programs depend on
 this package to read internals of ELF files.  The programs of the
 elfutils package use it also to generate new ELF files.
 .
 This library is part of elfutils.
Homepage: https://fedorahosted.org/elfutils/
Original-Maintainer: Kurt Roeckx <kurt@roeckx.be>

Package: memtest86+
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 2404
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.20-1.1ubuntu1
Depends: debconf (>= 0.5) | debconf-2.0
Suggests: hwtools, memtester, kernel-patch-badram, memtest86, grub-pc | grub-legacy, mtools
Conffiles:
 /etc/grub.d/20_memtest86+ 6dc48efccb95680ab07349956a48fef3
Description: thorough real-mode memory tester
 Memtest86+ scans your RAM for errors.
 .
 This tester runs independently of any OS - it is run at computer
 boot-up, so that it can test *all* of your memory.  You may want to
 look at 'memtester', which allows to test your memory within Linux,
 but this one won't be able to test your whole RAM.
 .
 It can output a list of bad RAM regions usable by the BadRAM kernel
 patch, so that you can still use your old RAM with one or two bad bits.
 .
 Memtest86+ is based on memtest86 3.0, and adds support for recent
 hardware, as well as a number of general-purpose improvements,
 including many patches to memtest86 available from various sources.
 .
 Both memtest86 and memtest86+ are being worked on in parallel.
Homepage: http://www.memtest.org/
Original-Maintainer: Yann Dirson <dirson@debian.org>

Package: dash
Essential: yes
Status: install ok installed
Priority: required
Section: shells
Installed-Size: 215
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.5.7-2ubuntu2
Depends: debianutils (>= 2.15), dpkg (>= 1.15.0)
Pre-Depends: libc6 (>= 2.14)
Description: POSIX-compliant shell
 The Debian Almquist Shell (dash) is a POSIX-compliant shell derived
 from ash.
 .
 Since it executes scripts faster than bash, and has fewer library
 dependencies (making it more robust against software or hardware
 failures), it is used as the default system shell on Debian systems.
Homepage: http://gondor.apana.org.au/~herbert/dash/
Original-Maintainer: Gerrit Pape <pape@smarden.org>

Package: libsocket6-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 94
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.23-1build2
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.4), perl-base (>= 5.8.0-10)
Description: Perl extensions for IPv6
 This module supports getaddrinfo() and getnameinfo() to intend to enable
 protocol independent programming. If your environment supports IPv6,
 IPv6 related defines such as AF_INET6 are included.
Original-Maintainer: Masahito Omote <omote@debian.org>

Package: libpolkit-gobject-1-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 151
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: policykit-1
Version: 0.104-1ubuntu1
Depends: libc6 (>= 2.7), libglib2.0-0 (>= 2.31.8)
Pre-Depends: multiarch-support
Breaks: libpolkit-agent-1-0 (<< 0.99), libpolkit-backend-1-0 (<< 0.99), libpolkit-gtk-1-0 (<< 0.99), policykit-1 (<< 0.99)
Description: PolicyKit Authorization API
 PolicyKit is a toolkit for defining and handling the policy that
 allows unprivileged processes to speak to privileged processes.
 .
 This package contains a library for accessing PolicyKit.
Homepage: http://hal.freedesktop.org/docs/PolicyKit/
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: shared-mime-info
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 2504
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.0-0ubuntu4.1
Depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.24.0), libxml2 (>= 2.7.4)
Conflicts: libglib2.0-0 (<< 2.17.2), libgnomevfs2-0 (<< 1:2.24.0), tracker (<< 0.6.90)
Description: FreeDesktop.org shared MIME database and spec
 This is the shared MIME-info database from the X Desktop Group. It is required
 by any program complying to the Shared MIME-Info Database spec, which is also
 included in this package.
 .
 At this time at least ROX, GNOME, KDE and XFCE use this database.
Homepage: http://freedesktop.org/wiki/Software/shared-mime-info
Original-Maintainer: Sebastian Dröge <slomo@debian.org>

Package: libjaxen-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 288
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.1.3-1
Replaces: libsaxpath-java
Depends: libxerces2-java
Recommends: libdom4j-java, libjdom1-java, libxom-java
Conflicts: libsaxpath-java
Description: Java XPath engine
 jaxen is a universal object model walker, capable of evaluating XPath
 expressions across multiple models. Currently supported are dom4j,
 JDOM, DOM and XOM.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jaxen.org

Package: libxdmcp6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 67
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxdmcp
Version: 1:1.1.0-4
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: X11 Display Manager Control Protocol library
 This package provides the main interface to the X11 display manager control
 protocol library, which allows for remote logins to display managers.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXdmcp
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: bsh-gcj
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 1682
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bsh
Version: 2.0b4-12build1
Depends: bsh (= 2.0b4-12build1), libgcj-common (>> 1:4.1.1-13), libc6 (>= 2.2.5), libgcc1 (>= 1:4.1.1), libgcj-bc (>= 4.4.5-1~)
Description: Java scripting environment (BeanShell) Version 2 (native code)
 BeanShell is a small, free, embeddable, Java source interpreter with object
 scripting language features, written in Java. BeanShell executes standard Java
 statements and expressions, in addition to obvious scripting commands and
 syntax.  BeanShell supports scripted objects as simple method closures like
 those in Perl and JavaScript(tm).
 .
 You can use BeanShell interactively for Java experimentation and debugging or
 as a simple scripting engine for you applications.  In short: BeanShell is a
 dynamically interpreted Java, plus some useful stuff.
 .
 This package contains the natively compiled code for use by gij.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.beanshell.org/

Package: libnl-3-200
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 146
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libnl3
Version: 3.2.3-2ubuntu2
Depends: libc6 (>= 2.14)
Conffiles:
 /etc/libnl-3/pktloc 02e59c3b2bba388ba64b2d120a76bab7
 /etc/libnl-3/classid 3e07259e58674631830b152e983ca995
Description: library for dealing with netlink sockets
 This is a library for applications dealing with netlink sockets.
 The library provides an interface for raw netlink messaging and various
 netlink family specific interfaces.
Homepage: http://people.suug.ch/~tgr/libnl/
Original-Maintainer: Heiko Stuebner <mmind@debian.org>

Package: coreutils
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 5496
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 8.13-3ubuntu3.2
Replaces: mktemp, timeout
Depends: dpkg (>= 1.15.4) | install-info
Pre-Depends: libacl1 (>= 2.2.51-5), libattr1 (>= 1:2.4.46-5), libc6 (>= 2.15), libselinux1 (>= 1.32)
Conflicts: timeout
Description: GNU core utilities
 This package contains the basic file, shell and text manipulation
 utilities which are expected to exist on every operating system.
 .
 Specifically, this package includes:
 arch base64 basename cat chcon chgrp chmod chown chroot cksum comm cp
 csplit cut date dd df dir dircolors dirname du echo env expand expr
 factor false flock fmt fold groups head hostid id install join link ln
 logname ls md5sum mkdir mkfifo mknod mktemp mv nice nl nohup nproc od
 paste pathchk pinky pr printenv printf ptx pwd readlink rm rmdir runcon
 sha*sum seq shred sleep sort split stat stty sum sync tac tail tee test
 timeout touch tr true truncate tsort tty uname unexpand uniq unlink
 users vdir wc who whoami yes
Homepage: http://gnu.org/software/coreutils
Original-Maintainer: Michael Stone <mstone@debian.org>

Package: cloudstack-common
Status: install ok installed
Priority: extra
Section: libs
Installed-Size: 30980
Maintainer: Wido den Hollander <wido@widodh.nl>
Architecture: all
Source: cloudstack
Version: 4.1.0-incubating-0.0.snapshot
Depends: bash, genisoimage
Conflicts: cloud-console-proxy, cloud-daemonize, cloud-deps, cloud-python, cloud-scripts, cloud-setup, cloud-system-iso, cloud-utils
Description: A common package which contains files which are shared by several CloudStack packages
Homepage: http://www.cloudstack.org/

Package: sudo
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 996
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.8.3p1-1ubuntu3.3
Replaces: sudo-ldap
Depends: libc6 (>= 2.15), libpam0g (>= 0.99.7.1), libpam-modules
Conflicts: sudo-ldap
Conffiles:
 /etc/sudoers.d/README 0b76d590c3d5d1966bdfa7ee808893c4
 /etc/pam.d/sudo 665a6dead44ff792cfad6b0faa10a621
 /etc/sudoers 1b00ee0a97a1bcf9961e476140e2c5c1
 /etc/init.d/sudo 8dd3c1c4fb7582466676fd00d31cdc9b
Description: Provide limited super user privileges to specific users
 Sudo is a program designed to allow a sysadmin to give limited root
 privileges to users and log root activity.  The basic philosophy is to give
 as few privileges as possible but still allow people to get their work done.
 .
 This version is built with minimal shared library dependencies, use the
 sudo-ldap package instead if you need LDAP support for sudoers.
Original-Maintainer: Bdale Garbee <bdale@gag.com>

Package: libfreetype6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 811
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: freetype
Version: 2.4.8-1ubuntu2.1
Depends: libc6 (>= 2.14), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Description: FreeType 2 font engine, shared library files
 The FreeType project is a team of volunteers who develop free,
 portable and high-quality software solutions for digital typography.
 They specifically target embedded systems and focus on bringing small,
 efficient and ubiquitous products.
 .
 The FreeType 2 library is their new software font engine.  It has been
 designed to provide the following important features:
  * A universal and simple API to manage font files
  * Support for several font formats through loadable modules
  * High-quality anti-aliasing
  * High portability & performance
 .
 Supported font formats include:
  * TrueType files (.ttf) and collections (.ttc)
  * Type 1 font files both in ASCII (.pfa) or binary (.pfb) format
  * Type 1 Multiple Master fonts.  The FreeType 2 API also provides
    routines to manage design instances easily
  * Type 1 CID-keyed fonts
  * OpenType/CFF (.otf) fonts
  * CFF/Type 2 fonts
  * Adobe CEF fonts (.cef), used to embed fonts in SVG documents with
    the Adobe SVG viewer plugin.
  * Windows FNT/FON bitmap fonts
 .
 This package contains the files needed to run programs that use the
 FreeType 2 library.
 .
  Home Page: http://www.freetype.org/
  Authors: David Turner   <david.turner@freetype.org>
           Robert Wilhelm <robert.wilhelm@freetype.org>
           Werner Lemberg <werner.lemberg@freetype.org>
Homepage: http://www.freetype.org
Original-Maintainer: Steve Langasek <vorlon@debian.org>

Package: debianutils
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 218
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.2.1ubuntu2
Depends: sensible-utils
Pre-Depends: libc6 (>= 2.15)
Description: Miscellaneous utilities specific to Debian
 This package provides a number of small utilities which are used
 primarily by the installation scripts of Debian packages, although
 you may use them directly.
 .
 The specific utilities included are: installkernel run-parts
 savelog tempfile which.
Original-Maintainer: Clint Adams <clint@debian.org>

Package: libxcb-shm0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 49
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxcb
Version: 1.8.1-1ubuntu0.1
Depends: libc6 (>= 2.2.5), libxcb1
Pre-Depends: multiarch-support
Description: X C Binding, shm extension
 This package contains the library files needed to run software using
 libxcb-shm, the shm extension for the X C Binding.
 .
 The XCB library provides an interface to the X Window System protocol,
 designed to replace the Xlib interface.  XCB provides several advantages over
 Xlib:
 .
  * Size: small library and lower memory footprint
  * Latency hiding: batch several requests and wait for the replies later
  * Direct protocol access: one-to-one mapping between interface and protocol
  * Thread support: access XCB from multiple threads, with no explicit locking
  * Easy creation of new extensions: automatically generates interface from
    machine-parsable protocol descriptions
Homepage: http://xcb.freedesktop.org
Original-Maintainer: XCB Developers <xcb@lists.freedesktop.org>

Package: libclass-accessor-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 104
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.34-1
Depends: perl, libsub-name-perl
Description: Perl module that automatically generates accessors
 Class::Accessor automagically generates accessor/mutator methods for your
 class. Most of the time, writing accessors is an exercise in cutting and
 pasting. If you make your module a subclass of Class::Accessor and declare
 your accessor fields with mk_accessors() then you will find yourself with a
 set of automatically generated accessors which can even be customized.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Class-Accessor/

Package: libxmuu1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 61
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxmu
Version: 2:1.1.0-3
Depends: libc6 (>= 2.4), libx11-6
Pre-Depends: multiarch-support
Description: X11 miscellaneous micro-utility library
 libXmuu provides a set of miscellaneous utility convenience functions for X
 libraries to use.  It is a lighter version of libXmu that does not depend
 on libXt or libXext; for more information on libXmu, see libxmu6.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXmu
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: python-twisted-bin
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 144
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: twisted
Version: 11.1.0-1ubuntu2
Replaces: python2.3-twisted-bin, python2.4-twisted-bin
Provides: python2.7-twisted-bin
Depends: python2.7, python (>= 2.7), python (<< 2.8), libc6 (>= 2.3.2)
Suggests: python-twisted-bin-dbg
Conflicts: python2.3-twisted-bin, python2.4-twisted-bin
Description: Event-based framework for internet applications
 It includes a web server, a telnet server, a multiplayer RPG engine, a
 generic client and server for remote object access, and APIs for creating
 new protocols.
Original-Maintainer: Matthias Klose <doko@debian.org>
Python-Version: 2.7

Package: x11proto-input-dev
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 461
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: x11proto-input
Version: 2.1.99.6-1
Depends: x11proto-core-dev
Description: X11 Input extension wire protocol
 This package provides development headers describing the wire protocol
 for the Input extension, used to control all manner of options related
 to input device handling.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This package is built from the X.org inputproto proto module.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libqdox-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 264
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: qdox
Version: 1.12-1
Suggests: libqdox-java-doc
Description: Quickly parses declarations and Javadoc from Java source
 qdox quickly parses Java source files looking for key items of
 interest:
  * class and interface definitions
  * member declarations
  * import statements
  * JavaDoc comments
 .
 qdox ignores all other components of Java source, such as actual method
 implementations, to avoid overhead.  qdox returns a simple document
 model containing only the declarations and containing enough
 information to be useful.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://qdox.codehaus.org/

Package: initramfs-tools
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 362
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: all
Version: 0.99ubuntu13
Provides: linux-initramfs-tool
Depends: initramfs-tools-bin (>= 0.99ubuntu13), initramfs-tools-bin (<< 0.99ubuntu13.1~), klibc-utils (>= 1.5.9-1), busybox-initramfs (>= 1:1.13.3-1ubuntu5), cpio, module-init-tools, udev (>= 147~-5), findutils (>= 4.2.24), util-linux (>> 2.15~rc1)
Suggests: bash-completion
Breaks: cryptsetup (<< 2:1.1.0-2.1), elilo (<< 3.12-3.1~), lilo (<< 22.8-8.2~), mountall (<< 2.0~), s390-tools (<< 1.8.3-2~)
Conflicts: usplash (<< 0.5.50)
Conffiles:
 /etc/initramfs-tools/initramfs.conf 8801535d9bec98754eea6a172f956d42
 /etc/initramfs-tools/update-initramfs.conf e2026d4603e7161efaccca519aeb1297
 /etc/kernel/postinst.d/initramfs-tools fe7713b9a74a10ed71d1e7dd93afc209
 /etc/kernel/postrm.d/initramfs-tools e22d1ab0d7a7a1b66ae6d71ea4f21938
 /etc/bash_completion.d/initramfs-tools 7eeb7184772f3658e7cf446945c096b1
Description: tools for generating an initramfs
 This package contains tools to create and boot an initramfs for packaged 2.6
 Linux kernel. The initramfs is a gzipped cpio archive. At boot time, the
 kernel unpacks that archive into RAM, mounts and uses it as initial root file
 system. The mounting of the real root file system occurs in early user space.
 klibc provides utilities to setup root. Having the root on MD, LVM2, LUKS or
 NFS is also supported.
 Any boot loader with initrd support is able to load an initramfs archive.
Original-Maintainer: Debian kernel team <debian-kernel@lists.debian.org>

Package: makedev
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 126
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.3.1-89ubuntu2
Depends: base-passwd (>= 3.0.4)
Conflicts: udev (<= 0.024-7)
Description: creates device files in /dev
 The MAKEDEV executable is used to create device files, often in /dev.
 .
 Device files are special files through which applications can interact
 with hardware.
 .
 This package is not necessary for most modern Linux systems, where the udev
 subsystem provides a more dynamic mechanism for device file management.
Original-Maintainer: Bdale Garbee <bdale@gag.com>

Package: laptop-detect
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 56
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.13.7ubuntu2
Depends: dmidecode (>> 2.8-2)
Description: attempt to detect a laptop
 laptop-detect attempts to determine whether it is being run on a laptop or a
 desktop and appraises its caller of this.
Original-Maintainer: Otavio Salvador <otavio@debian.org>

Package: libxml2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 1745
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.7.8.dfsg-5.1ubuntu4.3
Depends: libc6 (>= 2.15), zlib1g (>= 1:1.2.3.3.dfsg)
Pre-Depends: multiarch-support
Recommends: xml-core
Description: GNOME XML library
 XML is a metalanguage to let you design your own markup language.
 A regular markup language defines a way to describe information in
 a certain class of documents (eg HTML). XML lets you define your
 own customized markup languages for many classes of document. It
 can do this because it's written in SGML, the international standard
 metalanguage for markup languages.
 .
 This package provides a library providing an extensive API to handle
 such XML data files.
Homepage: http://xmlsoft.org/
Original-Maintainer: Debian XML/SGML Group <debian-xml-sgml-pkgs@lists.alioth.debian.org>

Package: telnet
Status: install ok installed
Priority: standard
Section: net
Installed-Size: 204
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: netkit-telnet
Version: 0.17-36build1
Replaces: netstd
Provides: telnet-client
Depends: netbase, libc6 (>= 2.11), libgcc1 (>= 1:4.1.1), libncurses5 (>= 5.6+20071006-3), libstdc++6 (>= 4.1.1)
Description: The telnet client
 The telnet command is used for interactive communication with another host
 using the TELNET protocol.
Original-Maintainer: Alberto Gonzalez Iniesta <agi@inittab.org>

Package: login
Essential: yes
Status: install ok installed
Priority: required
Section: admin
Installed-Size: 1048
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: shadow
Version: 1:4.1.4.2+svn3283-3ubuntu5.1
Replaces: manpages-de (<< 0.5-3), manpages-tr (<< 1.0.5), manpages-zh (<< 1.5.1-1)
Pre-Depends: libc6 (>= 2.7), libpam0g (>= 0.99.7.1), libpam-runtime, libpam-modules
Conflicts: amavisd-new (<< 2.3.3-8), backupninja (<< 0.9.3-5), echolot (<< 2.1.8-4), gnunet (<< 0.7.0c-2), python-4suite (<< 0.99cvs20060405-1)
Conffiles:
 /etc/securetty 1a028cba3ab1989a6a3e395720806069
 /etc/login.defs be0977c1c1c84c62823c7d7d4e099067
 /etc/pam.d/su 7309fb874571fe5447321b43448a50b3
 /etc/pam.d/login f6fd8b05973b278e6a2b7c61bc7732cd
Description: system login tools
 These tools are required to be able to login and use your system. The
 login program invokes your user shell and enables command execution. The
 newgrp program is used to change your effective group ID (useful for
 workgroup type situations). The su program allows changing your effective
 user ID (useful being able to execute commands as another user).
Homepage: http://pkg-shadow.alioth.debian.org/
Original-Maintainer: Shadow package maintainers <pkg-shadow-devel@lists.alioth.debian.org>

Package: gpgv
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: utils
Installed-Size: 436
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gnupg
Version: 1.4.11-3ubuntu2.2
Depends: libbz2-1.0, libc6 (>= 2.14), libreadline6 (>= 6.0), zlib1g (>= 1:1.1.4)
Suggests: gnupg
Description: GNU privacy guard - signature verification tool
 GnuPG is GNU's tool for secure communication and data storage.
 .
 gpgv is a stripped-down version of gnupg which is only able to check
 signatures.  It is smaller than the full-blown gnupg and uses a
 different (and simpler) way to check that the public keys used to
 make the signature are trustworthy.
Homepage: http://www.gnupg.org
Original-Maintainer: Debian GnuPG-Maintainers <pkg-gnupg-maint@lists.alioth.debian.org>

Package: libssl1.0.0
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 2836
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openssl
Version: 1.0.1-4ubuntu5.5
Depends: libc6 (>= 2.14), zlib1g (>= 1:1.1.4), debconf (>= 0.5) | debconf-2.0
Pre-Depends: multiarch-support
Breaks: openssh-client (<< 1:5.9p1-4), openssh-server (<< 1:5.9p1-4)
Description: SSL shared libraries
 libssl and libcrypto shared libraries needed by programs like
 apache-ssl, telnet-ssl and openssh.
 .
 It is part of the OpenSSL implementation of SSL.
Original-Maintainer: Debian OpenSSL Team <pkg-openssl-devel@lists.alioth.debian.org>

Package: libdbus-1-3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 362
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: dbus
Version: 1.4.18-1ubuntu1.3
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Recommends: dbus
Breaks: kde-window-manager (<< 4:4.4.5-9), kdebase-workspace-bin (<< 4:4.4.5-9)
Description: simple interprocess messaging system (library)
 D-Bus is a message bus, used for sending messages between applications.
 Conceptually, it fits somewhere in between raw sockets and CORBA in
 terms of complexity.
 .
 D-Bus supports broadcast messages, asynchronous messages (thus
 decreasing latency), authentication, and more. It is designed to be
 low-overhead; messages are sent using a binary protocol, not using
 XML. D-Bus also supports a method call mapping for its messages, but
 it is not required; this makes using the system quite simple.
 .
 It comes with several bindings, including GLib, Python, Qt and Java.
 .
 The daemon can be found in the dbus package.
Homepage: http://dbus.freedesktop.org/
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: libbackport-util-concurrent-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 400
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: backport-util-concurrent
Version: 3.1-3
Suggests: libbackport-util-concurrent-java-doc
Description: backport of java.util.concurrent to Java 1.4
 This is a backport of the java.util.concurrent API, introduced in
 Java 5.0, to Java 1.4.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://backport-jsr166.sourceforge.net/

Package: gettext-base
Status: install ok installed
Priority: standard
Section: utils
Installed-Size: 368
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gettext
Version: 0.18.1.1-5ubuntu3
Provides: libasprintf0c2
Depends: libc6 (>= 2.8), libstdc++6 (>= 4.1.1)
Description: GNU Internationalization utilities for the base system
 This package includes the gettext and ngettext programs which allow
 other packages to internationalize the messages given by shell scripts.
Homepage: http://www.gnu.org/software/gettext/
Original-Maintainer: Santiago Vila <sanvila@debian.org>

Package: libflac8
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 340
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: flac
Version: 1.2.1-6
Depends: libc6 (>= 2.7), libogg0 (>= 1.0rc3)
Pre-Depends: multiarch-support
Description: Free Lossless Audio Codec - runtime C library
 FLAC stands for Free Lossless Audio Codec. Grossly oversimplified, FLAC is
 similar to MP3, but lossless.  The FLAC project consists of:
 .
  * The stream format
  * libFLAC, which implements a reference encoder, stream decoder, and file
    decoder
  * flac, which is a command-line wrapper around libFLAC to encode and decode
    .flac files
  * Input plugins for various music players (Winamp, XMMS, and more in the
    works)
 .
 This package contains the runtime library libFLAC.
Original-Maintainer: Debian Multimedia Maintainers <pkg-multimedia-maintainers@lists.alioth.debian.org>
Homepage: http://flac.sourceforge.net/

Package: module-init-tools
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 332
Maintainer: Scott James Remnant <scott@ubuntu.com>
Architecture: amd64
Version: 3.16-1ubuntu2
Depends: libc6 (>= 2.8), upstart-job
Pre-Depends: dpkg (>= 1.15.7.2)
Breaks: initramfs-tools (<< 0.92bubuntu23)
Conffiles:
 /etc/modprobe.d/blacklist-ath_pci.conf d1da9bb08c2b0f56f3be93fd0e37946b
 /etc/modprobe.d/blacklist-firewire.conf 9cc07a17e8e64f9cd35ff59c29debe69
 /etc/modprobe.d/blacklist-framebuffer.conf 96f2f501cc646b598263693c8976ddd1
 /etc/modprobe.d/blacklist-rare-network.conf 8fb4b96124e461f53adceba9ca91f09a
 /etc/modprobe.d/blacklist-watchdog.conf 55327f9270c8a6257a833c4d127a39e1
 /etc/modprobe.d/blacklist.conf bc6754fa320733c6d239a4bb0148ffd7
 /etc/depmod.d/ubuntu.conf 7c8439ef36b12e5f226b5dbfa20b8c2d
 /etc/init/module-init-tools.conf 48db1b767c3148fd83eba59d12fc9a5e
Description: tools for managing Linux kernel modules
 This package contains a set of programs for loading, inserting, and
 removing kernel modules for Linux.
Homepage: http://www.kerneltools.org/
Original-Maintainer: Marco d'Itri <md@linux.it>

Package: libffi6
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 88
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libffi
Version: 3.0.11~rc1-5
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: Foreign Function Interface library runtime
 A foreign function interface is the popular name for the interface that
 allows code written in one language to call code written in another
 language.
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: man-db
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: doc
Installed-Size: 1736
Maintainer: Colin Watson <cjwatson@debian.org>
Architecture: amd64
Version: 2.6.1-2ubuntu1
Replaces: man, manpages-de (<< 0.5-4), nlsutils
Provides: man, man-browser
Depends: groff-base (>= 1.18.1.1-15), bsdmainutils, debconf (>= 1.2.0) | debconf-2.0, dpkg (>= 1.9.0), libc6 (>= 2.14), libgdbm3 (>= 1.8.3), libpipeline1 (>= 1.1.0), zlib1g (>= 1:1.1.4)
Suggests: groff, less, www-browser
Conflicts: man, suidmanager (<< 0.50)
Conffiles:
 /etc/manpath.config 167675fd93075fb5f6ce1aa5f56a8a22
 /etc/cron.weekly/man-db 643340ce3fb3994ef2ae7b88a2cf3230
 /etc/cron.daily/man-db 18745b8d583be7a4b7a00e9ffc98ac99
Description: on-line manual pager
 This package provides the man command, the primary way of examining the
 on-line help files (manual pages). Other utilities provided include the
 whatis and apropos commands for searching the manual page database, the
 manpath utility for determining the manual page search path, and the
 maintenance utilities mandb, catman and zsoelim. man-db uses the groff
 suite of programs to format and display the manual pages.
Homepage: http://man-db.nongnu.org/

Package: libplexus-archiver-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 252
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-archiver
Version: 1.0~alpha12-3
Depends: libplexus-utils-java, libplexus-io-java, libplexus-containers-java
Description: The archiver plugin for the Plexus compiler system
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
 .
 This package provides the Archiver plugin for Plexus, used to create
 JARs and other archives.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-components/plexus-archiver/

Package: libcairo2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 1375
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: cairo
Version: 1.10.2-6.1ubuntu3
Depends: libc6 (>= 2.14), libfontconfig1 (>= 2.8.0), libfreetype6 (>= 2.3.5), libpixman-1-0 (>= 0.18.0), libpng12-0 (>= 1.2.13-4), libx11-6, libxcb-render0, libxcb-shm0, libxcb1 (>= 1.2), libxrender1, zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Breaks: iceape-browser (<= 2.0.3-3), libgtk-directfb-2.0-0, xulrunner-1.9, xulrunner-1.9.1 (<= 1.9.1.8-3)
Description: The Cairo 2D vector graphics library
 Cairo is a multi-platform library providing anti-aliased
 vector-based rendering for multiple target backends. Paths consist
 of line segments and cubic splines and can be rendered at any width
 with various join and cap styles. All colors may be specified with
 optional translucence (opacity/alpha) and combined using the
 extended Porter/Duff compositing algebra as found in the X Render
 Extension.
 .
 Cairo exports a stateful rendering API similar in spirit to the path
 construction, text, and painting operators of PostScript, (with the
 significant addition of translucence in the imaging model). When
 complete, the API is intended to support the complete imaging model of
 PDF 1.4.
 .
 This package contains the shared libraries.
Homepage: http://cairographics.org/
Original-Maintainer: Dave Beckett <dajobe@debian.org>

Package: libhtml-format-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 160
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.10-1
Depends: perl, libfont-afm-perl, libhtml-tree-perl
Description: module for transforming HTML into various formats
 HTML::Formatter is a base class for various formatters, which are modules
 that traverse an HTML syntax tree and produce various output file formats.
 There are currently three formatter classes included:
 .
  * HTML::FormatText for converting to plain human-readable text
  * HTML::FormatPS for converting to PostScript
  * HTML::FormatRTF for converting to Microsoft's Rich Text Format (RTF)
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTML-Format/

Package: libgdbm3
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gdbm
Version: 1.8.3-10
Depends: libc6 (>= 2.2.5), dpkg (>= 1.15.4) | install-info
Pre-Depends: multiarch-support
Description: GNU dbm database routines (runtime version)
 GNU dbm ('gdbm') is a library of database functions that use extendible
 hashing and works similarly to the standard UNIX 'dbm' functions.
 .
 The basic use of 'gdbm' is to store key/data pairs in a data file, thus
 providing a persistent version of the 'dictionary' Abstract Data Type
 ('hash' to perl programmers).
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://directory.fsf.org/project/gdbm/

Package: libdoxia-sitetools-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 270
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: doxia-sitetools
Version: 1.1.4-1ubuntu1
Depends: libcommons-collections3-java, libdoxia-java, libitext1-java, libjaxp1.3-java, libplexus-container-default-java, libplexus-i18n-java, libplexus-utils-java, libplexus-velocity-java, libxalan2-java, velocity
Suggests: libdoxia-sitetools-java-doc
Conflicts: libdoxia-java (<= 1.0-alpha-7-1)
Description: Extension package of the content generation framework Doxia
 Doxia Sitetools generates sites, consisting of static and dynamic content that
 was generated by Doxia. Doxia is a content generation framework which aims to
 provide its users with powerful techniques for generating static and dynamic
 content.
 .
 Doxia can be used to generate static sites in addition to being
 incorporated into dynamic content generation systems like blogs, wikis
 and content management systems.
 .
 Doxia is used exensively by Maven and it powers the entire
 documentation system of Maven. It gives Maven the ability to take any
 document that Doxia supports and output it any format.
Homepage: http://maven.apache.org/doxia/doxia-sitetools/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libtie-ixhash-perl
Status: install ok installed
Priority: optional
Section: interpreters
Installed-Size: 84
Maintainer: Ivan Kohler <ivan-debian@420.am>
Architecture: all
Version: 1.21-2
Depends: perl (>= 5.6.0-16)
Description: ordered associative arrays for Perl
 This Perl module implements Perl hashes that preserve the order in which the
 hash elements were added.  The order is not affected when values
 corresponding to existing keys in the IxHash are changed.  The elements can
 also be set to any arbitrary supplied order.  The familiar perl array
 operations can also be performed on the IxHash.

Package: libgcrypt11
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 586
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.5.0-3ubuntu0.1
Depends: libc6 (>= 2.15), libgpg-error0 (>= 1.10)
Pre-Depends: multiarch-support
Suggests: rng-tools
Breaks: gnupg2 (<< 2.0.17-2ubuntu2), gpgsm (<< 2.0.17-2ubuntu2), libgnutls26 (<< 2.12.7-3)
Description: LGPL Crypto library - runtime library
 libgcrypt contains cryptographic functions.  Many important free
 ciphers, hash algorithms and public key signing algorithms have been
 implemented:
 Arcfour, Blowfish, CAST5, DES, AES, Twofish, Serpent, rfc2268 (rc2), SEED,
 Camellia, CRC, MD4, MD5, RIPE-MD160, SHA-1, SHA-256, SHA-512, Tiger,
 Whirlpool, DSA, DSA2, ElGamal, RSA, ECC.
Homepage: http://directory.fsf.org/project/libgcrypt/
Original-Maintainer: Debian GnuTLS Maintainers <pkg-gnutls-maint@lists.alioth.debian.org>

Package: libjs-jquery
Status: install ok installed
Priority: optional
Section: web
Installed-Size: 381
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jquery
Version: 1.7.1-1ubuntu1
Replaces: jquery
Suggests: javascript-common
Conflicts: jquery
Description: JavaScript library for dynamic web applications
 jQuery is a fast, concise, JavaScript Library that simplifies how you
 traverse HTML documents, handle events, perform animations, and add Ajax
 interactions to your web pages. jQuery is designed to change the way
 that you write JavaScript.
Homepage: http://jquery.com/
Original-Maintainer: Debian Javascript Maintainers <pkg-javascript-devel@lists.alioth.debian.org>

Package: libplexus-ant-factory-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 84
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-ant-factory
Version: 1.0~alpha2.1-3
Depends: libplexus-container-default-java
Recommends: ant
Description: Plexus Ant Factory
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
 .
 This package provides a factory for instantiating Ant with Plexus.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/

Package: python-dbus
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 413
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: dbus-python
Version: 1.0.0-1ubuntu1
Replaces: python2.4-dbus
Provides: python2.7-dbus
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.4), libdbus-1-3 (>= 1.2.16), libdbus-glib-1-2 (>= 0.78), libglib2.0-0 (>= 2.12.0), python-dbus-dev
Recommends: python-gi | python-gobject-2 | python-qt4-dbus
Suggests: python-dbus-doc, python-dbus-dbg
Breaks: gajim (<< 0.11.1), gnome-osd (<< 0.12.0), python-qt4-dbus (<< 4.8.3-3)
Conflicts: python2.4-dbus
Description: simple interprocess messaging system (Python interface)
 D-Bus is a message bus, used for sending messages between applications.
 Conceptually, it fits somewhere in between raw sockets and CORBA in
 terms of complexity.
 .
 This package provides a Python interface to D-Bus.
 .
 See the dbus description for more information about D-Bus in general.
Homepage: http://www.freedesktop.org/wiki/Software/DBusBindings#Python
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: libnet-http-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 85
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.02-1
Replaces: libwww-perl (<< 6.00)
Depends: perl
Recommends: libio-socket-ssl-perl (>= 1.38)
Breaks: libwww-perl (<< 6.00)
Description: module providing low-level HTTP connection client
 The Net::HTTP class is a low-level HTTP client.  An instance of the
 Net::HTTP class represents a connection to an HTTP server.  The
 HTTP protocol is described in RFC 2616.  The Net::HTTP class
 supports HTTP/1.0 and HTTP/1.1. Net::HTTP is a sub-class of IO::Socket::INET.
 You can mix its methods with reading and writing from the socket directly.
 This is not necessarily a good idea, unless you know what you are doing.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Net-HTTP/

Package: libbind9-80
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 100
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: libbind0
Depends: libc6 (>= 2.14), libdns81, libisc83, libisccfg82
Conflicts: libbind0, libbind9-41
Description: BIND9 Shared Library used by BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers the libbind9 shared library used by BIND's daemons and
 clients.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: isc-dhcp-common
Status: install ok installed
Priority: important
Section: net
Installed-Size: 672
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: isc-dhcp
Version: 4.1.ESV-R4-0ubuntu5.5
Replaces: dhcp3-common
Provides: dhcp3-common
Depends: debianutils (>= 2.8.2), libc6 (>= 2.15)
Description: common files used by all the isc-dhcp* packages
 This package contains the files used by all the packages from ISC
 DHCP.
Original-Maintainer: Debian ISC DHCP maintainers <pkg-dhcp-devel@lists.alioth.debian.org>

Package: libxinerama1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 56
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxinerama
Version: 2:1.1.1-3build1
Depends: libc6 (>= 2.2.5), libx11-6 (>= 2:1.4.99.1), libxext6
Pre-Depends: multiarch-support
Description: X11 Xinerama extension library
 libXinerama provides an X Window System client interface to the XINERAMA
 extension to the X protocol.
 .
 The Xinerama (also known as panoramiX) extension allows for multiple screens
 attached to a single display to be treated as belonging together, and to give
 desktop applications a better idea of the monitor layout.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXinerama
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: fop
Status: install ok installed
Priority: optional
Section: text
Installed-Size: 90
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:1.0.dfsg2-6
Depends: default-jre-headless | java2-runtime-headless, libfop-java
Recommends: libsaxon-java
Suggests: fop-doc, libservlet2.5-java
Description: XML formatter driven by XSL Formatting Objects (XSL-FO.)
 FOP is a Java application that reads a formatting object tree and then
 turns it into a wide variety of output presentations (including AFP,
 PCL, PDF, PNG, PostScript, RTF, TIFF, and plain text), or displays
 the result on-screen.
 .
 The formatting object tree can be in the form of an XML document
 (output by an XSLT engine like xalan) or can be passed in memory as a
 DOM Document or (in the case of xalan) SAX events.
 .
 This package contains the fop command line tool
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://xmlgraphics.apache.org/fop/

Package: libuuid1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 110
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: util-linux
Version: 2.20.1-1ubuntu3
Replaces: e2fsprogs (<< 1.34-1)
Depends: passwd, libc6 (>= 2.4)
Pre-Depends: multiarch-support
Recommends: uuid-runtime
Description: Universally Unique ID library
 The libuuid library generates and parses 128-bit universally unique
 ids (UUIDs).  A UUID is an identifier that is unique across both
 space and time, with respect to the space of all UUIDs.  A UUID can
 be used for multiple purposes, from tagging objects with an extremely
 short lifetime, to reliably identifying very persistent objects
 across a network.
 .
 See RFC 4122 for more information.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libtasn1-3
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 142
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.10-1ubuntu1.1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: Manage ASN.1 structures (runtime)
 Manage ASN1 (Abstract Syntax Notation One) structures.
 The main features of this library are:
   * on-line ASN1 structure management that doesn't require any C code
     file generation.
   * off-line ASN1 structure management with C code file generation
     containing an array.
   * DER (Distinguish Encoding Rules) encoding
   * no limits for INTEGER and ENUMERATED values
 .
 This package contains runtime libraries.
Homepage: http://www.gnu.org/software/libtasn1/
Original-Maintainer: Debian GnuTLS Maintainers <pkg-gnutls-maint@lists.alioth.debian.org>

Package: lsb-base
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: misc
Installed-Size: 75
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: lsb
Version: 4.0-0ubuntu20.2
Replaces: lsb (<< 2.0-6), lsb-core (<< 2.0-6)
Depends: sed, ncurses-bin
Conflicts: lsb (<< 2.0-6), lsb-core (<< 2.0-6)
Conffiles:
 /etc/lsb-base-logging.sh 0aa55cad853be603ce31790c696e394b
Description: Linux Standard Base 4.0 init script functionality
 The Linux Standard Base (http://www.linuxbase.org/) is a standard
 core system that third-party applications written for Linux can
 depend upon.
 .
 This package only includes the init-functions shell library, which
 may be used by other packages' initialization scripts for console
 logging and other purposes.
Homepage: http://www.linux-foundation.org/en/LSB
Original-Maintainer: Chris Lawrence <lawrencc@debian.org>

Package: libcurl3-gnutls
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 525
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: curl
Version: 7.22.0-3ubuntu4
Replaces: libcurl4-gnutls
Depends: libc6 (>= 2.15), libgcrypt11 (>= 1.4.5), libgnutls26 (>= 2.12.6.1-0), libgssapi-krb5-2 (>= 1.10+dfsg~), libidn11 (>= 1.13), libldap-2.4-2 (>= 2.4.7), librtmp0 (>= 2.3), zlib1g (>= 1:1.1.4), ca-certificates
Pre-Depends: multiarch-support
Conflicts: libcurl4-gnutls
Description: Multi-protocol file transfer library (GnuTLS)
 libcurl is designed to be a solid, usable, reliable and portable
 multi-protocol file transfer library.
 .
 SSL support is provided by GnuTLS.
 .
 This is the shared version of libcurl.
Homepage: http://curl.haxx.se
Original-Maintainer: Ramakrishnan Muthukrishnan <rkrishnan@debian.org>

Package: fontconfig
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: fonts
Installed-Size: 446
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.8.0-3ubuntu9.1
Replaces: fontconfig-config (<< 2.5.93-1)
Depends: libc6 (>= 2.3.4), libfontconfig1 (>= 2.8.0), fontconfig-config
Description: generic font configuration library - support binaries
 Fontconfig is a font configuration and customization library, which
 does not depend on the X Window System. It is designed to locate
 fonts within the system and select them according to requirements
 specified by applications.
 .
 Fontconfig is not a rasterization library, nor does it impose a
 particular rasterization library on the application. The X-specific
 library 'Xft' uses fontconfig along with freetype to specify and
 rasterize fonts.
 .
 This package contains a program to maintain the fontconfig cache
 (fc-cache), a sample program to list installed fonts (fc-list), a program
 to test the matching rules (fc-match) and a program to dump the binary
 cache files in string form (fc-cat). It no longer makes fonts managed by
 defoma available to fontconfig applications.
Original-Maintainer: Keith Packard <keithp@debian.org>

Package: libjline-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 126
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jline
Version: 1.0-1
Suggests: libjline-java-doc
Description: Java library for handling console input
 JLine is a 100% pure Java library for reading and editing console input.
 It is similar in functionality to BSD editline and GNU readline.  People
 familiar with the readline/editline capabilities for modern shells will
 find most of the command editing features of JLine to be familiar.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jline.sourceforge.net/

Package: libparse-debcontrol-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 104
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.005-3
Depends: perl, libio-stringy-perl, libwww-perl, liberror-perl, libexporter-lite-perl
Recommends: libtie-ixhash-perl
Description: parser for debian control-like files
 Parse::DebControl is an easy OO way to parse Debian control files and
 other colon separated key-value pairs. It's specifically designed
 to handle the format used in Debian control files, template files, and
 the cache files used by dpkg.
 .
 For basic format information see:
 http://www.debian.org/doc/debian-policy/ch-controlfields.html#s-controlsyntax
 .
 This module does not actually do any intelligence with the file content
 (because there are a lot of files in this format), but merely handles
 the format. It can handle simple control files, or files hundreds of lines
 long efficiently and easily.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Parse-DebControl/

Package: linux-image-3.2.0-35-generic
Status: install ok installed
Priority: optional
Section: kernel
Installed-Size: 145927
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux
Version: 3.2.0-35.55
Provides: fuse-module, ivtv-modules, kvm-api-4, linux-image, linux-image-3.0, redhat-cluster-modules
Depends: initramfs-tools (>= 0.36ubuntu6), module-init-tools (>= 3.3-pre11-4ubuntu3), crda (>= 1.1.1-1ubuntu2) | wireless-crda
Pre-Depends: dpkg (>= 1.10.24)
Recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub | lilo (>= 19.1)
Suggests: fdutils, linux-doc-3.2.0 | linux-source-3.2.0, linux-tools
Conflicts: hotplug (<< 0.0.20040105-1)
Description: Linux kernel image for version 3.2.0 on 64 bit x86 SMP
 This package contains the Linux kernel image for version 3.2.0 on
 64 bit x86 SMP.
 .
 Also includes the corresponding System.map file, the modules built by the
 packager, and scripts that try to ensure that the system is not left in an
 unbootable state after an update.
 .
 Supports Generic processors.
 .
 Geared toward desktop and server systems.
 .
 You likely do not want to install this package directly. Instead, install
 the linux-generic meta-package, which will ensure that upgrades work
 correctly, and that supporting packages are also installed.

Package: libparted0debian1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 571
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: parted
Version: 2.3-8ubuntu5.1
Replaces: libparted0 (<< 2.2-4), libparted1 (<< 2.2), libparted1.4 (<< 1.4.24-2), libparted2 (<< 2.2)
Provides: libparted
Depends: libblkid1 (>= 2.17.2), libc6 (>= 2.14), libdevmapper1.02.1 (>= 2:1.02.36), libuuid1 (>= 2.16)
Pre-Depends: multiarch-support
Suggests: parted | nparted, libparted0-dev, libparted0-i18n (= 2.3-8ubuntu5.1)
Breaks: dmraid (<< 1.0.0.rc16-4.1ubuntu2)
Conflicts: libparted1 (<< 2.2), libparted2 (<< 2.2), parted (<< 1.4.13+14pre1)
Description: disk partition manipulator - shared library
 GNU Parted is a program that allows you to create, destroy, resize,
 move, and copy disk partitions. This is useful for creating space
 for new operating systems, reorganizing disk usage, and copying data
 to new hard disks.
 .
 This package contains the shared library.
Homepage: http://www.gnu.org/software/parted
Original-Maintainer: Parted Maintainer Team <parted-maintainers@lists.alioth.debian.org>

Package: cpp-4.6
Status: install ok installed
Priority: optional
Section: interpreters
Installed-Size: 11490
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Replaces: gcc-4.6 (<< 4.6.1-9)
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), libc6 (>= 2.14), libgmp10, libmpc2, libmpfr4 (>= 3.1.0), zlib1g (>= 1:1.1.4)
Suggests: gcc-4.6-locales (>= 4.6.3-1)
Description: GNU C preprocessor
 A macro processor that is used automatically by the GNU C compiler
 to transform programs before actual compilation.
 .
 This package has been separated from gcc for the benefit of those who
 require the preprocessor but not the compiler.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: procps
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 668
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:3.2.8-11ubuntu6
Replaces: bsdutils (<< 2.9x-1), watch
Provides: watch
Depends: libc6 (>= 2.4), libncurses5 (>= 5.5-5~), libncursesw5 (>= 5.6+20070908), libtinfo5, upstart-job, lsb-base (>= 3.0-10), initscripts
Recommends: psmisc
Conflicts: libproc-dev (<< 1:1.2.6-2), pgrep (<< 3.3-5), procps-nonfree, w-bassman (<< 1.0-3), watch
Conffiles:
 /etc/sysctl.conf d1cb9fea7a813e02111874f040cfc04b
 /etc/init/procps.conf 96170a339d08797dc90d69b01d6bf610
 /etc/sysctl.d/10-ipv6-privacy.conf e9473d12b4a7069d6a3ca8b694511ddf
 /etc/sysctl.d/10-network-security.conf 4ac7258f5336e7eeaf448c05ab668d3c
 /etc/sysctl.d/10-ptrace.conf 47f40494b2fc698e15549e0a4a79e81c
 /etc/sysctl.d/10-zeropage.conf 8d7193abcc4dfedaf519dd03016a5e59
 /etc/sysctl.d/10-console-messages.conf 154f6f5c5810d10bb303fb6a8e907c6a
 /etc/sysctl.d/README c20074b9b11a5202758c69d7bcb6996f
 /etc/sysctl.d/10-kernel-hardening.conf 5c1388f00011a287cdeba60208c674e1
Description: /proc file system utilities
 This package provides command line and full screen utilities for browsing
 procfs, a "pseudo" file system dynamically generated by the kernel to
 provide information about the status of entries in its process table
 (such as whether the process is running, stopped, or a "zombie").
 .
 It contains free, kill, pkill, pgrep, pmap, ps, pwdx, skill, slabtop,
 snice, sysctl, tload, top, uptime, vmstat, w, and watch.
Homepage: http://procps.sf.net/
Original-Maintainer: Craig Small <csmall@debian.org>

Package: g++-4.6
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 14161
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Provides: c++-compiler, c++abi2-dev
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), gcc-4.6 (= 4.6.3-1ubuntu5), libstdc++6-4.6-dev (= 4.6.3-1ubuntu5), libc6 (>= 2.14), libgmp10, libmpc2, libmpfr4 (>= 3.1.0), zlib1g (>= 1:1.1.4)
Suggests: g++-4.6-multilib, gcc-4.6-doc (>= 4.6.3-1), libstdc++6-4.6-dbg
Description: GNU C++ compiler
 This is the GNU C++ compiler, a fairly portable optimizing compiler for C++.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: wpasupplicant
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 1213
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.7.3-6ubuntu2.1
Depends: libc6 (>= 2.15), libdbus-1-3 (>= 1.1.1), libnl-3-200 (>= 3.2.3), libnl-genl-3-200 (>= 3.2.3), libpcsclite1, libreadline6 (>= 6.0), libssl1.0.0 (>= 1.0.0), lsb-base (>= 3.0-6), adduser, initscripts (>= 2.88dsf-13.3)
Suggests: wpagui, libengine-pkcs11-openssl
Conffiles:
 /etc/wpa_supplicant/action_wpa.sh 5269e292cd68ebf9698e26d3026e817e
 /etc/wpa_supplicant/functions.sh 550c42ecf41ce2bf299383c50dacdf1c
 /etc/wpa_supplicant/ifupdown.sh 4c82dbf7e1d8c5ddd70e40b9665cfeee
 /etc/dbus-1/system.d/wpa_supplicant.conf b6e52e30f79834d19db8311417ee0a86
Description: client support for WPA and WPA2 (IEEE 802.11i)
 WPA and WPA2 are methods for securing wireless networks, the former
 using IEEE 802.1X, and the latter using IEEE 802.11i. This software
 provides key negotiation with the WPA Authenticator, and controls
 association with IEEE 802.11i networks.
Original-Maintainer: Debian/Ubuntu wpasupplicant Maintainers <pkg-wpa-devel@lists.alioth.debian.org>
Homepage: http://w1.fi/wpa_supplicant/

Package: language-pack-en
Status: install ok installed
Priority: optional
Section: translations
Installed-Size: 30
Maintainer: Language pack maintainers <language-packs@ubuntu.com>
Architecture: all
Version: 1:12.04+20120801
Replaces: language-pack-en (<< 1:12.04+20120801), language-pack-en-base, language-pack-gnome-en (<< 1:12.04+20120801), language-pack-gnome-en-base (<< 1:12.04+20120801), language-pack-kde-en (<< 1:12.04+20120801), language-pack-kde-en-base (<< 1:12.04+20120801)
Depends: language-pack-en-base (>= 1:12.04+20120801)
Pre-Depends: dpkg (>= 1.10.27ubuntu1)
Description: translation updates for language English
 Translation data updates for all supported packages for:
 English
 .
 language-pack-en-base provides the bulk of translation data
 and is updated only seldom. This package provides frequent translation
 updates.

Package: libgeoip1
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 303
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: geoip
Version: 1.4.8+dfsg-2
Depends: libc6 (>= 2.8), zlib1g (>= 1:1.1.4)
Recommends: geoip-database
Suggests: geoip-bin
Description: non-DNS IP-to-country resolver library
 GeoIP is a C library that enables the user to find the country that any
 IP address or hostname originates from. It uses a file based database.
 .
 This database simply contains IP blocks as keys, and countries as values and
 it should be more complete and accurate than using reverse DNS lookups.
 .
 This package contains the shared library.
Original-Maintainer: Patrick Matthäi <pmatthaei@debian.org>
Homepage: http://www.maxmind.com/

Package: dnsutils
Status: install ok installed
Priority: standard
Section: net
Installed-Size: 362
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: bind, bind9 (<< 1:9.1.0-3)
Depends: libbind9-80 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libc6 (>= 2.14), libdns81 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libisc83 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libisccfg82 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libkrb5-3 (>= 1.6.dfsg.2), liblwres80 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), bind9-host | host
Suggests: rblcheck
Conflicts: netstd (<< 2.00)
Description: Clients provided with BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers various client programs related to DNS that are
 derived from the BIND source tree.
 .
  - dig - query the DNS in various ways
  - nslookup - the older way to do it
  - nsupdate - perform dynamic updates (See RFC2136)
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libclassworlds-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 104
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: classworlds
Version: 1.1-final-5
Suggests: libclassworlds-java-doc
Description: framework for container developers requiring manipulation of ClassLoaders
 Classworlds is a framework for container developers who require complex
 manipulation of Java's ClassLoaders. Java's native ClassLoader mechanims
 and classes can cause many headaches and confusion for certain types of
 application developers. Projects which involve dynamic loading of
 components or otherwise represent a 'container' that can benefit from the
 classloading control provided by classworlds.
 .
 Classworlds provides a richer set of semantics for class loading than Java's
 normal mechanisms, while still being able to provide a ClassLoader interface
 to integrate seamlessly with the Java environment.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://classworlds.codehaus.org/

Package: libgssapi-krb5-2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 331
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: krb5
Version: 1.10+dfsg~beta1-2ubuntu0.3
Replaces: libkrb53 (<< 1.6.dfsg.4~beta1-7)
Depends: libc6 (>= 2.14), libcomerr2 (>= 1.34), libk5crypto3 (>= 1.8+dfsg), libkrb5-3 (= 1.10+dfsg~beta1-2ubuntu0.3), libkrb5support0 (>= 1.7dfsg~beta2)
Pre-Depends: multiarch-support
Suggests: krb5-doc, krb5-user
Breaks: libkrb53 (<< 1.8)
Description: MIT Kerberos runtime libraries - krb5 GSS-API Mechanism
 Kerberos is a system for authenticating users and services on a network.
 Kerberos is a trusted third-party service.  That means that there is a
 third party (the Kerberos server) that is trusted by all the entities on
 the network (users and services, usually called "principals").
 .
 This is the MIT reference implementation of Kerberos V5.
 .
 This package contains the runtime library for the MIT Kerberos
 implementation of GSS-API used by applications and Kerberos clients.
Homepage: http://web.mit.edu/kerberos/
Original-Maintainer: Sam Hartman <hartmans@debian.org>

Package: python-minimal
Essential: yes
Status: install ok installed
Priority: required
Section: python
Installed-Size: 159
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: python-defaults
Version: 2.7.3-0ubuntu2
Replaces: python (<= 2.4-1), python2.7 (<< 2.7.3)
Depends: python2.7-minimal (>= 2.7.3), dpkg (>= 1.13.20)
Recommends: python
Breaks: idle (<< 2.6), python (<= 2.4-1), python-all (<< 2.6), python-all-dbg (<< 2.6), python-all-dev (<< 2.6), python-dbg (<< 2.6), python-dev (<< 2.6), python-examples (<< 2.6), python-support (<< 1.0.10ubuntu2), python2.5-minimal (<< 2.5.5-7), python2.6-minimal (<< 2.6.5~rc2-2), python3.1-minimal (<< 3.1.2~rc1-2)
Conflicts: python-central (<< 0.5.5)
Description: minimal subset of the Python language (default version)
 This package contains the interpreter and some essential modules.  It's used
 in the boot process for some basic tasks.
 See /usr/share/doc/python2.7-minimal/README.Debian for a list of the modules
 contained in this package.
Homepage: http://www.python.org/
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: libfuse2
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 305
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: fuse
Version: 2.8.6-2ubuntu2
Depends: libc6 (>= 2.14)
Suggests: fuse
Conflicts: fuse (<< 2.8.6-2ubuntu2)
Description: Filesystem in Userspace (library)
 Filesystem in Userspace (FUSE) is a simple interface for userspace programs to
 export a virtual filesystem to the Linux kernel. It also aims to provide a
 secure method for non privileged users to create and mount their own filesystem
 implementations.
 .
 This package contains the shared library.
Homepage: http://fuse.sourceforge.net/
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>

Package: libexporter-lite-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 60
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.02-2
Depends: perl
Description: lightweight subset of Exporter
 Exporter::Lite is an alternative to Exporter intended to provide a
 lightweight subset of its functionality.  It supports import(), @EXPORT and
 @EXPORT_OK and not a whole lot else.
 .
 Unlike Exporter, it is not necessary to inherit from Exporter::Lite
 (ie. no @ISA = qw(Exporter::Lite) mantra).  Exporter::Lite simply
 exports its import() function.  This might be called a "mix-in".
 .
 Setting up a module to export its variables and functions is simple:
 .
 package My::Module;
 use Exporter::Lite;
 .
 @EXPORT = qw($Foo bar);
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Exporter-Lite/

Package: apt-xapian-index
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 335
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.44ubuntu5
Depends: python (>= 2.7.1-0ubuntu2), python-xapian (>= 1.0.2), python-apt (>= 0.7.93.2), python-debian (>= 0.1.14), python2.7, python (<< 2.8)
Suggests: app-install-data, python-xdg
Conffiles:
 /etc/dbus-1/system.d/org.debian.AptXapianIndex.conf b359f873abac01da9320401d24f6c445
 /etc/bash_completion.d/axi-cache 1e4422693e415e04abec46bb904d2af0
 /etc/cron.weekly/apt-xapian-index ed6e0c144a86d68700c7d94e162586d9
Description: maintenance and search tools for a Xapian index of Debian packages
 This package provides update-apt-xapian-index, a tool to maintan a Xapian
 index of Debian package information in /var/lib/apt-xapian-index, and
 axi-cache, a command line search tool that uses the index.
 .
 axi-cache allows to search packages very quickly, and it also interfaces with
 the shell command line completion in a smart way, providing context-sensitive
 keyword and tag suggestions even before the search command is actually run.
 .
 update-apt-xapian-index allows plugins to be installed in
 /usr/share/apt-xapian-index to index all sorts of extra information, such as
 Debtags tags, popcon information, package ratings and anything else that would
 fit.
 .
 The index generated by update-apt-xapian-index is self-documenting, as it
 contains an autogenerated README file with information on the index layout and
 all the data that can be found in it.
Homepage: http://www.enricozini.org/sw/apt-xapian-index/
Original-Maintainer: Enrico Zini <enrico@debian.org>

Package: python-zope.interface
Status: install ok installed
Priority: optional
Section: zope
Installed-Size: 563
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: zope.interface
Version: 3.6.1-1ubuntu3
Replaces: python-zope, python-zopeinterface
Provides: python-zope, python-zopeinterface, python2.7-zope.interface
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-pkg-resources, libc6 (>= 2.2.5)
Conflicts: python-zope, python-zopeinterface, zope3
Description: Interfaces for Python
 This package provides an implementation of object interfaces for Python.
 Interfaces are a mechanism for labeling objects as conforming to a given API
 or contract. So, this package can be considered as implementation of the
 Design By Contract methodology support in Python.
Original-Maintainer: Debian/Ubuntu Zope Team <pkg-zope-developers@lists.alioth.debian.org>
Homepage: http://pypi.python.org/pypi/zope.interface

Package: libjdom1-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 210
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.1.2+dfsg-2
Depends: libjaxen-java
Suggests: java-virtual-machine, libjdom1-java-doc
Description: lightweight and fast library using XML
 JDOM is, quite simply, a Java representation of an XML document. JDOM
 provides a way to represent that document for easy and efficient
 reading, manipulation, and writing. It has a straightforward API, is a
 lightweight and fast, and is optimized for the Java programmer. It's
 an alternative to DOM and SAX, although it integrates well with both
 DOM and SAX.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jdom.org/

Package: libxml-commons-resolver1.1-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 157
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.2-7
Suggests: libxml-commons-resolver1.1-java-doc
Conffiles:
 /etc/xml/resolver/CatalogManager.properties 462c158a572ad770e32029304b60fe05
Description: XML entity and URI resolver library
 Apache XML Commons Resolver simplifies the task of using XML catalog files to
 perform entity resolution. They are used by other Apache XML projects like
 Xerces-J and Xalan-J.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://xml.apache.org/commons/

Package: ncurses-base
Essential: yes
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 345
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ncurses
Version: 5.9-4
Provides: ncurses-runtime
Breaks: ncurses-term (<< 5.7+20100313-3)
Conflicts: ncurses, ncurses-runtime
Conffiles:
 /etc/terminfo/README 45b6df19fb5e21f55717482fa7a30171
Description: basic terminal type definitions
 The ncurses library routines are a terminal-independent method of
 updating character screens with reasonable optimization.
 .
 This package contains terminfo data files to support the most common types of
 terminal, including ansi, dumb, linux, rxvt, screen, sun, vt100, vt102, vt220,
 vt52, and xterm.
Original-Maintainer: Craig Small <csmall@debian.org>
Homepage: http://invisible-island.net/ncurses/

Package: libcommons-digester-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 238
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.8.1-3
Depends: libcommons-beanutils-java (>= 1.7-1), libcommons-logging-java
Suggests: libcommons-digester-java-doc
Description: Rule based XML Java object mapping tool
 Commons-Digester converts XML to a Java object by a set of mapping
 rules. A rich set of predefined rules is available for your use. You
 can also create your own rules.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/digester/

Package: libpopt0
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 128
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: popt
Version: 1.16-3ubuntu1
Replaces: popt
Depends: libc6 (>= 2.8)
Pre-Depends: multiarch-support
Conflicts: libpopt-dev (<= 1.4-1), popt, rpm (<= 4.0.2-3)
Description: lib for parsing cmdline parameters
 Popt was heavily influenced by the getopt() and getopt_long() functions,
 but it allows more powerful argument expansion. It can parse arbitrary
 argv[] style arrays and automatically set variables based on command
 line arguments. It also allows command line arguments to be aliased via
 configuration files and includes utility functions for parsing arbitrary
 strings into argv[] arrays using shell-like rules.
 .
 This package contains the runtime library and locale data.
Homepage: http://rpm5.org/
Original-Maintainer: Paul Martin <pm@debian.org>

Package: libpam0g
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 223
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pam
Version: 1.1.3-7ubuntu2
Replaces: libpam0g-util
Depends: libc6 (>= 2.14), debconf (>= 0.5) | debconf-2.0
Pre-Depends: multiarch-support
Suggests: libpam-doc
Description: Pluggable Authentication Modules library
 Contains the shared library for Linux-PAM, a library that enables the
 local system administrator to choose how applications authenticate users.
 In other words, without rewriting or recompiling a PAM-aware application,
 it is possible to switch between the authentication mechanism(s) it uses.
 One may entirely upgrade the local authentication system without touching
 the applications themselves.
Homepage: http://pam.sourceforge.net/
Original-Maintainer: Steve Langasek <vorlon@debian.org>

Package: libpci3
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 110
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pciutils
Version: 1:3.1.8-2ubuntu5
Replaces: libpci2
Provides: libpci2
Depends: libc6 (>= 2.14), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Conflicts: libpci2
Description: Linux PCI Utilities (shared library)
 This package contains the libpci shared library files.
 .
 The libpci library provides portable access to configuration
 registers of devices connected to the PCI bus.
Homepage: http://atrey.karlin.mff.cuni.cz/~mj/pciutils.shtml
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: libusb-0.1-4
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 73
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libusb
Version: 2:0.1.12-20
Replaces: libusb0
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Conflicts: libccid (<< 0.9.2-3), libusb0
Description: userspace USB programming library
 Library for programming USB applications without the knowledge
 of Linux kernel internals.
Original-Maintainer: Aurelien Jarno <aurel32@debian.org>
Homepage: http://www.linux-usb.org/

Package: libpython2.7
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 3063
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: python2.7
Version: 2.7.3-0ubuntu3.1
Replaces: python2.7 (<< 2.6)
Depends: python2.7 (= 2.7.3-0ubuntu3.1), libc6 (>= 2.15), libgcc1 (>= 1:4.1.1), libssl1.0.0 (>= 1.0.0), zlib1g (>= 1:1.2.0)
Description: Shared Python runtime library (version 2.7)
 Version 2.7 of the high-level, interactive object oriented language,
 includes an extensive class library with lots of goodies for
 network programming, system administration, sounds and graphics.
 .
 This package contains the shared runtime library, normally not needed
 for programs using the statically linked interpreter.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: libgpg-error0
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libgpg-error
Version: 1.10-2ubuntu1
Depends: libc6 (>= 2.2.5)
Pre-Depends: multiarch-support
Description: library for common error values and messages in GnuPG components
 Library that defines common error values for all GnuPG
 components.  Among these are GPG, GPGSM, GPGME, GPG-Agent, libgcrypt,
 pinentry, SmartCard Daemon and possibly more in the future.
Homepage: http://www.gnupg.org/related_software/libgpg-error/
Original-Maintainer: Jose Carlos Garcia Sogo <jsogo@debian.org>

Package: psmisc
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 228
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 22.15-2ubuntu1.1
Replaces: procps (<< 1:1.2)
Depends: libc6 (>= 2.14), libtinfo5
Description: utilities that use the proc file system
 This package contains miscellaneous utilities that use the proc FS:
 .
  - fuser: identifies processes that are using files or sockets.
  - killall: kills processes by name (e.g. "killall -HUP named").
  - peekfd: shows the data traveling over a file descriptor.
  - pstree: shows currently running processes as a tree.
  - prtstat: print the contents of /proc/<pid>/stat
Homepage: http://psmisc.sf.net/
Original-Maintainer: Craig Small <csmall@debian.org>

Package: ucf
Status: install ok installed
Priority: standard
Section: utils
Installed-Size: 272
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.0025+nmu2ubuntu1
Depends: debconf (>= 1.5.19), coreutils (>= 5.91)
Conffiles:
 /etc/ucf.conf 5565b8b26108c49ba575ba452cd69b3e
Description: Update Configuration File: preserve user changes to config files.
 Debian policy mandates that user changes to configuration files must be
 preserved during package upgrades. The easy way to achieve this behavior
 is to make the configuration file a 'conffile', in which case dpkg
 handles the file specially during upgrades, prompting the user as
 needed.
 .
 This is appropriate only if it is possible to distribute a default
 version that will work for most installations, although some system
 administrators may choose to modify it. This implies that the
 default version will be part of the package distribution, and must
 not be modified by the maintainer scripts during installation (or at
 any other time).
 .
 This script attempts to provide conffile-like handling for files that
 may not be labelled conffiles, and are not shipped in a Debian package,
 but handled by the postinst instead. This script allows one to
 maintain files in /etc, preserving user changes and in general
 offering the same facilities while upgrading that dpkg normally
 provides for 'conffiles'.
 .
 Additionally, this script provides facilities for transitioning a
 file that had not been provided with conffile-like protection to come
 under this schema, and attempts to minimize questions asked at
 installation time. Indeed, the transitioning facility is better than the
 one offered by dpkg while transitioning a file from a non-conffile to
 conffile status.
Original-Maintainer: Manoj Srivastava <srivasta@debian.org>

Package: perl-modules
Status: install ok installed
Priority: standard
Section: perl
Installed-Size: 14087
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: perl
Version: 5.14.2-6ubuntu2.2
Replaces: libansicolor-perl, libarchive-tar-perl, libattribute-handlers-perl, libautodie-perl, libcgi-pm-perl, libcpan-meta-perl, libcpan-meta-yaml-perl, libcpanplus-perl, libdigest-perl, libextutils-cbuilder-perl, libextutils-command-perl, libextutils-install-perl, libextutils-parsexs-perl, libfile-path-perl, libfile-spec-perl, libfile-temp-perl, libhttp-tiny-perl, libi18n-langtags-perl, libio-zlib-perl, libjson-pp-perl, liblocale-codes-perl, liblocale-maketext-perl, liblocale-maketext-simple-perl, libmath-bigint-perl, libmath-complex-perl, libmodule-build-perl, libmodule-corelist-perl, libmodule-load-conditional-perl, libmodule-load-perl, libmodule-metadata-perl, libmodule-pluggable-perl, libnet-perl, libnet-ping-perl, libparams-check-perl, libparent-perl, libparse-cpan-meta-perl, libperl-ostype-perl, libperl4-corelibs-perl, libpod-escapes-perl, libpod-parser-perl, libpod-simple-perl, libshell-perl, libtest-harness-perl, libtest-simple-perl, libthread-queue-perl, libtime-local-perl, libunicode-collate-perl, libversion-perl, libversion-requirements-perl, podlators-perl
Provides: libansicolor-perl, libarchive-tar-perl, libattribute-handlers-perl, libautodie-perl, libcgi-pm-perl, libcpan-meta-perl, libcpan-meta-yaml-perl, libcpanplus-perl, libdigest-perl, libextutils-cbuilder-perl, libextutils-command-perl, libextutils-install-perl, libextutils-parsexs-perl, libfile-path-perl, libfile-spec-perl, libfile-temp-perl, libhttp-tiny-perl, libi18n-langtags-perl, libio-zlib-perl, libjson-pp-perl, liblocale-codes-perl, liblocale-maketext-perl, liblocale-maketext-simple-perl, libmath-bigint-perl, libmath-complex-perl, libmodule-build-perl, libmodule-corelist-perl, libmodule-load-conditional-perl, libmodule-load-perl, libmodule-metadata-perl, libmodule-pluggable-perl, libnet-perl, libnet-ping-perl, libparams-check-perl, libparent-perl, libparse-cpan-meta-perl, libperl-ostype-perl, libperl4-corelibs-perl, libpod-escapes-perl, libpod-parser-perl, libpod-simple-perl, libshell-perl, libtest-harness-perl, libtest-simple-perl, libthread-queue-perl, libtime-local-perl, libunicode-collate-perl, libversion-perl, libversion-requirements-perl, podlators-perl
Depends: perl (>= 5.14.2-1), libswitch-perl, libclass-isa-perl
Suggests: libpod-plainer-perl
Breaks: libansicolor-perl (<< 3.00), libarchive-tar-perl (<< 1.76), libattribute-handlers-perl (<< 0.89), libautodie-perl (<< 2.10.01), libcgi-pm-perl (<< 3.52), libcpan-meta-perl (<< 2.110440), libcpan-meta-yaml-perl (<< 0.003), libcpanplus-perl (<< 0.9103), libdigest-perl (<< 1.16), libextutils-cbuilder-perl (<< 0.280203), libextutils-command-perl (<< 1.17), libextutils-install-perl (<< 1.56), libextutils-parsexs-perl (<< 2.221000), libfile-path-perl (<< 2.08.01), libfile-spec-perl (<< 3.3300), libfile-temp-perl (<< 0.22), libhttp-tiny-perl (<< 0.012), libi18n-langtags-perl (<< 0.35.01), libio-zlib-perl (<< 1.10), libjson-pp-perl (<< 2.27105), liblocale-codes-perl (<< 3.16), liblocale-maketext-perl (<< 1.19), liblocale-maketext-simple-perl (<< 0.21), libmath-bigint-perl (<< 1.994), libmath-complex-perl (<< 1.56), libmodule-build-perl (<< 0.380000), libmodule-corelist-perl (<< 2.49.02), libmodule-load-conditional-perl (<< 0.44), libmodule-load-perl (<< 0.18), libmodule-metadata-perl (<< 1.000004), libmodule-pluggable-perl (<< 3.9), libnet-perl (<= 1:1.22), libnet-ping-perl (<< 2.38), libparams-check-perl (<< 0.28), libparent-perl (<< 0.225), libparse-cpan-meta-perl (<< 1.4401), libperl-ostype-perl (<< 1.002), libpod-escapes-perl (<< 1.04), libpod-parser-perl (<< 1.37), libpod-simple-perl (<< 3.16), libshell-perl (<< 0.72.01), libtest-harness-perl (<< 3.23), libtest-simple-perl (<< 0.98), libthread-queue-perl (<< 2.12), libtime-local-perl (<< 1.2000), libunicode-collate-perl (<< 0.73), libversion-perl (<< 1:0.8800), libversion-requirements-perl (<< 0.101020), podlators-perl (<< 2.3.1)
Conflicts: doc-base (<< 0.10.3), libxml-sax-perl (<< 0.99+dfsg-1ubuntu0.1), mono-gac (<< 2.10.8.1-1)
Conffiles:
 /etc/perl/Net/libnet.cfg fb2946cae573b8ed3d654a180d458733
Description: Core Perl modules
 Architecture independent Perl modules.  These modules are part of Perl and
 required if the 'perl' package is installed.
 .
 Note that this package only exists to save archive space and should be
 considered an internal implementation detail of the 'perl' package.
 Other packages should not depend on 'perl-modules' directly, they
 should use 'perl' (which depends on 'perl-modules') instead.
Original-Maintainer: Niko Tyni <ntyni@debian.org>

Package: bsdutils
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 196
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: util-linux (2.20.1-1ubuntu3)
Version: 1:2.20.1-1ubuntu3
Depends: libc6 (>= 2.7)
Recommends: bsdmainutils
Description: Basic utilities from 4.4BSD-Lite
 This package contains the bare minimum number of BSD utilities needed
 to boot a Debian system: logger, renice, script, scriptreplay, and wall.
 The remaining standard BSD utilities are provided by bsdmainutils.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: sensible-utils
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.0.6ubuntu2
Replaces: debianutils (<= 2.32.3), manpages-pl (<= 20060617-3~)
Description: Utilities for sensible alternative selection
 This package provides a number of small utilities which are used
 by programs to sensibly select and spawn an appropriate browser,
 editor, or pager.
 .
 The specific utilities included are: sensible-browser sensible-editor
 sensible-pager
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: python-mysqldb
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 216
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.2.3-1build1
Replaces: python2.3-mysqldb, python2.4-mysqldb
Provides: python2.7-mysqldb
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.4), libmysqlclient18 (>= 5.5.13-1)
Suggests: python-egenix-mxdatetime, mysql-server-5.1 | mysql-server, python-mysqldb-dbg
Conflicts: python2.3-mysqldb, python2.4-mysqldb
Description: Python interface to MySQL
 MySQLdb is an interface to the popular MySQL database server for
 Python. The design goals are:
 .
  + Compliance with Python database API version 2.0
  + Thread-safety
  + Thread-friendliness (threads will not block each other)
  + Compatibility with MySQL-3.23 and later
 .
 This package contains modules for all Python versions supported in Debian.
Original-Maintainer: Debian Python Modules Team <python-modules-team@lists.alioth.debian.org>
Homepage: http://mysql-python.sourceforge.net/
Python-Version: 2.7

Package: libxapian22
Status: install ok installed
Priority: important
Section: libs
Installed-Size: 2368
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: xapian-core
Version: 1.2.8-1
Depends: libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6), libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
Suggests: xapian-tools
Description: Search engine library
 This package contains the core Xapian runtime library.
 .
 The Xapian search engine library is a highly adaptable toolkit which allows
 developers to easily add advanced indexing and search facilities to their own
 applications.  It implements the probabilistic model of information retrieval,
 and provides facilities for performing ranked free-text searches, relevance
 feedback, phrase searching, boolean searching, stemming, and simultaneous
 update and searching.  It is highly scalable, and is capable of working with
 collections containing hundreds of millions of documents.
Original-Maintainer: Olly Betts <olly@survex.com>
Homepage: http://xapian.org/

Package: hicolor-icon-theme
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 1413
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.12-1ubuntu2
Description: default fallback theme for FreeDesktop.org icon themes
 This is the default fallback theme used by implementations of the
 Freedesktop.org Icon Theme specification.
Original-Maintainer: Ross Burton <ross@debian.org>

Package: libguava-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1041
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: guava-libraries
Version: 09-2
Depends: libjsr305-java
Description: suite of Google Common Libraries for Java 5.0
 Guava is a suite of core and expanded libraries that include
 utility classes, google's collections, io classes, concurrency
 support and other features.
 .
 Guava has only one code dependency: javax.annotation, per the
 JSR-305 spec.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://code.google.com/p/guava-libraries/

Package: install-info
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: doc
Installed-Size: 218
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: texinfo
Version: 4.13a.dfsg.1-8ubuntu2
Replaces: texinfo (<< 4.13a.dfsg.1-2)
Depends: libc6 (>= 2.14)
Breaks: texinfo (<< 4.13a.dfsg.1-2)
Description: Manage installed documentation in info format
 The install-info utility creates the index of all installed documentation
 in info format and makes it available to info readers.
Original-Maintainer: Debian TeX maintainers <debian-tex-maint@lists.debian.org>

Package: apport-symptoms
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 75
Maintainer: Ubuntu Developers <ubuntu-motu@lists.ubuntu.com>
Architecture: all
Version: 0.16.1
Recommends: apport
Description: symptom scripts for apport
 Apport intercepts program crashes, collects debugging information about the
 crash and the operating system environment, and sends it to bug trackers in a
 standardized form. It also offers the user to report a bug about a package,
 with again collecting as much information about it as possible.
 .
 This package extends Apport by some "symptom" scripts, so that bug reporters
 do not have to guess the correct package, but report problems based on
 symptoms that they have (like "sound problem"), through an interactive process.
Homepage: https://wiki.ubuntu.com/Apport

Package: libdoxia-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1195
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: doxia
Version: 1.1.4-1ubuntu3
Depends: fop, libcommons-configuration-java, libcommons-lang-java, libhttpclient-java, libitext1-java, liblog4j1.2-java (>= 1.2.16), libplexus-container-default-java, libplexus-containers-java, libplexus-i18n-java, libplexus-utils-java, libxerces2-java
Suggests: libdoxia-java-doc
Description: powerful content generation framework
 Doxia is a content generation framework which aims to provide its users
 with powerful techniques for generating static and dynamic content.
 .
 Doxia can be used to generate static sites in addition to being
 incorporated into dynamic content generation systems like blogs, wikis
 and content management systems.
 .
 Doxia is used extensively by Maven and it powers the entire
 documentation system of Maven. It gives Maven the ability to take any
 document that Doxia supports and output it any format.
Homepage: http://maven.apache.org/doxia/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: dh-apparmor
Status: install ok installed
Multi-Arch: foreign
Priority: extra
Section: devel
Installed-Size: 77
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: apparmor
Version: 2.7.102-0ubuntu3.7
Replaces: debhelper (<< 9.20120115ubuntu3)
Depends: perl
Breaks: debhelper (<< 9.20120115ubuntu3)
Description: AppArmor debhelper routines
 This provides the debhelper tools used to install and migrate AppArmor
 profiles. This is normally used from package maintainer scripts during
 install and removal.
Homepage: http://apparmor.net/
Original-Maintainer: Kees Cook <kees@debian.org>

Package: lsb-release
Status: install ok installed
Multi-Arch: foreign
Priority: extra
Section: misc
Installed-Size: 111
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: lsb
Version: 4.0-0ubuntu20.2
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Recommends: apt
Suggests: lsb
Description: Linux Standard Base version reporting utility
 The Linux Standard Base (http://www.linuxbase.org/) is a standard
 core system that third-party applications written for Linux can
 depend upon.
 .
 The lsb-release command is a simple tool to help identify the Linux
 distribution being used and its compliance with the Linux Standard Base.
 LSB conformance will not be reported unless the required metapackages are
 installed.
 .
 While it is intended for use by LSB packages, this command may also
 be useful for programmatically distinguishing between a pure Debian
 installation and derived distributions.
Homepage: http://www.linux-foundation.org/en/LSB
Original-Maintainer: Chris Lawrence <lawrencc@debian.org>

Package: debhelper
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: devel
Installed-Size: 973
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 9.20120115ubuntu3
Depends: perl, file (>= 3.23), dpkg-dev (>= 1.16.0), html2text, binutils, po-debconf, man-db (>= 2.5.1-1), dh-apparmor
Suggests: dh-make
Conflicts: dpkg-cross (<< 1.18), python-central (<< 0.5.6), python-support (<< 0.5.3)
Description: helper programs for debian/rules
 A collection of programs that can be used in a debian/rules file to
 automate common tasks related to building debian packages. Programs
 are included to install various files into your package, compress
 files, fix file permissions, integrate your package with the debian
 menu system, debconf, doc-base, etc. Most debian packages use debhelper
 as part of their build process.
Homepage: http://kitenet.net/~joey/code/debhelper/
Original-Maintainer: Joey Hess <joeyh@debian.org>

Package: libcommons-io-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 167
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-io
Version: 1.4-4
Suggests: libcommons-io-java-doc
Description: Common useful IO related classes
 Commons-IO contains utility classes, stream implementations, file filters and
 endian classes.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/io/

Package: libwerken.xpath-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 167
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: werken.xpath
Version: 0.9.4-14
Depends: libantlr-java (>= 2.7), libjdom1-java, libxerces2-java
Description: JDOM XPath Engine
 A XPath Engine for JDOM, created by the Werken & Sons Company.
 .
 It's not overly useful by itself, but rather needs an (currently in
 development) implementation of XPointer, XSLT, or other XPath-based
 specification.  werken.xpath is merely an engine which can parse XPaths,
 and walk JDOM <http://www.jdom.org/> trees.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://werken-xpath.sourceforge.net/

Package: dpkg-dev
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: utils
Installed-Size: 1162
Origin: debian
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Bugs: debbugs://bugs.debian.org
Architecture: all
Source: dpkg
Version: 1.16.1.2ubuntu7
Depends: libdpkg-perl (= 1.16.1.2ubuntu7), bzip2, xz-utils, patch, make, binutils, base-files (>= 5.0.0)
Recommends: gcc | c-compiler, build-essential, fakeroot, gnupg, gpgv, libalgorithm-merge-perl
Suggests: debian-keyring
Breaks: devscripts (<< 2.10.26), dpkg-cross (<< 2.0.0)
Conffiles:
 /etc/dpkg/shlibs.default 1a2b9d0a869e2aa885ae3621c557fb95
 /etc/dpkg/shlibs.override 84b1e69080569cc5c613a50887af5200
Description: Debian package development tools
 This package provides the development tools (including dpkg-source)
 required to unpack, build and upload Debian source packages.
 .
 Most Debian source packages will require additional tools to build;
 for example, most packages need make and the C compiler gcc.
Homepage: http://wiki.debian.org/Teams/Dpkg
Original-Maintainer: Dpkg Developers <debian-dpkg@lists.debian.org>

Package: dctrl-tools
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 292
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.18ubuntu1
Replaces: grep-dctrl
Provides: grep-dctrl
Depends: libc6 (>= 2.3.4)
Suggests: apt, debtags
Conflicts: grep-dctrl
Conffiles:
 /etc/grep-dctrl.rc 38b25f3921f42d8f3fcf393e544e1e22
Description: Command-line tools to process Debian package information
 Debian package information is generally stored in files having a
 special file format, dubbed the Debian control file format (the dctrl
 format), a special case of the record jar file format.  These tools
 operate on any files conforming in a general sense to that format and
 are therefore widely applicable whenever those formats are in play.
 .
 Included are:
 .
   grep-dctrl     - Grep dctrl-format files
   grep-available - Grep the DPKG available database
   grep-status    - Grep the DPKG status database
   grep-aptavail  - Grep the APT available database
   grep-debtags   - Grep the Debtags package database
 .
   sort-dctrl     - Sort dctrl-format files
 .
   tbl-dctrl      - Tabulate dctrl-format files
 .
   sync-available - Sync the dpkg available database with
                    the apt database
Original-Maintainer: dctrl-tools developers <dctrl-tools-devel@lists.alioth.debian.org>

Package: libplexus-io-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 128
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-io
Version: 1.0~alpha5-2
Depends: libplexus-utils-java, libplexus-containers-java
Description: Plexus IO Components
 Plexus IO is a set of plexus components, which are designed for use in I/O
 operations. These I/O operations are doing nothing spectacular. For example,
 Apache Commons IO is a much more powerful library in the same area. However,
 the implementation as a plexus component allows reuse in Maven.
 .
 The following component groups are currently available:
  * File Mappers
  * File Selectors
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-components/plexus-io/

Package: libc6-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libdevel
Installed-Size: 11600
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: eglibc
Version: 2.15-0ubuntu10.3
Provides: libc-dev
Depends: libc6 (= 2.15-0ubuntu10.3), libc-dev-bin (= 2.15-0ubuntu10.3), linux-libc-dev
Recommends: gcc | c-compiler
Suggests: glibc-doc, manpages-dev
Breaks: binutils (<< 2.20.1-1), binutils-gold (<< 2.20.1-11), cmake (<< 2.8.4+dfsg.1-5), gcc-4.4 (<< 4.4.6-3ubuntu1), gcc-4.4-base (<< 4.4.6-3ubuntu1), gcc-4.5 (<< 4.5.3-1ubuntu2), gcc-4.5-base (<< 4.5.3-1ubuntu2), gcc-4.6 (<< 4.6.0-12), gcj-4.4-base (<< 4.4.6-2ubuntu2), gcj-4.5-base (<< 4.5.3-1ubuntu2), gnat-4.4-base (<< 4.4.6-1ubuntu3), libhwloc-dev (<< 1.2-3), libjna-java (<< 3.2.7-4), liblouis-dev (<< 2.3.0-2), liblouisxml-dev (<< 2.4.0-2), make (<< 3.81-8.1), pkg-config (<< 0.26-1)
Description: Embedded GNU C Library: Development Libraries and Header Files
 Contains the symlinks, headers, and object files needed to compile
 and link programs which use the standard C library.
Homepage: http://www.eglibc.org
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: augeas-tools
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 96
Maintainer: Raphaël Pinson <raphink@ubuntu.com>
Architecture: amd64
Source: augeas
Version: 0.10.0-0ubuntu4
Depends: libaugeas0 (>= 0.10.0), libc6 (>= 2.8), libreadline6 (>= 6.0)
Description: Augeas command line tools
 Augeas is a configuration editing tool. It parses configuration files in their
 native formats and transforms them into a tree. Configuration changes are made
 by manipulating this tree and saving it back into native config files.
 .
 This package provides command line tools based on libaugeas0:
 - augtool, a tool to manage configuration files.
 - augparse, a testing and debugging tool for augeas lenses.
Homepage: http://augeas.net/
Original-Maintainer: Nicolas Valcárcel Scerpella (Canonical) <nicolas.valcarcel@canonical.com>

Package: ant
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 2086
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.8.2-4build1
Replaces: ant-doc (<= 1.6.5-1), libant1.6-java
Depends: default-jre-headless | java2-runtime-headless | java5-runtime-headless | java6-runtime-headless, libxerces2-java
Recommends: ant-optional
Suggests: default-jdk | java-compiler | java-sdk, ant-gcj, ant-doc
Breaks: ant-doc (<= 1.6.5-1)
Conflicts: libant1.6-java
Description: Java based build tool like make
 A system independent (i.e. not shell based) build tool that uses XML
 files as "Makefiles". This package contains the scripts and the core
 tasks libraries.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://ant.apache.org/

Package: bzip2
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: utils
Installed-Size: 114
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.0.6-1
Replaces: libbz2 (<< 0.9.5d-3)
Depends: libbz2-1.0 (= 1.0.6-1), libc6 (>= 2.4)
Suggests: bzip2-doc
Description: high-quality block-sorting file compressor - utilities
 bzip2 is a freely available, patent free, high-quality data compressor.
 It typically compresses files to within 10% to 15% of the best available
 techniques, whilst being around twice as fast at compression and six
 times faster at decompression.
 .
 bzip2 compresses files using the Burrows-Wheeler block-sorting text
 compression algorithm, and Huffman coding.  Compression is generally
 considerably better than that achieved by more conventional
 LZ77/LZ78-based compressors, and approaches the performance of the PPM
 family of statistical compressors.
 .
 The archive file format of bzip2 (.bz2) is incompatible with that of its
 predecessor, bzip (.bz).
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://www.bzip.org/

Package: vim-common
Status: install ok installed
Priority: important
Section: editors
Installed-Size: 295
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: vim
Version: 2:7.3.429-2ubuntu2.1
Depends: libc6 (>= 2.3.4)
Recommends: vim | vim-gnome | vim-gtk | vim-athena | vim-nox | vim-tiny
Conffiles:
 /etc/vim/vimrc 682aa2a07693cc27756eee9751db3903
Description: Vi IMproved - Common files
 Vim is an almost compatible version of the UNIX editor Vi.
 .
 Many new features have been added: multi level undo, syntax
 highlighting, command line history, on-line help, filename
 completion, block operations, folding, Unicode support, etc.
 .
 This package contains files shared by all non GUI-enabled vim
 variants (vim and vim-tiny currently) available in Debian.
 Examples of such shared files are: manpages, common executables
 like xxd, and configuration files.
Homepage: http://www.vim.org/
Original-Maintainer: Debian Vim Maintainers <pkg-vim-maintainers@lists.alioth.debian.org>

Package: libhttp-negotiate-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 72
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.00-2
Replaces: libwww-perl (<< 6.00)
Depends: perl, libhttp-message-perl
Breaks: libwww-perl (<< 6.00)
Description: implementation of content negotiation
 HTTP::Negotiate provides a complete implementation of the HTTP content
 negotiation algorithm. Content negotiation allows for the selection of a
 preferred content representation based upon attributes of the negotiable
 variants and the value of the various Accept* header fields in the request.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTTP-Negotiate/

Package: libatinject-jsr330-api-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 59
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: atinject-jsr330
Version: 1.0-2
Suggests: libatinject-jsr330-api-java-doc (= 1.0-2)
Description: Java API for JSR-330 Dependency Injection
 AtInject is the Java API build by the JSR-330 Expert Group:
 <http://jcp.org/en/jsr/detail?id=330>.
 .
 It's a set of API aiming to standardize an extensible dependency injection
 paradigm, as those provided by Guice, Spring or Plexus projects.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://code.google.com/p/atinject/

Package: libcommons-parent-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 86
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-parent
Version: 22-2
Depends: libapache-pom-java (>= 9)
Description: Maven metadata for Apache Commons project
 This package contains the Maven metadata shared between all components of
 the Apache Commons project.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/

Package: openssl
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 901
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.0.1-4ubuntu5.5
Depends: libc6 (>= 2.15), libssl1.0.0 (>= 1.0.1)
Suggests: ca-certificates
Conffiles:
 /etc/ssl/openssl.cnf ce31ab5015842bf7c2939514a634e0e4
Description: Secure Socket Layer (SSL) binary and related cryptographic tools
 This package contains the openssl binary and related tools.
 .
 It is part of the OpenSSL implementation of SSL.
 .
 You need it to perform certain cryptographic actions like:
  -  Creation of RSA, DH and DSA key parameters;
  -  Creation of X.509 certificates, CSRs and CRLs;
  -  Calculation of message digests;
  -  Encryption and decryption with ciphers;
  -  SSL/TLS client and server tests;
  -  Handling of S/MIME signed or encrypted mail.
Original-Maintainer: Debian OpenSSL Team <pkg-openssl-devel@lists.alioth.debian.org>

Package: python-gnupginterface
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 113
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: gnupginterface
Version: 0.3.2-9.1ubuntu3
Provides: python2.7-gnupginterface
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), gnupg (>= 1.2.1) | gnupg2
Description: Python interface to GnuPG (GPG)
 GnuPGInterface is a Python module to interface with GnuPG.
 It concentrates on interacting with GnuPG via filehandles,
 providing access to control GnuPG via versatile and extensible means.
 .
 This module is based on GnuPG::Interface, a Perl module by the same
 author.
Original-Maintainer: Guilherme de S. Pastore <gpastore@colband.com.br>

Package: libcommon-sense-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 80
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.4-1
Depends: perl
Description: module that implements some sane defaults for Perl programs
 common::sense implements some sane defaults for Perl programs, as defined by
 two typical (or not so typical - use your common sense) specimens of Perl
 coders.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/common-sense/

Package: python-gi
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 861
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pygobject
Version: 3.2.2-1~precise
Replaces: python-gobject (<< 3.0.2-4)
Provides: python2.7-gi
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.14), libgirepository-1.0-1 (>= 1.29.0), libglib2.0-0 (>= 2.31.8), gir1.2-glib-2.0 (>= 1.31.0)
Suggests: python-gi-cairo
Breaks: python-gobject (<< 3.0.2-4), python-nautilus (<= 1.1-1)
Description: Python 2.x bindings for gobject-introspection libraries
 GObject is an abstraction layer that allows programming with an object
 paradigm that is compatible with many languages. It is a part of Glib,
 the core library used to build GTK+ and GNOME.
 .
 This package contains the Python 2.x binding generator for libraries that
 support gobject-introspection, i. e. which ship a gir1.2-<name>-<version>
 package. With these packages, the libraries can be used from Python.
Original-Maintainer: Josselin Mouette <joss@debian.org>

Package: libgdk-pixbuf2.0-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 549
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gdk-pixbuf
Version: 2.26.1-1
Replaces: libgtk2.0-0 (<< 2.21.3), libgtk2.0-bin (<< 2.21.3)
Depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.31.18), libjasper1, libjpeg8 (>= 8c), libpng12-0 (>= 1.2.13-4), libtiff4, libx11-6, libgdk-pixbuf2.0-common (= 2.26.1-1)
Pre-Depends: multiarch-support
Breaks: libgtk2.0-0 (<< 2.21.3), libgtk2.0-bin (<< 2.21.3), librsvg2-2 (<< 2.26.3-2), libwmf0.2-7 (<< 0.2.8.4-7)
Description: GDK Pixbuf library
 The GDK Pixbuf library provides:
  - Image loading and saving facilities.
  - Fast scaling and compositing of pixbufs.
  - Simple animation loading (ie. animated GIFs)
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
Homepage: http://www.gtk.org/

Package: libnet-ip-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 144
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.25-3
Depends: perl
Description: Perl extension for manipulating IPv4/IPv6 addresses
 Net::IP provides functions to deal with IPv4/IPv6 addresses.
 The module can be used as a class, allowing the user to instantiate IP
 objects, which can be single IP addresses, prefixes, or ranges of addresses.
 There is also a procedural way of accessing most of the functions. Most
 subroutines can take either IPv4 or IPv6 addresses transparently.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Net-IP/

Package: libquadmath0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 246
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: GCC Quad-Precision Math Library
 A library, which provides quad-precision mathematical functions on targets
 supporting the __float128 datatype. The library is used to provide on such
 targets the REAL(16) type in the GNU Fortran compiler.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: byobu
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 418
Maintainer: Dustin Kirkland <kirkland@ubuntu.com>
Architecture: all
Version: 5.17-0ubuntu1
Replaces: byobu-extras (<< 2.17), screen-profiles (<< 2.0), screen-profiles-extras (<< 2.0)
Provides: byobu-extras, screen-profiles, screen-profiles-extras
Depends: debconf (>= 0.5) | debconf-2.0, gettext-base, python, python-newt (>= 0.52.2-11), tmux (>= 1.5) | screen
Recommends: screen, tmux (>= 1.5)
Suggests: apport, lsb-release, po-debconf, run-one, ttf-ubuntu-font-family (>= 0.80-0ubuntu1~medium), update-notifier-common, vim, w3m
Breaks: byobu-extras (<< 2.17), screen-profiles (<< 2.0), screen-profiles-extras (<< 2.0)
Enhances: screen
Conffiles:
 /etc/profile.d/Z97-byobu.sh 932cdde2033106bf046d5e3915895308
 /etc/byobu/socketdir 774a796c75a097ffd7c5c7492cb39568
 /etc/byobu/backend 4d8e6f18b91581878bb89f9d64c37336
Description: powerful, text based window manager and shell multiplexer
 Byobu is Ubuntu's text-based window manager based on GNU Screen.
 Using Byobu, you can quickly create and move between different windows
 over a single SSH connection or TTY terminal, monitor dozens of important
 statistics about your system, detach and reattach to sessions later
 while your programs continue to run in the background.
Homepage: http://launchpad.net/byobu

Package: fonts-ubuntu-font-family-console
Status: install ok installed
Priority: optional
Section: fonts
Installed-Size: 58
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ubuntu-font-family-sources
Version: 0.80-0ubuntu2
Description: Ubuntu Font Family Linux console fonts, sans-serif monospace
 The Ubuntu Font Family are a set of matching new libre/open fonts in
 development during 2010--2011. The development is being funded by
 Canonical Ltd on behalf the wider Free Software community and the
 Ubuntu project.  The technical font design work and implementation is
 being undertaken by Dalton Maag.
 .
 This package contains the "Ubuntu Mono" monospace members of the
 typeface, rendered for Linux console use.  These bitmap fonts can be
 loaded by dropping to a console with Ctrl-Alt-F1 and executing
 "setfont /usr/share/consolefonts/UbuntuMono*.psf"
 .
 Both the final font Truetype/OpenType files and the design files used
 to produce the font family are distributed under an open licence and
 you are expressly encouraged to experiment, modify, share and improve.
Original-Maintainer: Paul Sladen <ubuntu@paul.sladen.org>
Homepage: http://font.ubuntu.com/

Package: ncurses-bin
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 493
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ncurses
Version: 5.9-4
Pre-Depends: libc6 (>= 2.4), libtinfo5 (>= 5.9-3~)
Description: terminal-related programs and man pages
 The ncurses library routines are a terminal-independent method of
 updating character screens with reasonable optimization.
 .
 This package contains the programs used for manipulating the terminfo
 database and individual terminfo entries, as well as some programs for
 resetting terminals and such.
Original-Maintainer: Craig Small <csmall@debian.org>
Homepage: http://invisible-island.net/ncurses/

Package: perl-base
Essential: yes
Status: install ok installed
Priority: required
Section: perl
Installed-Size: 4770
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: perl
Version: 5.14.2-6ubuntu2.2
Replaces: libperl5.8 (<< 5.8.0-20), libscalar-list-utils-perl, libxsloader-perl, perl (<< 5.10.1-12), perl-modules (<< 5.10.1-1)
Provides: libscalar-list-utils-perl, libxsloader-perl, perl5-base, perlapi-5.14.2
Pre-Depends: libc6 (>= 2.14), dpkg (>= 1.14.20)
Suggests: perl
Breaks: autoconf2.13 (<< 2.13-45), libfile-spec-perl (<< 3.3300), libmarc-charset-perl (<< 1.2), libscalar-list-utils-perl (<< 1:1.23), libxsloader-perl (<< 0.13)
Conflicts: doc-base (<< 0.10.3), libxml-sax-perl (<< 0.99+dfsg-1ubuntu0.1), mono-gac (<< 2.10.8.1-1ubuntu1), safe-rm (<< 0.8), update-inetd (<< 4.41)
Description: minimal Perl system
 Perl is a scripting language used in many system scripts and utilities.
 .
 This package provides a Perl interpreter and the small subset of the
 standard run-time library required to perform basic tasks. For a full
 Perl installation, install "perl" (and its dependencies, "perl-modules"
 and "perl-doc").
Original-Maintainer: Niko Tyni <ntyni@debian.org>

Package: sysv-rc
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 232
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: sysvinit
Version: 2.88dsf-13.10ubuntu11.1
Replaces: file-rc
Depends: debconf (>= 0.5) | debconf-2.0, sysvinit-utils (>= 2.86.ds1-62), insserv (>> 1.12.0-10)
Recommends: lsb-base (>= 3.2-14)
Suggests: sysv-rc-conf, bum
Breaks: initscripts (<< 2.86.ds1-63)
Conflicts: file-rc
Description: System-V-like runlevel change mechanism
 This package provides support for the System-V like system
 for booting, changing runlevels, and shutting down,
 configured through symbolic links in /etc/rc?.d/.
Homepage: http://savannah.nongnu.org/projects/sysvinit
Original-Maintainer: Debian sysvinit maintainers <pkg-sysvinit-devel@lists.alioth.debian.org>

Package: liberror-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 96
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.17-1
Depends: perl (>= 5.6.0-16)
Description: Perl module for error/exception handling in an OO-ish way
 This module provides two interfaces.  Firstly "Error" provides a
 procedural interface to exception handling.  Secondly "Error" is a
 base class for errors/exceptions that can either be thrown, for
 subsequent catch, or can simply be recorded.
 .
 Errors in the class "Error" should not be thrown directly, but the
 user should throw errors from a sub-class of "Error".
Original-Maintainer: Clint Burfoot <clint@burfoot.info>

Package: libtimedate-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 248
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.2000-1
Replaces: timedate
Provides: timedate
Depends: perl
Conflicts: timedate
Description: collection of modules to manipulate date/time information
 TimeDate is a collection of Perl modules useful for manipulating date and
 time information. Date::Parse can parse absolute date specifications in a
 wide variety of input formats and many languages (via Date::Language).
 .
 This package also includes Date::Format, which can format dates into strings,
 as well as Time::Zone, which contains miscellaneous time zone functions.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/TimeDate/

Package: apt
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 3167
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.8.16~exp12ubuntu10.7
Replaces: manpages-pl (<< 20060617-3~)
Depends: ubuntu-keyring, libapt-pkg4.12 (>= 0.8.16~exp12ubuntu10.7), libc6 (>= 2.15), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6), gnupg
Pre-Depends: dpkg (>= 1.15.7.2)
Suggests: aptitude | synaptic | wajig, dpkg-dev, apt-doc, bzip2, lzma, python-apt
Conflicts: python-apt (<< 0.7.93.2~)
Conffiles:
 /etc/apt/apt.conf.d/20changelog 8baafd95750e9c31c45512ff7bde7043
 /etc/apt/apt.conf.d/01autoremove b9bbfaa2954b0499576b8d00c37d6a34
 /etc/logrotate.d/apt 179f2ed4f85cbaca12fa3d69c2a4a1c3
 /etc/cron.daily/apt 24804a562eda58422fd0f084c062ef63
Description: commandline package manager
 This package provides commandline tools for searching and
 managing as well as querying information about packages
 as a low-level access to all features of the libapt-pkg library.
 .
 These include:
  * apt-get for retrieval of packages and information about them
    from authenticated sources and for installation, upgrade and
    removal of packages together with their dependencies
  * apt-cache for querying available information about installed
    as well as installable packages
  * apt-cdrom to use removable media as a source for packages
  * apt-config as an interface to the configuration settings
  * apt-key as an interface to manage authentication keys
Original-Maintainer: APT Development Team <deity@lists.debian.org>

Package: libjetty-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 974
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jetty
Version: 6.1.24-6ubuntu0.12.04.1
Depends: libservlet2.5-java, libslf4j-java
Suggests: jetty, libjetty-java-doc
Description: Java servlet engine and webserver -- core libraries
 Jetty is an Open Source HTTP Servlet Server written in 100% Java.
 It is designed to be light weight, high performance, embeddable,
 extensible and flexible, thus making it an ideal platform for serving
 dynamic HTTP requests from any Java application.
Homepage: http://jetty.mortbay.com/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: sgml-base
Status: install ok installed
Priority: optional
Section: text
Installed-Size: 148
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.26+nmu1ubuntu1
Suggests: sgml-base-doc
Conflicts: sgml-data (<= 0.02), sgmltools-2 (<= 2.0.2-4)
Description: SGML infrastructure and SGML catalog file support
 This package creates the SGML infrastructure directories and provides
 SGML catalog file support in compliance with the current Debian SGML
 Policy draft:
 .
   * infrastructure directories:
      - /etc/sgml
      - /usr/share/sgml/{declaration,dtd,entities,misc,stylesheet}
      - /usr/share/local/sgml/{declaration,dtd,entities,misc,stylesheet}
 .
   * update-catalog(8): tool for maintaining the root SGML catalog
     file and the package SGML catalog files in the '/etc/sgml' directory
Original-Maintainer: Debian XML/SGML Group <debian-xml-sgml-pkgs@lists.alioth.debian.org>

Package: libswitch-perl
Status: install ok installed
Priority: standard
Section: perl
Installed-Size: 74
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.16-2
Depends: perl, perl-modules
Description: switch statement for Perl
 Switch.pm implements a generalized case mechanism that covers many
 possible combinations of switch and case values.
 .
 This is an obsolete module provided for compatiblity since it is being
 removed from the core. For perl 5.10 and above the "given/when" builtins
 are much preferred.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Switch/

Package: libdigest-hmac-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 72
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.03+dfsg-1
Depends: perl
Description: module for creating standard message integrity checks
 HMAC is used for message integrity checks between two parties
 that share a secret key, and works in combination with some other
 Digest algorithm, usually MD5 or SHA-1.  The HMAC mechanism
 is described in RFC 2104.
 .
 The Digest::HMAC module follow the common Digest:: interface,
 but the constructor takes the secret key and the name of some
 other simple Digest:: module as argument.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Digest-HMAC/

Package: libxdmcp-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libdevel
Installed-Size: 107
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxdmcp
Version: 1:1.1.0-4
Depends: libxdmcp6 (= 1:1.1.0-4), x11proto-core-dev
Description: X11 authorisation library (development headers)
 This package provides the main interface to the X11 display manager control
 protocol library, which allows for remote logins to display managers.
 .
 This package contains the development headers for the library found in
 libxdmcp6. Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXdmcp
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libisc83
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 390
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: libbind0
Depends: libc6 (>= 2.15), libxml2 (>= 2.7.4)
Conflicts: libbind0, libbind9-41
Description: ISC Shared Library used by BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers the libisc shared library used by BIND's daemons and
 clients.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: pciutils
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: admin
Installed-Size: 920
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:3.1.8-2ubuntu5
Depends: libc6 (>= 2.14), libpci3 (= 1:3.1.8-2ubuntu5)
Suggests: bzip2, wget | curl | lynx
Description: Linux PCI Utilities
 This package contains various utilities for inspecting and setting of
 devices connected to the PCI bus.
Homepage: http://atrey.karlin.mff.cuni.cz/~mj/pciutils.shtml
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: libunistring0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 1151
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libunistring
Version: 0.9.3-5
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: Unicode string library for C
 The 'libunistring' library implements Unicode strings (in the UTF-8,
 UTF-16, and UTF-32 encodings), together with functions for Unicode
 characters (character names, classifications, properties) and
 functions for string processing (formatted output, width, word
 breaks, line breaks, normalization, case folding, regular
 expressions).
 .
 This package contains the shared library.
Original-Maintainer: Andreas Rottmann <rotty@debian.org>
Homepage: http://www.gnu.org/software/libunistring/

Package: libdbus-glib-1-2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 230
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: dbus-glib
Version: 0.98-1ubuntu1
Depends: libc6 (>= 2.2.5), libdbus-1-3 (>= 1.2.16), libglib2.0-0 (>= 2.26.0)
Pre-Depends: multiarch-support
Description: simple interprocess messaging system (GLib-based shared library)
 D-Bus is a message bus, used for sending messages between applications.
 Conceptually, it fits somewhere in between raw sockets and CORBA in
 terms of complexity.
 .
 This package provides the GLib-based shared library for applications using the
 GLib interface to D-Bus.
 .
 See the dbus description for more information about D-Bus in general.
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
Homepage: http://www.freedesktop.org/wiki/Software/DBusBindings

Package: tzdata-java
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: java
Installed-Size: 369
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: tzdata
Version: 2012e-0ubuntu0.12.04.1
Depends: tzdata (= 2012e-0ubuntu0.12.04.1)
Description: time zone and daylight-saving time data for use by java runtimes
 This package contains data required for the implementation of
 standard local time for many representative locations around the
 globe. It is updated periodically to reflect changes made by
 political bodies to time zone boundaries, UTC offsets, and
 daylight-saving rules.
 .
 This package contains the data for use by Java runtimes.
Homepage: http://www.iana.org/time-zones
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: libpthread-stubs0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 27
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libpthread-stubs
Version: 0.3-3
Description: pthread stubs not provided by native libc
 This library provides weak aliases for pthread functions not provided
 in libc or otherwise available by default.  Libraries like libxcb rely
 on pthread stubs to use pthreads optionally, becoming thread-safe when
 linked to libpthread, while avoiding any performance hit when running
 single-threaded. libpthread-stubs supports this behavior even on
 platforms which do not supply all the necessary pthread stubs.  On
 platforms which already supply all the necessary pthread stubs, this
 package has no content.
Original-Maintainer: XCB Developers <xcb@lists.freedesktop.org>

Package: icedtea-netx
Status: install ok installed
Multi-Arch: same
Priority: extra
Section: java
Installed-Size: 134
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: icedtea-web
Version: 1.2-2ubuntu1.3
Replaces: openjdk-6-jre (<< 6b18-1.8.7-3), openjdk-6-jre-headless (<< 6b18-1.8.7-3)
Depends: icedtea-netx-common (>= 1.2-2ubuntu1.3), openjdk-6-jre (>= 6b23~pre10~) | openjdk-7-jre
Conflicts: openjdk-6-jre (<< 6b18-1.8.7-3), openjdk-6-jre-headless (<< 6b18-1.8.7-3)
Description: NetX - implementation of the Java Network Launching Protocol (JNLP)
 NetX provides a drop-in replacement for javaws (Java Web Start). Since
 upstream NetX is dormant, IcedTea is hosting and modifying the sources
 in the IcedTea-Web directory.
 .
 IcedTea's NetX currently supports verification of signed jars, trusted
 certificate storing, system certificate store checking, and provides
 the services specified by the jnlp API.
Homepage: http://icedtea.classpath.org/wiki/IcedTea-Web
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>

Package: manpages-dev
Status: install ok installed
Priority: optional
Section: doc
Installed-Size: 1699
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: manpages
Version: 3.35-0.1ubuntu1
Replaces: glibc-doc (<< 2.11.2-3), libaio-dev
Depends: manpages
Suggests: man-browser
Description: Manual pages about using GNU/Linux for development
 These man pages describe the Linux programming interface, including
 these two sections:
  2 = Linux system calls.
  3 = Library calls (note that a more comprehensive source of information
      may be found in the glibc-doc package).
Homepage: http://www.kernel.org/doc/man-pages/
Original-Maintainer: Martin Schulze <joey@debian.org>

Package: ubuntu-standard
Status: install ok installed
Priority: optional
Section: metapackages
Installed-Size: 57
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ubuntu-meta
Version: 1.267
Depends: at, busybox-static, cpio, cron, dmidecode, dnsutils, dosfstools, ed, file, ftp, hdparm, info, iptables, language-selector-common, logrotate, lshw, lsof, ltrace, man-db, memtest86+, mime-support, parted, pciutils, popularity-contest, psmisc, rsync, strace, time, usbutils, wget
Recommends: apparmor, apt-transport-https, bash-completion, command-not-found, friendly-recovery, iputils-tracepath, irqbalance, manpages, mlocate, mtr-tiny, nano, ntfs-3g, openssh-client, plymouth, plymouth-theme-ubuntu-text, ppp, pppconfig, pppoeconf, tcpdump, telnet, ufw, update-manager-core, uuid-runtime
Description: The Ubuntu standard system
 This package depends on all of the packages in the Ubuntu standard system.
 This set of packages provides a comfortable command-line Unix-like
 environment.
 .
 It is also used to help ensure proper upgrades, so it is recommended that
 it not be removed.

Package: grub-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: admin
Installed-Size: 5024
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: grub2
Version: 1.99-21ubuntu3.7
Replaces: grub-coreboot (<< 1.99-1), grub-efi (<< 1.99-1), grub-efi-amd64 (<< 1.99-1), grub-efi-ia32 (<< 1.99-1), grub-ieee1275 (<< 1.99-1), grub-linuxbios (<< 1.96+20080831-1), grub-pc (<< 1.99-1), grub-yeeloong (<< 1.99-1)
Depends: libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.36), libfreetype6 (>= 2.2.1), libfuse2 (>= 2.8.1), gettext-base, lsb-base (>= 3.0-6)
Recommends: os-prober (>= 1.33)
Suggests: multiboot-doc, grub-emu, xorriso (>= 0.5.6.pl00), desktop-base (>= 4.0.6)
Breaks: friendly-recovery (<< 0.2.13), lupin-support (<< 0.30)
Conflicts: mdadm (<< 2.6.7-2)
Conffiles:
 /etc/grub.d/README be58f42dfe74feb6eeb98c6a843c743f
 /etc/grub.d/00_header 110ee7cc2bfc073ae00df01fb90c239e
 /etc/grub.d/41_custom 50fe323bbb00abdf77271f8e87dc175c
 /etc/grub.d/20_linux_xen e064f8969c152cc57a9fc3895c7927a7
 /etc/grub.d/10_linux fe04ea2f6eefb93f35f673b4c6aba8c6
 /etc/grub.d/40_custom babe7de352fe18de5a238569cf4b8a11
 /etc/grub.d/05_debian_theme aec4119832bdfdf90e247a74f26a7d85
 /etc/grub.d/30_uefi-firmware a6e6f48d040c8f64da0e8aa44b2b702f
 /etc/grub.d/30_os-prober e143b0b3a2212a459d7b1f5fba6bc7aa
 /etc/bash_completion.d/grub cf52e83153e368b56b4406d07c9bc640
 /etc/pm/sleep.d/10_grub-common bc63b0c6613e95979446d17a88875d6a
 /etc/init.d/grub-common f5078cf9df66751dec9ae8f7baf4a0c2
Description: GRand Unified Bootloader (common files)
 This package contains common files shared by the distinct flavours of GRUB.
 It is shared between GRUB Legacy and GRUB 2, although a number of files
 specific to GRUB 2 are here as long as they do not break GRUB Legacy.
Homepage: http://www.gnu.org/software/grub/
Original-Maintainer: GRUB Maintainers <pkg-grub-devel@lists.alioth.debian.org>

Package: libgc1c2
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 254
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libgc
Version: 1:7.1-8ubuntu0.12.04.1
Replaces: libgc1
Depends: libc6 (>= 2.14), libgcc1 (>= 1:4.1.1)
Conflicts: libgc1
Description: conservative garbage collector for C and C++
 Boehm-Demers-Weiser's GC is a garbage collecting storage allocator that is
 intended to be used as a plug-in replacement for C's malloc or C++'s new().
 .
 It allows you to allocate memory basically as you normally would without
 explicitly deallocating memory that is no longer useful. The collector
 automatically recycles memory when it determines that it can no longer be
 used.
 .
 This version of the collector is thread safe, has C++ support and uses the
 defaults for everything else. However, it does not work as a drop-in malloc(3)
 replacement.
Homepage: http://www.hpl.hp.com/personal/Hans_Boehm/gc/
Original-Maintainer: Christoph Egger <christoph@debian.org>

Package: libplexus-container-default-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 253
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-container-default
Version: 1.0-alpha-9-stable-1-6
Depends: libplexus-utils-java, libclassworlds-java (>= 1.1-alpha-2)
Suggests: libplexus-container-default-java-doc
Description: utilities for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
 .
 This package contains the API documentation for plexus-container-default
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/

Package: libgif4
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 84
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: giflib
Version: 4.1.6-9ubuntu1
Provides: libungif4g
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: library for GIF images (library)
 GIFLIB is a package of portable tools and library routines for working with GIF
 images.
 .
 This package contains the library.
Homepage: http://giflib.sourceforge.net/
Original-Maintainer: Thibaut GRIDEL <tgridel@free.fr>

Package: accountsservice
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 316
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.6.15-2ubuntu9.4
Depends: libc6 (>= 2.4), libdbus-1-3 (>= 1.0.2), libdbus-glib-1-2 (>= 0.88), libglib2.0-0 (>= 2.25.11), libpolkit-gobject-1-0 (>= 0.99), libaccountsservice0 (= 0.6.15-2ubuntu9.4), dbus
Suggests: gnome-control-center
Conffiles:
 /etc/dbus-1/system.d/org.freedesktop.Accounts.conf 06247d62052029ead7d9ec1ef9457f42
Description: query and manipulate user account information
 The AccountService project provides a set of D-Bus
 interfaces for querying and manipulating user account
 information and an implementation of these interfaces,
 based on the useradd, usermod and userdel commands.
Homepage: http://cgit.freedesktop.org/accountsservice/
Original-Maintainer: Alessio Treglia <alessio@debian.org>

Package: mtr-tiny
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 124
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: mtr
Version: 0.80-1ubuntu1
Replaces: mtr
Depends: libc6 (>= 2.4), libncurses5 (>= 5.5-5~)
Conflicts: mtr, suidmanager (<< 0.50)
Description: Full screen ncurses traceroute tool
 mtr combines the functionality of the 'traceroute' and 'ping' programs
 in a single network diagnostic tool.
 .
 As mtr starts, it investigates the network connection between the host
 mtr runs on and a user-specified destination host.  After it
 determines the address of each network hop between the machines,
 it sends a sequence ICMP ECHO requests to each one to determine the
 quality of the link to each machine.  As it does this, it prints
 running statistics about each machine.
 .
 mtr-tiny is compiled without support for X and conserves disk space.
Homepage: http://www.bitwizard.nl/mtr/
Original-Maintainer: Robert Woodcock <rcw@debian.org>

Package: libisccfg82
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 178
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: libbind0
Depends: libc6 (>= 2.14), libdns81, libisc83, libisccc80
Conflicts: libbind0, libbind9-41
Description: Config File Handling Library used by BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers the libisccfg shared library used by BIND's daemons
 and clients to read and write ISC-style configuration files like named.conf
 and rndc.conf.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libxcb1-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libdevel
Installed-Size: 719
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxcb
Version: 1.8.1-1ubuntu0.1
Replaces: libxcb0-dev
Depends: libxcb1 (= 1.8.1-1ubuntu0.1), libpthread-stubs0-dev, libxau-dev (>= 1:1.0.0-1), libxdmcp-dev (>= 1:1.0.0-1)
Suggests: libxcb-doc
Conflicts: libxcb0-dev
Description: X C Binding, development files
 This package contains the header and library files needed to build software
 using libxcb, the X C Binding.
 .
 The XCB library provides an interface to the X Window System protocol,
 designed to replace the Xlib interface.  XCB provides several advantages over
 Xlib:
 .
  * Size: small library and lower memory footprint
  * Latency hiding: batch several requests and wait for the replies later
  * Direct protocol access: one-to-one mapping between interface and protocol
  * Thread support: access XCB from multiple threads, with no explicit locking
  * Easy creation of new extensions: automatically generates interface from
    machine-parsable protocol descriptions
Homepage: http://xcb.freedesktop.org
Original-Maintainer: XCB Developers <xcb@lists.freedesktop.org>

Package: libk5crypto3
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 236
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: krb5
Version: 1.10+dfsg~beta1-2ubuntu0.3
Replaces: libkrb53 (<< 1.6.dfsg.4~beta1-7)
Depends: libc6 (>= 2.14), libkrb5support0 (>= 1.7dfsg~beta2)
Pre-Depends: multiarch-support
Suggests: krb5-doc, krb5-user
Breaks: libgssapi-krb5-2 (<= 1.10+dfsg~alpha1), libkrb5-3 (<= 1.8~aa), libkrb53 (<< 1.6.dfsg.4~beta1-9)
Description: MIT Kerberos runtime libraries - Crypto Library
 Kerberos is a system for authenticating users and services on a network.
 Kerberos is a trusted third-party service.  That means that there is a
 third party (the Kerberos server) that is trusted by all the entities on
 the network (users and services, usually called "principals").
 .
 This is the MIT reference implementation of Kerberos V5.
 .
 This package contains the runtime cryptography libraries used by
 applications and Kerberos clients.
Homepage: http://web.mit.edu/kerberos/
Original-Maintainer: Sam Hartman <hartmans@debian.org>

Package: bc
Status: install ok installed
Priority: standard
Section: math
Installed-Size: 320
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.06.95-2
Depends: libc6 (>= 2.4), libncurses5 (>= 5.6+20071006-3), libreadline6, dpkg (>= 1.15.4) | install-info
Description: The GNU bc arbitrary precision calculator language
 GNU bc is an interactive algebraic language with arbitrary precision which
 follows the POSIX 1003.2 draft standard, with several extensions including
 multi-character variable names, an 'else' statement and full Boolean
 expressions.  GNU bc does not require the separate GNU dc program.
 Home page: http://directory.fsf.org/GNU/bc.html
Original-Maintainer: John G. Hasler <jhasler@debian.org>

Package: libboost-iostreams1.46.1
Status: install ok installed
Priority: important
Section: libs
Installed-Size: 165
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: boost1.46
Version: 1.46.1-7ubuntu3
Depends: libbz2-1.0, libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.2.1), zlib1g (>= 1:1.1.4)
Description: Boost.Iostreams Library
 This package forms part of the Boost C++ Libraries collection.
 .
 Boost.Iostreams are a collection of concepts and a set of templates
 which turn models of these concepts into C++ standard library streams
 and stream buffers.
Homepage: http://www.boost.org/libs/iostreams/
Original-Maintainer: Debian Boost Team <pkg-boost-devel@lists.alioth.debian.org>

Package: libapache-pom-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 60
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: apache-pom
Version: 10-2
Description: Maven metadata for all Apache Software projects
 This package contains the Maven metadata shared between all
 Apache Software Foundation's projects.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://maven.apache.org/pom/asf/

Package: netbase
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 75
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 4.47ubuntu1
Depends: lsb-base (>= 3.0-6), initscripts, upstart-job
Recommends: ifupdown
Conflicts: inetutils-inetd (<< 2:1.4.3+20060719-3), openbsd-inetd (<< 0.20050402-3)
Conffiles:
 /etc/protocols 2e1e463038cc62e7110e33e21552751f
 /etc/rpc f0b6f6352bf886623adc04183120f83b
 /etc/services f8ab505348ca029cdba1929d2c59d23d
 /etc/init.d/networking f5a562ab343f7e58dd7cb21636429332
Description: Basic TCP/IP networking system
 This package provides the necessary infrastructure for basic TCP/IP based
 networking.
Original-Maintainer: Marco d'Itri <md@linux.it>

Package: libmagic1
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 2383
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: file
Version: 5.09-2
Depends: libc6 (>= 2.8), zlib1g (>= 1:1.1.4)
Suggests: file
Conffiles:
 /etc/magic 272913026300e7ae9b5e2d51f138e674
 /etc/magic.mime 272913026300e7ae9b5e2d51f138e674
Description: File type determination library using "magic" numbers
 This library can be used to classify files according to magic number tests. It
 implements the core functionality of the file command.
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>
Homepage: http://www.darwinsys.com/file/

Package: libdrm2
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 105
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libdrm
Version: 2.4.32-1ubuntu1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: Userspace interface to kernel DRM services -- runtime
 This library implements the userspace interface to the kernel DRM
 services.  DRM stands for "Direct Rendering Manager", which is the
 kernelspace portion of the "Direct Rendering Infrastructure" (DRI).
 The DRI is currently used on Linux to provide hardware-accelerated
 OpenGL drivers.
 .
 This package provides the runtime environment for libdrm.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libdrm-nouveau1a
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 90
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libdrm
Version: 2.4.32-1ubuntu1
Depends: libc6 (>= 2.14), libdrm2 (>= 2.4.3)
Pre-Depends: multiarch-support
Conflicts: libdrm-nouveau1
Description: Userspace interface to nouveau-specific kernel DRM services -- runtime
 This library implements the userspace interface to the nouveau-specific kernel
 DRM services. DRM stands for "Direct Rendering Manager", which is the
 kernelspace portion of the "Direct Rendering Infrastructure" (DRI). The DRI is
 currently used on Linux to provide hardware-accelerated OpenGL drivers.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libxom-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 476
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: xom
Version: 1.2.1-3
Depends: libjaxen-java (>= 1.1~beta8)
Suggests: libxom-java-doc
Description: A new XML object model for Java
 XOM(tm) is a new XML object model. It is an open source (LGPL),
 tree-based API for processing XML with Java that strives for correctness,
 simplicity, and performance, in that order.
 .
 XOM is designed to be easy to learn and easy to use. It works very
 straight-forwardly, and has a very shallow learning curve. Assuming
 you're already familiar with XML, you should be able to get up and
 running with XOM very quickly.
 .
 XOM is the only XML API that makes no compromises on correctness.
 XOM only accepts namespace well-formed XML documents, and only allows
 you to create namespace well-formed XML documents. (In fact, it's a
 little stricter than that: it actually guarantees that all documents
 are round-trippable and have well-defined XML infosets.) XOM manages
 your XML so you don't have to. With XOM, you can focus on the unique
 value of your application, and trust XOM to get the XML right.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.xom.nu/

Package: libecj-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1356
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ecj
Version: 3.5.1-3
Replaces: ecj (<< 3.3.0-1), ecj-bootstrap (<< 3.2.2), eclipse-ecj
Depends: java-common (>= 0.23)
Recommends: default-jre-headless | java2-runtime-headless | java5-runtime-headless
Suggests: ecj, ant, libecj-java-gcj
Conflicts: ecj-bootstrap (<< 3.2.2), eclipse-ecj
Description: Eclipse Java compiler (library)
 This package provides a standalone version of the Eclipse JDT compiler library
 which is distributed as part of Eclipse. It passes the JCK (Java Compatibility
 Kit) and is compatible with Java 1.3, 1.4, 1.5, 1.6 and 1.7.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: whiptail
Status: install ok installed
Priority: important
Section: utils
Installed-Size: 91
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: newt
Version: 0.52.11-2ubuntu10
Replaces: newt0.10, newt0.21 (<< 0.21-4), whiptail-utf8
Provides: whiptail-provider, whiptail-utf8
Depends: libc6 (>= 2.14), libnewt0.52 (>= 0.52.11), libpopt0 (>= 1.14), libslang2 (>= 2.0.7-1)
Conflicts: whiptail-provider
Description: Displays user-friendly dialog boxes from shell scripts
 Whiptail is a "dialog" replacement using newt instead of ncurses. It
 provides a method of displaying several different types of dialog boxes
 from shell scripts. This allows a developer of a script to interact with
 the user in a much friendlier manner.
Homepage: https://fedorahosted.org/newt/
Original-Maintainer: Alastair McKinstry <mckinstry@debian.org>

Package: ntfs-3g
Status: install ok installed
Priority: optional
Section: otherosfs
Installed-Size: 1422
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:2012.1.15AR.1-1ubuntu1.2
Replaces: libntfs-3g75, ntfsprogs
Depends: debconf (>= 0.5) | debconf-2.0, libc6 (>= 2.14), libfuse2 (>= 2.8.1), libgcrypt11 (>= 1.4.5), libgnutls26 (>= 2.12.6.1-0), initramfs-tools (>= 0.99), initscripts (>= 2.88dsf-13.3)
Pre-Depends: multiarch-support, fuse
Conflicts: libntfs-3g75, ntfsprogs (<< 1:2011.10.9AR.1-3~)
Description: read/write NTFS driver for FUSE
 NTFS-3G uses FUSE (Filesystem in Userspace) to provide support for the NTFS
 filesystem used by Microsoft Windows. It can:
 .
  * create, remove, rename, or move files, directories, hard links, and streams;
  * read and write files, including streams, sparse files, and transparently
    compressed files;
  * handle special files like symbolic links, devices, and FIFOs;
  * provide standard management of file ownership and permissions, including
    POSIX ACLs.
 .
 This package also contains the tools previously available in the ntfsprogs
 package.
Homepage: http://www.tuxera.com/community/ntfs-3g-advanced/
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>

Package: libplexus-classworlds-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 114
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-classworlds
Version: 1.5.0-3
Suggests: libplexus-classworlds-java-doc
Description: Class loading utilities for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/

Package: linux-image-3.2.0-29-generic
Status: install ok installed
Priority: optional
Section: kernel
Installed-Size: 145660
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux
Version: 3.2.0-29.46
Provides: fuse-module, ivtv-modules, kvm-api-4, linux-image, linux-image-3.0, ndiswrapper-modules-1.9, redhat-cluster-modules
Depends: initramfs-tools (>= 0.36ubuntu6), module-init-tools (>= 3.3-pre11-4ubuntu3), crda (>= 1.1.1-1ubuntu2) | wireless-crda
Pre-Depends: dpkg (>= 1.10.24)
Recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub | lilo (>= 19.1)
Suggests: fdutils, linux-doc-3.2.0 | linux-source-3.2.0, linux-tools
Conflicts: hotplug (<< 0.0.20040105-1)
Description: Linux kernel image for version 3.2.0 on 64 bit x86 SMP
 This package contains the Linux kernel image for version 3.2.0 on
 64 bit x86 SMP.
 .
 Also includes the corresponding System.map file, the modules built by the
 packager, and scripts that try to ensure that the system is not left in an
 unbootable state after an update.
 .
 Supports Generic processors.
 .
 Geared toward desktop and server systems.
 .
 You likely do not want to install this package directly. Instead, install
 the linux-generic meta-package, which will ensure that upgrades work
 correctly, and that supporting packages are also installed.

Package: dmidecode
Status: install ok installed
Priority: important
Section: utils
Installed-Size: 153
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.11-4
Depends: libc6 (>= 2.4)
Description: SMBIOS/DMI table decoder
 Dmidecode reports information about the system's hardware as described in the
 system BIOS according to the SMBIOS/DMI standard.
 .
 This information typically includes system manufacturer, model name, serial
 number, BIOS version, asset tag as well as a lot of other details of varying
 level of interest and reliability depending on the manufacturer. This will
 often include usage status for the CPU sockets, expansion slots (e.g. AGP, PCI,
 ISA) and memory module slots, and the list of I/O ports (e.g. serial, parallel,
 USB).
 .
 Beware that DMI data have proven to be too unreliable to be blindly trusted.
 Dmidecode does not scan the hardware, it only reports what the BIOS told it to.
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>
Homepage: http://dmidecode.nongnu.org/

Package: apt-transport-https
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 172
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: apt
Version: 0.8.16~exp12ubuntu10.7
Depends: libapt-pkg4.12 (>= 0.8.16~exp12ubuntu10.7), libc6 (>= 2.14), libcurl3-gnutls (>= 7.16.2-1), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.1.1)
Description: https download transport for APT
 This package enables the usage of 'deb https://foo distro main' lines
 in the /etc/apt/sources.list so that all package managers using the
 libapt-pkg library can access metadata and packages available in sources
 accessible over https (Hypertext Transfer Protocol Secure).
 .
 This transport supports server as well as client authentication
 with certificates.
Original-Maintainer: APT Development Team <deity@lists.debian.org>

Package: libstdc++6-4.6-dev
Status: install ok installed
Priority: optional
Section: libdevel
Installed-Size: 10601
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Provides: libstdc++-dev
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), g++-4.6 (= 4.6.3-1ubuntu5), libstdc++6 (>= 4.6.3-1ubuntu5), libc6-dev (>= 2.13-0ubuntu6)
Suggests: libstdc++6-4.6-doc
Conflicts: libg++2.8-dev, libg++27-dev, libg++272-dev (<< 2.7.2.8-1), libstdc++2.10-dev (<< 1:2.95.3-2), libstdc++2.8-dev, libstdc++2.9-dev, libstdc++2.9-glibc2.1-dev, libstdc++3.0-dev
Description: GNU Standard C++ Library v3 (development files)
 This package contains the headers and static library files necessary for
 building C++ programs which use libstdc++.
 .
 libstdc++-v3 is a complete rewrite from the previous libstdc++-v2, which
 was included up to g++-2.95. The first version of libstdc++-v3 appeared
 in g++-3.0.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libpam-modules
Status: install ok installed
Multi-Arch: same
Priority: required
Section: admin
Installed-Size: 773
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pam
Version: 1.1.3-7ubuntu2
Replaces: libpam-umask, libpam0g-util
Provides: libpam-mkhomedir, libpam-motd, libpam-umask
Pre-Depends: libc6 (>= 2.14), libdb5.1, libpam0g (>= 1.1.3-2), libselinux1 (>= 2.0.85), debconf (>= 0.5) | debconf-2.0, libpam-modules-bin (= 1.1.3-7ubuntu2)
Conflicts: libpam-mkhomedir, libpam-motd, libpam-umask
Conffiles:
 /etc/security/access.conf 13ec4d189f0ed9acf3433977a53d446b
 /etc/security/group.conf f1e26e8db6f7abd2d697d7dad3422c36
 /etc/security/limits.conf cbacdff4aa5f51749f191b32754946cb
 /etc/security/namespace.conf c600fa5899cfb3198a01dfba2bf281f3
 /etc/security/namespace.init 114e73ed5f40956527286e6213d305bc
 /etc/security/pam_env.conf ed3f430e418ad366ddb23307a8755249
 /etc/security/sepermit.conf d41c74654734a5c069a37bfc02f0a6d4
 /etc/security/time.conf c23fcbb29dda6c1499e6a5e5ade0265e
Description: Pluggable Authentication Modules for PAM
 This package completes the set of modules for PAM. It includes the
  pam_unix.so module as well as some specialty modules.
Homepage: http://pam.sourceforge.net/
Original-Maintainer: Steve Langasek <vorlon@debian.org>

Package: tzdata
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: libs
Installed-Size: 1702
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2012e-0ubuntu0.12.04.1
Replaces: libc0.1, libc0.3, libc6, libc6.1
Provides: tzdata-wheezy
Depends: debconf (>= 0.5) | debconf-2.0
Description: time zone and daylight-saving time data
 This package contains data required for the implementation of
 standard local time for many representative locations around the
 globe. It is updated periodically to reflect changes made by
 political bodies to time zone boundaries, UTC offsets, and
 daylight-saving rules.
Homepage: http://www.iana.org/time-zones
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: libudev0
Status: install ok installed
Multi-Arch: same
Priority: important
Section: admin
Installed-Size: 200
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: udev
Version: 175-0ubuntu9.2
Depends: libc6 (>= 2.8)
Pre-Depends: multiarch-support
Description: udev library
 libudev provides a set of functions for accessing the udev database
 and querying sysfs.
Homepage: http://www.kernel.org/pub/linux/utils/kernel/hotplug/udev.html

Package: python
Status: install ok installed
Priority: important
Section: python
Installed-Size: 658
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: python-defaults
Version: 2.7.3-0ubuntu2
Replaces: python-dev (<< 2.6.5-2)
Provides: python-ctypes, python-email, python-importlib, python-profiler, python-wsgiref
Depends: python2.7 (>= 2.7.3), python-minimal (= 2.7.3-0ubuntu2)
Suggests: python-doc (= 2.7.3-0ubuntu2), python-tk (= 2.7.3-0ubuntu2)
Breaks: python-bz2 (<< 1.1-8), python-csv (<< 1.0-4), python-email (<< 2.5.5-3), update-manager-core (<< 0.200.5-2)
Conflicts: python-central (<< 0.5.5)
Description: interactive high-level object-oriented language (default version)
 Python, the high-level, interactive object oriented language,
 includes an extensive class library with lots of goodies for
 network programming, system administration, sounds and graphics.
 .
 This package is a dependency package, which depends on Debian's default
 Python version (currently v2.7).
Homepage: http://www.python.org/
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: python-apport
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 471
Maintainer: Martin Pitt <martin.pitt@ubuntu.com>
Architecture: all
Source: apport
Version: 2.0.1-0ubuntu17.1
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-apt (>= 0.7.9), python-problem-report (>= 0.94), python-launchpadlib (>= 1.5.7), lsb-release
Conffiles:
 /etc/apport/crashdb.conf e9e01c48f40cf4c76a95c4af1fc88229
Description: apport crash report handling library
 This Python package provides high-level functions for creating and
 handling apport crash reports:
 .
  * Query available and new reports.
  * Add OS, packaging, and process runtime information to a report.
  * Various frontend utility functions.
  * Python hook to generate crash reports when Python scripts fail.
Homepage: https://wiki.ubuntu.com/Apport

Package: gettext
Status: install ok installed
Multi-Arch: allowed
Priority: optional
Section: devel
Installed-Size: 4124
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.18.1.1-5ubuntu3
Provides: libasprintf-dev, libgettextpo-dev
Depends: libc6 (>= 2.4), libcroco3 (>= 0.6.2), libglib2.0-0 (>= 2.12.0), libgomp1 (>= 4.2.1), libncurses5 (>= 5.5-5~), libtinfo5, libunistring0, libxml2 (>= 2.6.27), libgettextpo0 (= 0.18.1.1-5ubuntu3), gettext-base, dpkg (>= 1.15.4) | install-info
Recommends: curl | wget | lynx-cur
Suggests: gettext-doc
Conflicts: autopoint (<= 0.17-11)
Description: GNU Internationalization utilities
 Interesting for authors or maintainers of other packages or programs
 which they want to see internationalized.
Homepage: http://www.gnu.org/software/gettext/
Original-Maintainer: Santiago Vila <sanvila@debian.org>

Package: libfontconfig1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 425
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: fontconfig
Version: 2.8.0-3ubuntu9.1
Provides: libfontconfig
Depends: libc6 (>= 2.14), libexpat1 (>= 1.95.8), libfreetype6 (>= 2.2.1), fontconfig-config (= 2.8.0-3ubuntu9.1)
Pre-Depends: multiarch-support
Description: generic font configuration library - runtime
 Fontconfig is a font configuration and customization library, which
 does not depend on the X Window System. It is designed to locate
 fonts within the system and select them according to requirements
 specified by applications.
 .
 This package contains the runtime library needed to launch applications
 using fontconfig.
Original-Maintainer: Keith Packard <keithp@debian.org>

Package: ifupdown
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 186
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.7~beta2ubuntu8
Replaces: netbase (<< 4.00)
Depends: iproute (>= 20071016-1), libc6 (>= 2.14), upstart-job, lsb-base, initscripts (>= 2.88dsf-13.3)
Suggests: isc-dhcp-client | dhcp-client, ppp, rdnssd, net-tools
Conflicts: dhcp-client (<< 3.0)
Conffiles:
 /etc/network/if-up.d/upstart 2869783d5379a5acfaff5da1fc428718
 /etc/network/if-down.d/upstart be2d7ca79c30064a88777f8c6c1d19fe
 /etc/init/network-interface-container.conf 7fb0862f8c092b33c16ec0f05387fbfb
 /etc/init/network-interface-security.conf 8d6447a035b681f5fa22d168adcf8dec
 /etc/init/network-interface.conf 296dd23a2833cc2bb5c646a833011eab
 /etc/init/networking.conf d3dc878505e8997b131bad117ad266d5
Description: high level tools to configure network interfaces
 This package provides the tools ifup and ifdown which may be used to
 configure (or, respectively, deconfigure) network interfaces based on
 interface definitions in the file /etc/network/interfaces.
Original-Maintainer: Andrew O. Shadura <bugzilla@tut.by>

Package: wdiff
Status: install ok installed
Priority: optional
Section: text
Installed-Size: 264
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.6.5-1
Depends: libc6 (>= 2.11), libncurses5 (>= 5.5-5~), dpkg (>= 1.15.4) | install-info
Description: Compares two files word by word
 'wdiff' is a front-end to GNU 'diff'.  It compares two files, finding
 which words have been deleted or added to the first in order to create
 the second.  It has many output formats and interacts well with
 terminals and pagers (notably with 'less').  'wdiff' is particularly
 useful when two texts differ only by a few words and paragraphs have
 been refilled.
Original-Maintainer: Santiago Vila <sanvila@debian.org>
Homepage: http://www.gnu.org/software/wdiff/

Package: grub-pc-bin
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: admin
Installed-Size: 1895
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: grub2
Version: 1.99-21ubuntu3.7
Replaces: grub-common (<= 1.97~beta2-1), grub-pc (<< 1.99-1), grub2 (<< 1.99-21ubuntu3.7)
Depends: libc6 (>= 2.14), libdevmapper1.02.1 (>= 2:1.02.36), grub-common (= 1.99-21ubuntu3.7)
Suggests: desktop-base (>= 4.0.6)
Description: GRand Unified Bootloader, version 2 (PC/BIOS binaries)
 GRUB is a portable, powerful bootloader.  This version of GRUB is based on a
 cleaner design than its predecessors, and provides the following new features:
 .
  - Scripting in grub.cfg using BASH-like syntax.
  - Support for modern partition maps such as GPT.
  - Modular generation of grub.cfg via update-grub.  Packages providing GRUB
    add-ons can plug in their own script rules and trigger updates by invoking
    update-grub2.
  - VESA-based graphical mode with background image support and complete 24-bit
    color set.
  - Support for extended charsets.  Users can write UTF-8 text to their menu
    entries.
 .
 This package contains a version of GRUB that has been built for use with
 traditional PC/BIOS architecture.  It will not automatically install GRUB
 as the active boot loader, nor will it automatically update grub.cfg on
 upgrade, so most people should install grub-pc instead.
Homepage: http://www.gnu.org/software/grub/
Original-Maintainer: GRUB Maintainers <pkg-grub-devel@lists.alioth.debian.org>

Package: libplexus-interpolation-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 114
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-interpolation
Version: 1.11-3
Suggests: libplexus-interpolation-java-doc
Description: Plexus Interpolation API
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
 .
 Plexus interpolator is focused on providing a more modular, flexible
 interpolation framework for the expression language style commonly seen in
 Maven, Plexus, and other related projects.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-components/plexus-interpolation/

Package: libxext6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 133
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxext
Version: 2:1.3.0-3build1
Depends: libc6 (>= 2.14), libx11-6 (>= 2:1.4.99.1)
Pre-Depends: multiarch-support
Description: X11 miscellaneous extension library
 libXext provides an X Window System client interface to several extensions to
 the X protocol.
 .
 The supported protocol extensions are:
  - DOUBLE-BUFFER (DBE), the Double Buffer extension;
  - DPMS, the VESA Display Power Management System extension;
  - Extended-Visual-Information (EVI), an extension for gathering extra
    information about the X server's visuals;
  - LBX, the Low Bandwidth X extension;
  - MIT-SHM, the MIT X client/server shared memory extension;
  - MIT-SUNDRY-NONSTANDARD, a miscellaneous extension by MIT;
  - Multi-Buffering, the multi-buffering and stereo display extension;
  - SECURITY, the X security extension;
  - SHAPE, the non-rectangular shaped window extension;
  - SYNC, the X synchronization extension;
  - TOG-CUP, the Open Group's Colormap Utilization extension;
  - XC-APPGROUP, the X Consortium's Application Group extension;
  - XC-MISC, the X Consortium's resource ID querying extension;
  - XTEST, the X test extension (this is one of two client-side
    implementations; the other is in the libXtst library, provided by the
    libxtst6 package);
 .
 libXext also provides a small set of utility functions to aid authors of
 client APIs for X protocol extensions.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXext
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libusb-1.0-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 108
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libusb-1.0
Version: 2:1.0.9~rc3-2ubuntu1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: userspace USB programming library
 Library for programming USB applications without the knowledge
 of Linux kernel internals.
Homepage: http://www.linux-usb.org/
Original-Maintainer: Aurelien Jarno <aurel32@debian.org>

Package: libogg0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 88
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libogg
Version: 1.2.2~dfsg-1ubuntu1
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: Ogg bitstream library
 Libogg is a library for manipulating ogg bitstreams.  It handles
 both making ogg bitstreams and getting packets from ogg bitstreams.
Homepage: http://xiph.org/ogg/
Original-Maintainer: Ron Lee <ron@debian.org>

Package: libdpkg-perl
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: perl
Installed-Size: 1264
Origin: debian
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Bugs: debbugs://bugs.debian.org
Architecture: all
Source: dpkg
Version: 1.16.1.2ubuntu7
Replaces: dpkg (<< 1.15.8), dpkg-dev (<< 1.15.6)
Depends: dpkg (>= 1.15.8), perl, libtimedate-perl
Recommends: bzip2, xz-utils
Suggests: debian-keyring, gnupg, gpgv, binutils, patch
Breaks: dpkg-dev (<< 1.15.6)
Description: Dpkg perl modules
 This package provides the perl modules used by the scripts
 in dpkg-dev. They cover a wide range of functionalities. Among them
 there are the following modules:
 .
  - Dpkg::Arch: manipulate Debian architecture information
  - Dpkg::BuildOptions: parse and manipulate DEB_BUILD_OPTIONS
  - Dpkg::Changelog: parse Debian changelogs
  - Dpkg::Checksums: generate and parse checksums
  - Dpkg::Compression::Process: wrapper around compression tools
  - Dpkg::Compression::FileHandle: transparently (de)compress files
  - Dpkg::Control: parse and manipulate Debian control information
    (.dsc, .changes, Packages/Sources entries, etc.)
  - Dpkg::Deps: parse and manipulate dependencies
  - Dpkg::ErrorHandling: common error functions
  - Dpkg::Index: collections of Dpkg::Control (Packages/Sources files for
    example)
  - Dpkg::IPC: spawn sub-processes and feed/retrieve data
  - Dpkg::Substvars: substitute variables in strings
  - Dpkg::Vendor: identify current distribution vendor
  - Dpkg::Version: parse and manipulate Debian package versions
 .
 All the packages listed in Suggests or Recommends are used by some of the
 modules.
Homepage: http://wiki.debian.org/Teams/Dpkg
Original-Maintainer: Dpkg Developers <debian-dpkg@lists.debian.org>

Package: aspectj
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 108
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.6.12+dfsg-3
Depends: libaspectj-java (= 1.6.12+dfsg-3), default-jre-headless | java2-runtime-headless
Description: aspect-oriented extension for Java - tools
 AspectJ enables the clean modularization of crosscutting concerns
 such as: error checking and handling, synchronization, context-sensitive
 behavior, performance optimizations, monitoring and logging, debugging
 support, multi-object protocols.
 .
 This package provides the CLI tools of aspectj (aj5, ajc, ajbrowser).
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.eclipse.org/aspectj

Package: libxrender1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 85
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxrender
Version: 1:0.9.6-2build1
Depends: libc6 (>= 2.14), libx11-6 (>= 2:1.4.99.1)
Pre-Depends: multiarch-support
Description: X Rendering Extension client library
 The X Rendering Extension (Render) introduces digital image composition as
 the foundation of a new rendering model within the X Window System.
 Rendering geometric figures is accomplished by client-side tessellation into
 either triangles or trapezoids.  Text is drawn by loading glyphs into the
 server and rendering sets of them.  The Xrender library exposes this
 extension to X clients.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXrender
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: mountall
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 241
Maintainer: Scott James Remnant <scott@ubuntu.com>
Architecture: amd64
Version: 2.36.3
Replaces: upstart (<< 0.6.3-2)
Depends: makedev, udev, plymouth, coreutils (>= 7.1), libc6 (>= 2.9), libdbus-1-3 (>= 1.2.16), libnih-dbus1 (>= 1.0.0), libnih1 (>= 1.0.0), libplymouth2 (>= 0.8.1-3), libudev0 (>= 151)
Pre-Depends: dpkg (>= 1.15.7.2)
Breaks: initscripts (<< 2.88dsf-13.3), policycoreutils (<< 2.0.69-2ubuntu4), usplash (<< 0.5.47)
Conffiles:
 /etc/dbus-1/system.d/Mountall.Server.conf 91b1414af1257d2ef089f84a3e5c1ed1
 /etc/init/mounted-dev.conf d434b2b320f748c352e83edf25223ebf
 /etc/init/mounted-tmp.conf 289fa57d726885147a41b2b1f3695a29
 /etc/init/mountall-shell.conf aa05af89db3de044d1cd7f6971b46d9f
 /etc/init/mounted-run.conf b40dc0421f76a9a581e16d91a4ec6137
 /etc/init/mountall-reboot.conf 43e3c229085a13005b0681a49b2bef51
 /etc/init/mounted-proc.conf 07198659bd06c1442a35882b2fae05fc
 /etc/init/mountall-net.conf feff70cd7006f6763e24263d381940f3
 /etc/init/mountall.conf 4ecc1e75cf68705e15e5e3106066223a
 /etc/init/mounted-var.conf 02f90856c91a46e9cbed1c35b92fec6c
 /etc/init/mounted-debugfs.conf 462c8aab0d9d4e6e496b1e2be5910edc
Description: filesystem mounting tool
 mountall mounts filesystems when the underlying block devices are
 ready, or when network interfaces come up, checking the filesystems
 first.

Package: libc-dev-bin
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: libdevel
Installed-Size: 372
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: eglibc
Version: 2.15-0ubuntu10.3
Replaces: libc0.1-dev, libc0.3-dev, libc6-dev, libc6.1-dev
Depends: libc6 (>> 2.15), libc6 (<< 2.16)
Recommends: manpages-dev
Description: Embedded GNU C Library: Development binaries
 This package contains utility programs related to the GNU C Library
 development package.
Homepage: http://www.eglibc.org
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: tomcat6
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 251
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.0.35-1ubuntu3.2
Depends: tomcat6-common (>= 6.0.35-1ubuntu3.2), ucf, adduser, debconf (>= 0.5) | debconf-2.0
Recommends: authbind
Suggests: tomcat6-docs (>= 6.0.35-1ubuntu3.2), tomcat6-admin (>= 6.0.35-1ubuntu3.2), tomcat6-examples (>= 6.0.35-1ubuntu3.2), tomcat6-user (>= 6.0.35-1ubuntu3.2), libtcnative-1
Conffiles:
 /etc/cron.daily/tomcat6 9f363dd6ef9a434f88f56c2e4b60891e
 /etc/init.d/tomcat6 5550f1c5f02c9168112027969dbd8097
 /etc/tomcat6/web.xml ebd75a90327c9c33c1c626c77844b0f5
 /etc/tomcat6/server.xml 1733213f7f85c894ee210c14de6eddc1
 /etc/tomcat6/logging.properties dedc604233c457f0f2564d12af561206
 /etc/tomcat6/tomcat-users.xml 4d9f57e1f2d2cc184a5972322df68852
 /etc/tomcat6/catalina.properties 958cbb7aea9224589b899ecf065d9d47
 /etc/tomcat6/policy.d/03catalina.policy ef33d5b41e1099a13ab97961533b9ee0
 /etc/tomcat6/policy.d/01system.policy 3d3483853acd908b8d8fefe16665651d
 /etc/tomcat6/policy.d/50local.policy ab4a59785aadeaa6c4ba959e4a7b6d76
 /etc/tomcat6/policy.d/04webapps.policy 60fae6427ecee74edec47b0b76258c4d
 /etc/tomcat6/policy.d/02debian.policy a6da62024c6384c0331e06a8b13a9a66
 /etc/tomcat6/context.xml 0fe95a15b3f4531be3db19260bfa148d
 /etc/logrotate.d/tomcat6 b2ac7e54be62b4aead253edcbd659683
Description: Servlet and JSP engine
 Apache Tomcat implements the Java Servlet and the JavaServer Pages (JSP)
 specifications from Sun Microsystems, and provides a "pure Java" HTTP web
 server environment for Java code to run.
 .
 This package contains only the startup scripts for the system-wide daemon.
 No documentation or web applications are included here, please install
 the tomcat6-docs and tomcat6-examples packages if you want them.
 Install the authbind package if you need to use Tomcat on ports 1-1023.
 Install tomcat6-user instead of this package if you don't want Tomcat to
 start as a service.
Homepage: http://tomcat.apache.org
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libjaxme-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1335
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jaxme
Version: 0.5.2+dfsg-6
Depends: liblog4j1.2-java, libcommons-codec-java
Suggests: libjaxme-java-doc
Description: implementation of the JAXB specification for Java/XML binding
 A Java/XML binding compiler takes as input a schema description. The output
 is a set of Java classes:
  * A Java bean class compatible with the schema description.
  * An unmarshaller that converts a XML document into the equivalent Java bean.
  * A marshaller that converts the Java bean back into the XML document.
 .
 This package contains an implementation of the JAXB API, the JaxMe
 JavaSource framework for generating Java sources, the JaxMe parser
 for XML schema and the JaxMe Persistence Management layer.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://ws.apache.org/jaxme/

Package: dbus
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: admin
Installed-Size: 930
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.4.18-1ubuntu1.3
Depends: libc6 (>= 2.14), libdbus-1-3 (>= 1.0.2), libexpat1 (>= 1.95.8), libselinux1 (>= 1.32), upstart-job, adduser, lsb-base (>= 3.2-14), upstart (>= 0.6.3-6), netbase (>= 4.45ubuntu3)
Suggests: dbus-x11
Conffiles:
 /etc/default/dbus 0d0f25a2f993509c857eb262f6e22015
 /etc/dbus-1/session.conf aa815e24fb0e075d1ae336154fc8a655
 /etc/dbus-1/system.conf 4f169e788196d25df067910627aaff6d
 /etc/init/dbus.conf 2059ea9c0b2b961c60d63456324e2d9b
Description: simple interprocess messaging system (daemon and utilities)
 D-Bus is a message bus, used for sending messages between applications.
 Conceptually, it fits somewhere in between raw sockets and CORBA in
 terms of complexity.
 .
 D-Bus supports broadcast messages, asynchronous messages (thus
 decreasing latency), authentication, and more. It is designed to be
 low-overhead; messages are sent using a binary protocol, not using
 XML. D-Bus also supports a method call mapping for its messages, but
 it is not required; this makes using the system quite simple.
 .
 It comes with several bindings, including GLib, Python, Qt and Java.
 .
 This package contains the D-Bus daemon and related utilities.
 .
 The client-side library can be found in the libdbus-1-3 package, as it is no
 longer contained in this package.
Homepage: http://dbus.freedesktop.org/
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: libapt-pkg4.12
Status: install ok installed
Multi-Arch: same
Priority: important
Section: admin
Installed-Size: 2963
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: apt
Version: 0.8.16~exp12ubuntu10.7
Depends: libc6 (>= 2.15), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6), zlib1g (>= 1:1.2.2.3)
Pre-Depends: multiarch-support
Description: package managment runtime library
 This library provides the common functionality for searching and
 managing packages as well as information about packages.
 Higher-level package managers can depend upon this library.
 .
 This includes:
  * retrieval of information about packages from multiple sources
  * retrieval of packages and all dependent packages
    needed to satisfy a request either through an internal
    solver or by interfacing with an external one
  * authenticating the sources and validating the retrieved data
  * installation and removal of packages in the system
  * providing different transports to retrieve data over cdrom, ftp,
    http, rsh as well as an interface to add more transports like
    https (apt-transport-https) and debtorrent (apt-transport-debtorrent).
Original-Maintainer: APT Development Team <deity@lists.debian.org>

Package: libthai0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 98
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libthai
Version: 0.1.16-3
Depends: libthai-data (>= 0.1.10), libc6 (>= 2.4), libdatrie1 (>= 0.2.0)
Pre-Depends: multiarch-support
Enhances: libqtcore4, libqtgui4
Description: Thai language support library
 LibThai is a set of Thai language support routines aimed to ease
 developers' tasks to incorporate Thai language support in their applications.
 It includes important Thai-specific functions e.g. word breaking, input and
 output methods as well as basic character and string supports.
 .
 This package contains the shared libraries needed to run programs that use
 the LibThai library.
Original-Maintainer: Theppitak Karoonboonyanan <thep@debian.org>
Homepage: http://linux.thai.net/projects/libthai

Package: openjdk-6-jdk
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: java
Installed-Size: 33885
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openjdk-6
Version: 6b24-1.11.5-0ubuntu1~12.04.1
Provides: java-compiler, java-sdk, java2-sdk, java5-sdk, java6-sdk
Depends: openjdk-6-jre (>= 6b24-1.11.5-0ubuntu1~12.04.1), libc6 (>= 2.14)
Recommends: libxt-dev
Suggests: openjdk-6-demo, openjdk-6-source, visualvm
Conflicts: openjdk-6-jre (<< 6b17~pre3-1), openjdk-6-jre-headless (<< 6b17~pre3-1)
Description: OpenJDK Development Kit (JDK)
 OpenJDK is a development environment for building applications,
 applets, and components using the Java programming language.
 .
 The packages are built using the IcedTea build support and patches
 from the IcedTea project.
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>
Homepage: http://openjdk.java.net/

Package: diffutils
Essential: yes
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 444
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:3.2-1ubuntu1
Replaces: diff
Depends: dpkg (>= 1.15.4) | install-info
Pre-Depends: libc6 (>= 2.14)
Suggests: diffutils-doc, wdiff
Description: File comparison utilities
 The diffutils package provides the diff, diff3, sdiff, and cmp programs.
 .
 'diff' shows differences between two files, or each corresponding file
 in two directories.  'cmp' shows the offsets and line numbers where
 two files differ.  'cmp' can also show all the characters that
 differ between the two files, side by side.  'diff3' shows differences
 among three files.  'sdiff' merges two files interactively.
 .
 The set of differences produced by 'diff' can be used to distribute
 updates to text files (such as program source code) to other people.
 This method is especially useful when the differences are small compared
 to the complete files.  Given 'diff' output, the 'patch' program can
 update, or "patch", a copy of the file.
Homepage: http://www.gnu.org/software/diffutils/
Original-Maintainer: Santiago Vila <sanvila@debian.org>

Package: rhino
Status: install ok installed
Priority: optional
Section: interpreters
Installed-Size: 74
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.7R3-5
Depends: default-jre-headless (>= 1.5) | java5-runtime-headless, libjline-java, librhino-java (= 1.7R3-5)
Suggests: librhino-java-doc
Description: JavaScript engine written in Java
 Rhino is an implementation of the JavaScript language written
 entirely in Java. It is typically embedded into Java applications to
 provide scripting to end users.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.mozilla.org/rhino/

Package: libwww-robotrules-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 76
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.01-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, liburi-perl
Breaks: libwww-perl (<< 6.00)
Description: database of robots.txt-derived permissions
 WWW::RobotRules parses /robots.txt files as specified in "A Standard for
 Robot Exclusion", at <http://www.robotstxt.org/wc/norobots.html>. Webmasters
 can use the /robots.txt file to forbid conforming robots from accessing parts
 of their web site.
 .
 The parsed files are kept in a WWW::RobotRules object, and this object
 provides methods to check if access to a given URL is prohibited. The same
 WWW::RobotRules object can be used for one or more parsed /robots.txt files
 on any number of hosts.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/WWW-RobotRules/

Package: libgtk2.0-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 6168
Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
Architecture: amd64
Source: gtk+2.0
Version: 2.24.10-0ubuntu6
Provides: gtk2.0-binver-2.10.0
Depends: libgtk2.0-common, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.6.4-6.1), libcups2 (>= 1.4.0), libfontconfig1 (>= 2.8.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.31.2), libpango1.0-0 (>= 1.28.3), libx11-6 (>= 2:1.4.99.1), libxcomposite1 (>= 1:0.3-1), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxi6, libxinerama1, libxrandr2 (>= 2:1.2.99.3), libxrender1, shared-mime-info
Pre-Depends: multiarch-support
Recommends: hicolor-icon-theme, libgtk2.0-bin
Suggests: librsvg2-common, gvfs
Breaks: gtk-sharp2 (<< 2.12.10-2ubuntu2), lxdm (<< 0.4.1-0ubuntu6), lxlauncher (<< 0.2.2-1ubuntu2), xfdesktop4 (<< 4.8.3-2ubuntu4)
Description: GTK+ graphical user interface library
 GTK+ is a multi-platform toolkit for creating graphical user
 interfaces. Offering a complete set of widgets, GTK+ is suitable
 for projects ranging from small one-off tools to complete application
 suites.
 .
 This package contains the shared libraries.
Homepage: http://www.gtk.org/
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libxml-commons-external-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 384
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: xml-commons-external
Version: 1.4.01-2
Description: XML Commons external code - DOM, SAX, and JAXP, etc
 xml-commons is focused on common code and guidelines for xml
 projects.  The first focus will be to organize and have common
 packaging for the various externally-defined standards code relating
 to XML - things like the DOM, SAX, and JAXP interfaces.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://xml.apache.org/commons/

Package: libept1.4.12
Status: install ok installed
Priority: important
Section: libs
Installed-Size: 359
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libept
Version: 1.0.6~exp1ubuntu1
Depends: libapt-pkg4.12 (>= 0.8.16~exp12ubuntu3), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.4.0), zlib1g (>= 1:1.1.4)
Description: High-level library for managing Debian package information
 The library defines a very minimal framework in which many sources of data
 about Debian packages can be implemented and queried together.
 .
 The library includes four data sources:
 .
  * APT: access the APT database
  * Debtags: access the Debtags tag information
  * Popcon: access Popcon package scores
  * The Xapian index built by apt-xapian-index
 .
 This is the shared library.
Original-Maintainer: Enrico Zini <enrico@debian.org>

Package: cloudstack-management
Status: install ok installed
Priority: extra
Section: libs
Installed-Size: 114337
Maintainer: Wido den Hollander <wido@widodh.nl>
Architecture: all
Source: cloudstack
Version: 4.1.0-incubating-0.0.snapshot
Depends: cloudstack-common (= 4.1.0-incubating-0.0.snapshot), tomcat6, sysvinit-utils, chkconfig, sudo, jsvc, python-mysqldb, python-paramiko, augeas-tools
Conflicts: cloud-client, cloud-client-ui, cloud-server
Conffiles:
 /etc/cloud/management/applicationContext.xml 401b5599c2f87084432cb133690b66f2
 /etc/cloud/management/components-cloudzones.xml 5d7276de548ac465d00df3f677012e56
 /etc/cloud/management/context.xml 2723eb022b866d737e92e7e07a89f4f0
 /etc/cloud/management/components-nonoss.xml d70c95b609535fc74b1ae90cffefb69d
 /etc/cloud/management/log4j-cloud.xml f17bf68319dfae198273ebbcc5ef97ab
 /etc/cloud/management/commands.properties 026be0a659281ba43b633b497e5a2055
 /etc/cloud/management/web.xml 388989db16290ab5b89531c953f2d829
 /etc/cloud/management/logging.properties ea37fdce9178e9d93334d3a116cfb8ea
 /etc/cloud/management/db.properties 5d0c1efafe5cff9864c7e9bdb4012369
 /etc/cloud/management/classpath.conf b30ce8bfe9b3dbdf50686c1af495391c
 /etc/cloud/management/catalina.properties 36bb9d2a3155f63e4bcff41695638b68
 /etc/cloud/management/environment.properties fa9bf4537ef05c041302a4f190c5c696
 /etc/cloud/management/tomcat6-ssl.conf 1cef004ef7f86ec99fdf92c806176dda
 /etc/cloud/management/tomcat-users.xml fa582cf62e74b959529168fde18eedb1
 /etc/cloud/management/tomcat6-nonssl.conf 880d554d6c043b625841e75ac6da0e35
 /etc/cloud/management/server-nonssl.xml 9cdfaf7ff1e7cde725d7a1353158b027
 /etc/cloud/management/nonossComponentContext.xml 567d7dcce02d981e2311d9945e6bce20
 /etc/cloud/management/ehcache.xml 228ad50d596c6556b575e946b6d863a7
 /etc/cloud/management/catalina.policy f634441921a740d80d5eeae938c1883c
 /etc/cloud/management/db-enc.properties 967df330f1c5d7942752eecbba692820
 /etc/cloud/management/componentContext.xml 748a691985b6e0a939431677aa08f117
 /etc/cloud/management/server.xml a3904124f9176b3ede5a824bab37fa6d
 /etc/cloud/management/cloudmanagementserver.keystore 6ab5fd591d4686310b740bb1b4c75b6a
 /etc/cloud/management/components.xml da319bd467c4136e2f858bf3327a3b98
 /etc/cloud/management/server-ssl.xml b770c8dd22dcb47067a95b4795fbaf82
 /etc/cloud/server/log4j-cloud.xml 5a2502494113faa717c817140e1997fe
 /etc/cloud/server/migration-components.xml 6ca95be9d5ecf97b6d3ce54aa8df9148
 /etc/init.d/cloud-management 07f56c62a8c905edf2c5e111d0cb38a6
Description: CloudStack server library
 The CloudStack management server
Homepage: http://www.cloudstack.org/

Package: libregexp-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 85
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.5-3
Description: Regular expression library for Java
 Regexp is a 100% Pure Java Regular Expression package. Regular expressions
 are pattern descriptions which enable sophisticated matching of strings.
 In addition to being able to match a string against a pattern, you can also
 extract parts of the match. This is especially useful in text parsing!
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jakarta.apache.org/regexp/

Package: linux-libc-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: devel
Installed-Size: 3018
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux
Version: 3.2.0-35.55
Replaces: dvb-dev (<< 1.0.1-6), libc6-dev (<< 2.3.2.ds1-6), libc6.1-dev (<< 2.3.2.ds1-6), libdrm-dev, linux-kernel-headers
Provides: linux-kernel-headers
Conflicts: amd64-libs-dev (<= 1.1), dvb-dev (<< 1.0.1-6), libc6-dev (<< 2.3.2.ds1-6), libc6.1-dev (<< 2.3.2.ds1-6), linux-kernel-headers
Description: Linux Kernel Headers for development
 This package provides headers from the Linux kernel.  These headers
 are used by the installed headers for GNU glibc and other system
 libraries. They are NOT meant to be used to build third-party modules for
 your kernel. Use linux-headers-* packages for that.

Package: libplexus-velocity-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 71
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-velocity
Version: 1.1.7-5
Depends: libcommons-collections-java, libplexus-container-default-java, velocity
Suggests: libplexus-velocity-java-doc
Description: Plexus component interface to velocity
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-components/plexus-velocity/

Package: resolvconf
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 237
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.63ubuntu16
Depends: lsb-base, debconf (>= 0.5) | debconf-2.0, upstart-job
Pre-Depends: initscripts (>= 2.88dsf-13.10)
Breaks: dhcp3-client (<< 4.1.1-P1-15+squeeze1), dnscache-run
Enhances: bind9, dhcpcd, dnsmasq, ifupdown, isc-dhcp-client, libc6, network-manager, nscd, pdnsd, ppp, pump, totd, udhcpc
Conffiles:
 /etc/dhcp/dhclient-enter-hooks.d/resolvconf e33c0fb778b7a0994e3a7e6a83b4034f
 /etc/resolvconf/interface-order 33e6b76aa10b1cbe72c6c050df536560
 /etc/resolvconf/update.d/dnscache 981435dcc6f7b53a9fa7a0bdfbdaf5e0
 /etc/resolvconf/update.d/libc 9d46e648e13f96e1d67f2fec9ec20a58
 /etc/resolvconf/resolv.conf.d/head 5aee5a60350035d958401da5c0432be3
 /etc/resolvconf/resolv.conf.d/base d41d8cd98f00b204e9800998ecf8427e
 /etc/init/resolvconf.conf 355033f68372631d1b72b039347ec3a0
 /etc/network/if-up.d/000resolvconf a2f1e5660e827944e6b8956b6a23eafa
 /etc/network/if-down.d/resolvconf ff6457564bdc53d244529166804a076f
 /etc/ppp/ip-down.d/000resolvconf c964ef1b233f261d7ce1809368372514
 /etc/ppp/ip-up.d/000resolvconf 7e7cebd1b3b28c75933b3f52c85c703d
Description: name server information handler
 Resolvconf is a framework for keeping up to date the system's
 information about name servers. It sets itself up as the intermediary
 between programs that supply this information (such as ifup and
 ifdown, DHCP clients, the PPP daemon and local name servers) and
 programs that use this information (such as DNS caches and resolver
 libraries).
 .
 This package may require some manual configuration. Please
 read the README file for detailed instructions.
Homepage: http://alioth.debian.org/projects/resolvconf/
Original-Maintainer: resolvconf maintainers <resolvconf-devel@lists.alioth.debian.org>

Package: libthai-data
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: libs
Installed-Size: 595
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: libthai
Version: 0.1.16-3
Breaks: libthai0 (<< 0.1.10)
Description: Data files for Thai language support library
 LibThai is a set of Thai language support routines aimed to ease
 developers' tasks to incorporate Thai language support in their applications.
 It includes important Thai-specific functions e.g. word breaking, input and
 output methods as well as basic character and string supports.
 .
 This package contains data files needed by the LibThai library.
Original-Maintainer: Theppitak Karoonboonyanan <thep@debian.org>
Homepage: http://linux.thai.net/projects/libthai

Package: java-wrappers
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 58
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.1.24
Depends: unzip
Description: wrappers for java executables
 Wrapper script facilities for java executables.
 .
 This package can be used by packagers of java programs to
 provide java runtime detection, jar lookup and a consistent
 user interface (debugging, environment variables).
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libosgi-foundation-ee-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 521
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: osgi-foundation-ee
Version: 4.2.0-1
Suggests: libosgi-foundation-ee-java-doc
Description: Java OSGi API - Foundation Execution Environment
 OSGi, for Open Services Gateway initiative framework, is a module system and
 service platform for the Java programming language.
 .
 This package contains OSGi Foundation Execution Environment
 for Release 4 Version 4.2.
 This provide Java interfaces for javax.microedition package (J2ME) and
 java.net/java.lang/java.io/java.util packages (J2SE).
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.osgi.org/Specifications/HomePage

Package: tar
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 720
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.26-4ubuntu1
Replaces: cpio (<< 2.4.2-39)
Pre-Depends: libc6 (>= 2.14)
Suggests: bzip2, ncompress, xz-utils
Breaks: dpkg-dev (<< 1.14.26)
Conflicts: cpio (<= 2.4.2-38)
Conffiles:
 /etc/rmt 3c58b7cd13da1085eff0acc6a00f43c7
Description: GNU version of the tar archiving utility
 Tar is a program for packaging a set of files as a single archive in tar
 format.  The function it performs is conceptually similar to cpio, and to
 things like PKZIP in the DOS world.  It is heavily used by the Debian package
 management system, and is useful for performing system backups and exchanging
 sets of files with others.
Original-Maintainer: Bdale Garbee <bdale@gag.com>

Package: libgettextpo0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: devel
Installed-Size: 348
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gettext
Version: 0.18.1.1-5ubuntu3
Replaces: gettext (<< 0.18.1.1-5ubuntu1)
Depends: libc6 (>= 2.4), libcroco3 (>= 0.6.2), libglib2.0-0 (>= 2.12.0), libgomp1 (>= 4.2.1), libncurses5 (>= 5.5-5~), libtinfo5, libunistring0, libxml2 (>= 2.6.27)
Pre-Depends: multiarch-support
Breaks: gettext (<< 0.18.1.1-5ubuntu1)
Description: GNU Internationalization library
 This package contains the libgettextpo shared library for interfacing
 programmatically with GNU gettext .po files.
Homepage: http://www.gnu.org/software/gettext/
Original-Maintainer: Santiago Vila <sanvila@debian.org>

Package: file
Status: install ok installed
Priority: standard
Section: utils
Installed-Size: 108
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 5.09-2
Depends: libc6 (>= 2.4), libmagic1 (= 5.09-2)
Description: Determines file type using "magic" numbers
 File tests each argument in an attempt to classify it. There are three sets of
 tests, performed in this order: filesystem tests, magic number tests, and
 language tests. The first test that succeeds causes the file type to be
 printed.
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>
Homepage: http://www.darwinsys.com/file/

Package: gcc-4.6
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 15677
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.6.3-1ubuntu5
Provides: c-compiler
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), cpp-4.6 (= 4.6.3-1ubuntu5), binutils (>= 2.21.1), libgcc1 (>= 1:4.6.3-1ubuntu5), libgomp1 (>= 4.6.3-1ubuntu5), libquadmath0 (>= 4.6.3-1ubuntu5), libc6 (>= 2.14), libgmp10, libmpc2, libmpfr4 (>= 3.1.0), zlib1g (>= 1:1.1.4)
Recommends: libc6-dev (>= 2.13-0ubuntu6)
Suggests: gcc-4.6-multilib, libmudflap0-4.6-dev (>= 4.6.3-1ubuntu5), gcc-4.6-doc (>= 4.6.3-1), gcc-4.6-locales (>= 4.6.3-1), libgcc1-dbg, libgomp1-dbg, libquadmath0-dbg, libmudflap0-dbg, binutils-gold (>= 2.21.1)
Description: GNU C compiler
 This is the GNU C compiler, a fairly portable optimizing compiler for C.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: python-gdbm
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 78
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: python-stdlib-extensions
Version: 2.7.3-1ubuntu1
Replaces: python2.3-gdbm, python2.4-gdbm, python2.6 (<< 2.6.1-0ubuntu6)
Provides: python2.7-gdbm
Depends: python (>= 2.7), python (<< 2.8), libc6 (>= 2.4), libgdbm3 (>= 1.8.3)
Suggests: python-gdbm-dbg
Conflicts: python2.3-gdbm, python2.4-gdbm
Description: GNU dbm database support for Python
 GNU dbm database module for Python. Install this if you want to
 create or read GNU dbm database files with Python.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: libclass-isa-perl
Status: install ok installed
Priority: standard
Section: perl
Installed-Size: 55
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.36-3
Description: report the search path for a class's ISA tree
 Suppose you have a class (like Food::Fish::Fishstick) that is derived, via
 its @ISA, from one or more superclasses (as Food::Fish::Fishstick is from
 Food::Fish, Life::Fungus, and Chemicals), and some of those superclasses may
 themselves each be derived, via its @ISA, from one or more superclasses (as
 above).
 .
 When, then, you call a method in that class ($fishstick->calories), Perl
 first searches there for that method, but if it's not there, it goes
 searching in its superclasses, and so on, in a depth-first (or maybe
 "height-first" is the word) search. In the above example, it'd first look in
 Food::Fish, then Food, then Matter, then Life::Fungus, then Life, then
 Chemicals.
 .
 This library, Class::ISA, provides functions that return that list -- the
 list (in order) of names of classes Perl would search to find a method, with
 no duplicates.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Class-ISA/

Package: liburi-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 218
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.59-1
Depends: perl, libmime-base64-perl, libnet-perl
Suggests: libwww-perl
Description: module to manipulate and access URI strings
 URI is a collection of Perl modules that represent and manipulate Uniform
 Resource Identifier (URI) references as specified in RFC 2396.
 .
 URI objects can be used to access and manipulate the various components
 that make up these strings.  There are also methods to combine URIs in
 various ways.
 .
 The URI class replaces the URI::URL class that used to be distributed with
 libwww-perl. This package also includes an emulation of the old URI::URL
 interface, which implements both the old and the new interface.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/URI/

Package: libnet-domain-tld-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 72
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.69-1
Depends: perl
Description: Perl module for retrieving a list of currently available TLDs
 The purpose of Net::Domain::TLD is to provide the user with a current list of
 available top level domain names including new ICANN additions and ccTLDs.
 It provides two functions:
 .
  - tld_exists - returns whether a certain top-level domain exists
  - tld - returns various lists of top-level domains
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Net-Domain-TLD/

Package: libmodello-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 604
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: modello
Version: 1.1-2
Depends: libplexus-build-api-java, libplexus-containers-java (>= 1.0~beta3.0.7)
Recommends: libmaven2-core-java
Suggests: maven2, libmodello-java-doc
Description: a Data Model toolkit in use by the Maven 2 Project
 Once a DataModel is defined, the toolkit can be used to generate any of the
 following at compile time.
 .
    * Java Pojos of the DataModel.
    * Java Pojos to XML Writer. (provided via xpp3, stax, jdom or dom4j)
    * XML to Java Pojos Reader. (provided via xpp3, stax or dom4j)
    * XDOC documentation of the DataModel.
    * XML Schema to validate the DataModel.
 .
 Modello is used to build the maven system.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://modello.codehaus.org

Package: liboro-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 129
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.0.8a-8
Description: Regular expression library for Java
 The Jakarta-ORO Java classes are a set of text-processing Java classes
 that provide Perl5 compatible regular expressions, AWK-like regular
 expressions, glob expressions, and utility classes for performing
 substitutions, splits, filtering filenames, etc.
 ORO is faster and more functional than gnu.regexp.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jakarta.apache.org/oro/

Package: libdrm-radeon1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 103
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libdrm
Version: 2.4.32-1ubuntu1
Depends: libc6 (>= 2.14), libdrm2 (>= 2.4.3)
Pre-Depends: multiarch-support
Description: Userspace interface to radeon-specific kernel DRM services -- runtime
 This library implements the userspace interface to the radeon-specific kernel
 DRM services.  DRM stands for "Direct Rendering Manager", which is the
 kernelspace portion of the "Direct Rendering Infrastructure" (DRI). The DRI is
 currently used on Linux to provide hardware-accelerated OpenGL drivers.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libfont-afm-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 120
Maintainer: Ubuntu MOTU Developers <ubuntu-motu@lists.ubuntu.com>
Architecture: all
Version: 1.20-1
Depends: perl (>= 5.6.0-16)
Description: Font::AFM - Interface to Adobe Font Metrics files
 This module implements the Font::AFM class. Objects of this class are
 initialised from an AFM-file and allows you to obtain information
 about the font and the metrics of the various glyphs in the font.
 .
 All measurements in AFM files are given in terms of units equal to
 1/1000 of the scale factor of the font being used. To compute actual
 sizes in a document, these amounts should be multiplied by (scale
 factor of font)/1000.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Font-AFM/

Package: libhx509-5-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 373
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libasn1-8-heimdal (>= 1.4.0+git20110226), libc6 (>= 2.14), libcomerr2 (>= 1.34), libhcrypto4-heimdal (>= 1.4.0+git20110226), libheimbase1-heimdal (>= 1.6~git20120311), libroken18-heimdal (>= 1.4.0+git20110226), libwind0-heimdal (>= 1.4.0+git20110226)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - X509 support library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: icedtea-6-jre-jamvm
Status: install ok installed
Multi-Arch: same
Priority: extra
Section: java
Installed-Size: 1595
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openjdk-6
Version: 6b24-1.11.5-0ubuntu1~12.04.1
Depends: openjdk-6-jre-headless (= 6b24-1.11.5-0ubuntu1~12.04.1), libc6 (>= 2.14), zlib1g (>= 1:1.1.4)
Description: Alternative JVM for OpenJDK, using JamVM
 The package provides an alternative runtime using the JamVM.  This is a
 somewhat faster alternative than the Zero port on architectures like armel,
 mips, mipsel, powerpc.
 .
 The VM is started with the option '-jamvm'. See the README.Debian for details.
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>
Homepage: http://openjdk.java.net/

Package: libmount1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 248
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: util-linux
Version: 2.20.1-1ubuntu3
Depends: libblkid1 (>= 2.17.2), libc6 (>= 2.14), libselinux1 (>= 1.32)
Pre-Depends: multiarch-support
Description: block device id library
 The device mounting library, used by mount and mount helpers.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libhttp-cookies-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 104
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.00-2
Replaces: libwww-perl (<< 6.00)
Depends: perl, libhttp-date-perl, libhttp-message-perl
Breaks: libwww-perl (<< 6.00)
Description: HTTP cookie jars
 This class is for objects that represent a "cookie jar" -- that is, a
 database of all the HTTP cookies that a given LWP::UserAgent object knows
 about.
 .
 Cookies are a general mechanism which server side connections can use to both
 store and retrieve information on the client side of the connection. For more
 information about cookies refer to
 <URL:http://curl.haxx.se/rfc/cookie_spec.html> and
 <URL:http://www.cookiecentral.com/>. HTTP::Cookies also implements the new
 style cookies described in RFC 2965. The two variants of cookies are supposed
 to be able to coexist happily.
 .
 Instances of the class HTTP::Cookies are able to store a collection of
 Set-Cookie2: and Set-Cookie: headers and are able to use this information to
 initialize Cookie-headers in HTTP::Request objects. The state of a
 HTTP::Cookies object can be saved in and restored from files.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTTP-Cookies/

Package: libatk-wrapper-java-jni
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: java
Installed-Size: 121
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: java-atk-wrapper
Version: 0.30.4-0ubuntu2
Depends: libatk1.0-0 (>= 1.18.0), libc6 (>= 2.4), libglib2.0-0 (>= 2.31.2), libgtk2.0-0 (>= 2.12.0), default-jre | java2-runtime, libatk-wrapper-java (>= 0.30.4-0ubuntu2)
Pre-Depends: multiarch-support
Description: An ATK implementation for Java using JNI (jni bindings)
 Java ATK Wrapper is an implementation of ATK by using JNI. It
 converts Java Swing events into ATK events, and send these events to
 ATK-Bridge.
Homepage: http://ftp.gnome.org/pub/GNOME/sources/java-atk-wrapper/
Original-Maintainer: Debian Accessibility Team <debian-accessibility@lists.debian.org>

Package: libio-socket-inet6-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 71
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.69-2
Depends: perl, libsocket6-perl
Description: object interface for AF_INET6 domain sockets
 IO::Socket::INET6 provides an object interface to create and use sockets
 in the AF_INET6 domain. It is built upon the IO::Socket interface and
 inherits all the methods defined by IO::Socket.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/IO-Socket-INET6/

Package: libxbean-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 944
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.7-4
Recommends: libcommons-logging-java, liblog4j1.2-java, libasm3-java
Suggests: groovy, libspring-core-java, libspring-beans-java, libspring-context-java, libspring-web-java, libqdox-java, libosgi-core-java, libosgi-compendium-java, libslf4j-java
Description: plugin based Java application server
 The goal of XBean project is to created a plugin based server analogous to
 Eclipse being a plugin based IDE. XBean will be able to discover, download and
 install server plugins from an Internet based repository. In addition, it
 include support for multiple IoC systems, support for running with no IoC
 system, JMX without JMX code, lifecycle and class loader management, and a rock
 solid Spring integration.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://geronimo.apache.org/xbean/

Package: netcat-openbsd
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 168
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.89-4ubuntu1
Replaces: netcat (<< 1.10-35)
Provides: netcat
Depends: libc6 (>= 2.7), libglib2.0-0 (>= 2.12.0)
Conflicts: netcat (<< 1.10-35)
Description: TCP/IP swiss army knife
 A simple Unix utility which reads and writes data across network
 connections using TCP or UDP protocol.  It is designed to be a reliable
 "back-end" tool that can be used directly or easily driven by other
 programs and scripts. At the same time it is a feature-rich network
 debugging and exploration tool, since it can create almost any kind of
 connection you would need and has several interesting built-in
 capabilities.
 .
 This package contains the OpenBSD rewrite of netcat, including support
 for IPv6, proxies, and Unix sockets.
Original-Maintainer: Decklin Foster <decklin@red-bean.com>

Package: libfribidi0
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 196
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: fribidi
Version: 0.19.2-1
Depends: libc6 (>= 2.4)
Description: Free Implementation of the Unicode BiDi algorithm
 FriBiDi is a BiDi algorithm implementation for Hebrew and/or Arabic
 languages.
 This package contains the shared libraries.
Original-Maintainer: Debian Hebrew Packaging Team <debian-hebrew-package@lists.alioth.debian.org>
Homepage: http://www.fribidi.org/

Package: libjtidy-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 312
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jtidy
Version: 7+svn20110807-3
Recommends: ant
Suggests: libjtidy-java-doc
Description: JTidy
 JTidy is a Java port of HTML Tidy, a HTML syntax checker and pretty printer.
 Like its non-Java cousin, JTidy can be used as a tool for cleaning up malformed
 and faulty HTML. In addition, JTidy provides a DOM interface to the document
 that is being processed, which effectively makes you able to use JTidy
 as a DOM parser for real-world HTML.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jtidy.sourceforge.net/

Package: zlib1g
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 156
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: zlib
Version: 1:1.2.3.4.dfsg-3ubuntu4
Provides: libz1
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Conflicts: zlib1 (<= 1:1.0.4-7)
Description: compression library - runtime
 zlib is a library implementing the deflate compression method found
 in gzip and PKZIP.  This package includes the shared library.
Homepage: http://zlib.net/
Original-Maintainer: Mark Brown <broonie@debian.org>

Package: libroken18-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 157
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libc6 (>= 2.15)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - roken support library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
 .
 This package contains the library for roken support.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: libapt-pkg-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 250
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.1.25build2
Depends: perl-base (>= 5.14.2-6ubuntu1), perlapi-5.14.2, libapt-pkg4.12 (>= 0.8.0), libc6 (>= 2.2.5), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.1.1)
Description: Perl interface to libapt-pkg
 A Perl interface to APT's libapt-pkg which provides modules for configuration
 file/command line parsing, version comparison, inspection of the binary
 package cache and source package details.
Original-Maintainer: Brendan O'Dea <bod@debian.org>

Package: libmailtools-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 320
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.08-1
Replaces: mailtools (<= 1.15-1)
Provides: libmail-perl, mailtools
Depends: perl, libnet-perl, libtimedate-perl
Conflicts: mailtools (<= 1.15-1)
Description: Manipulate email in perl programs
 This is a set of perl modules which provide an easy interface to
 manipulating email in an object-oriented fashion.
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://search.cpan.org/dist/MailTools/

Package: libxrandr2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 108
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxrandr
Version: 2:1.3.2-2
Depends: libc6 (>= 2.2.5), libx11-6, libxext6, libxrender1
Pre-Depends: multiarch-support
Description: X11 RandR extension library
 libXrandr provides an X Window System client interface to the RandR
 extension to the X protocol.
 .
 The RandR extension allows for run-time configuration of display attributes
 such as resolution, rotation, and reflection.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXrandr
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: os-prober
Status: install ok installed
Priority: extra
Section: utils
Installed-Size: 130
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.51ubuntu3
Depends: libc6 (>= 2.4)
Description: utility to detect other OSes on a set of drives
 This package detects other OSes available on a system and outputs the
 results in a generic machine-readable format.
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: libapt-inst1.4
Status: install ok installed
Multi-Arch: same
Priority: important
Section: admin
Installed-Size: 821
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: apt
Version: 0.8.16~exp12ubuntu10.7
Depends: libapt-pkg4.12 (>= 0.8.16~exp12ubuntu10.7), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.4.0)
Pre-Depends: multiarch-support
Description: deb package format runtime library
 This library provides methods to query and extract information
 from deb packages. This includes the control data and the package
 file content.
Original-Maintainer: APT Development Team <deity@lists.debian.org>

Package: python-lazr.uri
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 125
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: lazr.uri
Version: 1.0.3-1
Depends: python-pkg-resources, python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Description: library for parsing, manipulating, and generating URIs
 A self-contained, easily reusable, Python library for parsing,
 manipulating and generating URIs. With it you can extract parts
 of a URL, compare URIs to see if one contains another, search for
 URIs in text, and many other things.
 .
 This package contains the library for Python 2.x.
Original-Maintainer: Stefano Rivera <stefanor@debian.org>
Homepage: https://launchpad.net/lazr.uri

Package: python-newt
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 144
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: newt
Version: 0.52.11-2ubuntu10
Provides: python2.7-newt
Depends: libnewt0.52 (= 0.52.11-2ubuntu10), python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.4)
Description: A NEWT module for Python
 This module allows you to built a text UI for your Python scripts
 using newt.
Homepage: https://fedorahosted.org/newt/
Original-Maintainer: Alastair McKinstry <mckinstry@debian.org>

Package: adduser
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 568
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.113ubuntu2
Replaces: manpages-it (<< 0.3.4-2), manpages-pl (<= 20051117-1)
Depends: perl-base (>= 5.6.0), passwd (>= 1:4.0.12), debconf | debconf-2.0
Recommends: ecryptfs-utils (>= 67-1)
Suggests: liblocale-gettext-perl, perl-modules
Conffiles:
 /etc/deluser.conf 773fb95e98a27947de4a95abb3d3f2a2
Description: add and remove users and groups
 This package includes the 'adduser' and 'deluser' commands for creating
 and removing users.
 .
  - 'adduser' creates new users and groups and adds existing users to
    existing groups;
  - 'deluser' removes users and groups and removes users from a given
    group.
 .
 Adding users with 'adduser' is much easier than adding them manually.
 Adduser will choose appropriate UID and GID values, create a home
 directory, copy skeletal user configuration, and automate setting
 initial values for the user's password, real name and so on.
 .
 Deluser can back up and remove users' home directories
 and mail spool or all the files they own on the system.
 .
 A custom script can be executed after each of the commands.
 .
  Development mailing list:
    http://lists.alioth.debian.org/mailman/listinfo/adduser-devel/
Homepage: http://alioth.debian.org/projects/adduser/
Original-Maintainer: Debian Adduser Developers <adduser-devel@lists.alioth.debian.org>

Package: libxcb1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 175
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxcb
Version: 1.8.1-1ubuntu0.1
Depends: libc6 (>= 2.14), libxau6, libxdmcp6
Pre-Depends: multiarch-support
Breaks: libxcb-xlib0
Description: X C Binding
 This package contains the library files needed to run software using libxcb,
 the X C Binding.
 .
 The XCB library provides an interface to the X Window System protocol,
 designed to replace the Xlib interface.  XCB provides several advantages over
 Xlib:
 .
  * Size: small library and lower memory footprint
  * Latency hiding: batch several requests and wait for the replies later
  * Direct protocol access: one-to-one mapping between interface and protocol
  * Thread support: access XCB from multiple threads, with no explicit locking
  * Easy creation of new extensions: automatically generates interface from
    machine-parsable protocol descriptions
Homepage: http://xcb.freedesktop.org
Original-Maintainer: XCB Developers <xcb@lists.freedesktop.org>

Package: python-support
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 155
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.0.14ubuntu2
Depends: python (>= 2.5), python-minimal, dpkg (>= 1.14.19)
Conflicts: debhelper (<< 5.0.38)
Description: automated rebuilding support for Python modules
 This package contains the 'update-python-modules' script, which takes
 care of byte-compilation of Python-only modules.
 .
 Private modules are automatically rebuilt upon major Python upgrades,
 avoiding the need for strong dependencies.
 .
 Public modules are automatically made available for all installed
 Python versions.
Original-Maintainer: Josselin Mouette <joss@debian.org>

Package: liblwp-mediatypes-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 92
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.01-1
Replaces: libwww-perl (<< 6.00)
Depends: perl
Breaks: libwww-perl (<< 6.00)
Description: module to guess media type for a file or a URL
 LWP::MediaTypes provides functions for handling media (also known as MIME)
 types and encodings. The mapping from file extensions to media types is
 defined by the media.types file. If the ~/.media.types file exists it is used
 instead. For backwards compatibility it will also look for ~/.mime.types.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/LWP-MediaTypes/

Package: locales
Status: install ok installed
Priority: required
Section: libs
Installed-Size: 9152
Maintainer: Martin Pitt <martin.pitt@ubuntu.com>
Architecture: all
Source: langpack-locales
Version: 2.13+git20120306-3
Replaces: base-config, belocs-locale-data, belocs-locales-bin, libc6 (<< 2.3.6-0ubuntu6), libc6.1 (<< 2.3.6-0ubuntu6)
Depends: libc6 (>= 2.9-0ubuntu10) | libc6.1 (>= 2.9-0ubuntu10)
Conflicts: base-config, belocs-locale-data
Conffiles:
 /etc/locale.alias 6ac3cbee43012440edc6bcbade0a61ce
Description: common files for locale support
 This package provides support for localized environments (locales).
 It installs character and transliteration maps, provides the POSIX
 locale definition and provides common scripts for language pack
 handling.
 .
 The actual locale definitions are not part of this package, these are
 shipped in the language packs and are installed and removed
 automatically.

Package: html2text
Status: install ok installed
Priority: optional
Section: web
Installed-Size: 304
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.3.2a-15
Depends: libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.4.0)
Suggests: curl | wget
Description: advanced HTML to text converter
 html2text is a converter from HTML to plain text.
 .
 html2text reads HTML documents supplied in the command line (or from standard
 input), converts each of them into a stream of plain text characters and
 writes output to the file or the terminal.
 .
 Debian version also can recognize encoding of documents, do on-fly
 input and output recoding.
 .
 html2text was written because the author wasn't happy with the
 output of "lynx -dump" and so he wrote something better.
Original-Maintainer: Eugene V. Lyubimkin <jackyf@debian.org>
Homepage: http://www.mbayer.de/html2text/

Package: update-manager-core
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 1196
Maintainer: Michael Vogt <michael.vogt@ubuntu.com>
Architecture: amd64
Source: update-manager
Version: 1:0.156.14.11
Replaces: update-manager (<< 1:0.146.2)
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-apt (>= 0.7.13.4ubuntu3), lsb-release, python-gnupginterface
Recommends: libpam-modules (>= 1.0.1-9ubuntu3)
Breaks: computer-janitor (<= 1.11-0ubuntu1), update-manager (<< 1:0.146.2)
Conffiles:
 /etc/update-manager/release-upgrades df41b4619e6054b4558a75e316923611
 /etc/update-manager/meta-release 834e015e99673a6e3b0f31f6a511355f
 /etc/update-motd.d/91-release-upgrade 0cb02a9dc8e19ae2fd053988061de57c
Description: manage release upgrades
 This is the core of update-manager and the release upgrader

Package: python-dbus-dev
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 62
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: dbus-python
Version: 1.0.0-1ubuntu1
Replaces: python-dbus (<< 1.0), python-dbus-common (<< 1.0)
Breaks: python-dbus (<< 1.0), python-dbus-common (<< 1.0)
Description: main loop integration development files for python-dbus
 D-Bus is a message bus, used for sending messages between applications.
 Conceptually, it fits somewhere in between raw sockets and CORBA in
 terms of complexity.
 .
 This package provides development files required to compile main-loop
 integration modules for python-dbus, such as dbus.mainloop.qt provided
 by PyQt. It is Python-version-independent: you must also depend on either
 python-dbus or python3-dbus, if required.
Homepage: http://www.freedesktop.org/wiki/Software/DBusBindings#Python
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: libcommons-codec-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 164
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.5-1
Description: encoder and decoders such as Base64 and hexadecimal codec
 The codec package contains simple encoder and decoders for various
 formats such as Base64 and Hexadecimal.  In addition to these widely
 used encoders and decoders, the codec package also maintains a
 collection of phonetic encoding utilities.
 .
 This is a part of the Apache Commons Project.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/codec/

Package: libservlet2.4-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 198
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 5.5.33-1
Description: Servlet 2.4 and JSP 2.0 Java library
 Apache Tomcat implements the Java Servlet and the JavaServer Pages (JSP)
 specifications from Sun Microsystems, and provides a "pure Java" HTTP web
 server environment for Java code to run. Tomcat 5.5 is the reference
 implementation for the Java Servlet 2.4 and JavaServer Pages 2.0 technologies.
 .
 The official Servlet 2.4 and JSP 2.0 specifications can be found at
 http://java.sun.com/products/servlet/ and http://java.sun.com/products/jsp/.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jakarta.apache.org/tomcat/index.html

Package: python2.7
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 8783
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.7.3-0ubuntu3.1
Replaces: python-profiler (<= 2.7.1-2)
Provides: python-argparse, python2.7-argparse, python2.7-celementtree, python2.7-cjkcodecs, python2.7-ctypes, python2.7-elementtree, python2.7-profiler, python2.7-wsgiref
Depends: python2.7-minimal (= 2.7.3-0ubuntu3.1), mime-support, libbz2-1.0, libc6 (>= 2.15), libdb5.1, libexpat1 (>= 1.95.8), libgcc1 (>= 1:4.1.1), libncursesw5 (>= 5.6+20070908), libreadline6 (>= 6.0), libsqlite3-0 (>= 3.5.9), libtinfo5
Suggests: python2.7-doc, binutils
Conflicts: python-profiler (<= 2.7.1-2)
Description: Interactive high-level object-oriented language (version 2.7)
 Version 2.7 of the high-level, interactive object oriented language,
 includes an extensive class library with lots of goodies for
 network programming, system administration, sounds and graphics.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: manpages
Status: install ok installed
Priority: important
Section: doc
Installed-Size: 821
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.35-0.1ubuntu1
Replaces: bind, rsh-server (<< 0.10-7)
Suggests: man-browser
Description: Manual pages about using a GNU/Linux system
 This package contains GNU/Linux manual pages for these sections:
  4 = Devices (e.g. hd, sd).
  5 = File formats and protocols, syntaxes of several system
      files (e.g. wtmp, /etc/passwd, nfs).
  7 = Conventions and standards, macro packages, etc.
      (e.g. nroff, ascii).
 .
 Sections 1, 6 and 8 are provided by the respective applications. This
 package only includes the intro man page describing the section.
 .
 The man pages describe syntaxes of several system files.
Homepage: http://www.kernel.org/doc/man-pages/
Original-Maintainer: Martin Schulze <joey@debian.org>

Package: ed
Status: install ok installed
Priority: optional
Section: editors
Installed-Size: 127
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.5-3
Depends: libc6 (>= 2.11), dpkg (>= 1.15.4) | install-info
Description: classic UNIX line editor
 ed is a line-oriented text editor.  It is used to
 create, display, modify and otherwise manipulate text
 files.
 .
 red is a restricted ed: it can only edit files in the
 current directory and cannot execute shell commands.
Original-Maintainer: Martin Zobel-Helas <zobel@debian.org>
Homepage: http://www.gnu.org/software/ed/

Package: tasksel
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 240
Maintainer: Ubuntu Installer Team <ubuntu-installer@lists.ubuntu.com>
Architecture: all
Version: 2.88ubuntu9
Depends: debconf (>= 0.5) | debconf-2.0, liblocale-gettext-perl, apt (>= 0.6.45ubuntu14), aptitude (>= 0.2.15-1), tasksel-data
Pre-Depends: debconf (>= 1.5.34) | cdebconf (>= 0.106)
Conflicts: base-config (<< 2.32), debconf (<< 1.4.27)
Description: Tool for selecting tasks for installation on Debian systems
 This package provides 'tasksel', a simple interface for users who
 want to configure their system to perform a specific task.
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: libsm-dev
Status: install ok installed
Priority: optional
Section: libdevel
Installed-Size: 385
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libsm
Version: 2:1.2.0-2build1
Depends: libsm6 (= 2:1.2.0-2build1), x11proto-core-dev, libice-dev (>= 1:1.0.0-1)
Description: X11 Session Management library (development headers)
 This package provides the main interface to the X11 Session Management
 library, which allows for applications to both manage sessions, and make use
 of session managers to save and restore their state for later use.
 .
 This package contains the development headers for the library found in libsm6.
 Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libSM
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libmaven2-core-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1215
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: maven2-core
Version: 2.2.1-8
Depends: libcommons-cli-java (>= 1.1), libslf4j-java (>= 1.5.6), libdoxia-java (>= 1.1), libmodello-java (>= 1.0.1), libplexus-container-default-java, libplexus-archiver-java, libplexus-sec-dispatcher-java (>= 1.3), libplexus-ant-factory-java, libplexus-bsh-factory-java, libclassworlds-java (>= 1.1), libplexus-interactivity-api-java (>= 1.0-alpha-6), libplexus-interpolation-java (>= 1.11), libplexus-utils-java (>= 1:1.5.15), libwagon-java, libbackport-util-concurrent-java (>= 3.1)
Description: Core libraries for Maven2
 Maven is a software project management and comprehension tool. Based on the
 concept of a project object model (POM), Maven can manage a project's build,
 reporting and documentation from a central piece of information.
 .
 Maven's primary goal is to allow a developer to comprehend the complete
 state of a development effort in the shortest period of time. In order to
 attain this goal there are several areas of concern that Maven attempts
 to deal with:
 .
    * Making the build process easy
    * Providing a uniform build system
    * Providing quality project information
    * Providing guidelines for best practices development
    * Allowing transparent migration to new features
 .
 This package contains the core libraries for maven2.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://maven.apache.org/

Package: pppconfig
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 224
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.3.18+nmu3ubuntu1
Replaces: manpages-fr (<< 2.39.1-5)
Depends: ppp (>= 2.3.7), whiptail | dialog, lsb-base (>= 1.3-9ubuntu3)
Suggests: resolvconf
Conflicts: nscd (<< 2.3.2.ds1-14)
Conffiles:
 /etc/ppp/ip-up.d/0dns-up db9320c5af03d0303ed491b35421ed10
 /etc/ppp/ip-down.d/0dns-down e49ea004dd5fa761ca89fcb452d2854f
 /etc/init.d/dns-clean fef5582ed787466dd43bc1b1bec4ced7
Description: A text menu based utility for configuring ppp
 It provides extensive explanations at each step.  pppconfig supports
 PAP, CHAP, and chat methods of authentication.  It uses the standard
 ppp configuration files and sets ppp up so that the standard pon and
 poff commands can be used to control ppp.
 Some features supported by pppconfig are:
  - Multiple ISPs with separate nameservers.
  - Modem detection.
  - Dynamic DNS.
  - Dial on demand.
Original-Maintainer: John Hasler <jhasler@debian.org>

Package: libgcc1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 119
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6 (4.6.3-1ubuntu5)
Version: 1:4.6.3-1ubuntu5
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), libc6 (>= 2.14)
Pre-Depends: multiarch-support
Breaks: gcc-4.1, gcc-4.3 (<< 4.3.6-1), gcc-4.4 (<< 4.4.6-4), gcc-4.5 (<< 4.5.3-2)
Description: GCC support library
 Shared version of the support library, a library of internal subroutines
 that GCC uses to overcome shortcomings of particular machines, or
 special needs for some languages.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libxcomposite1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 55
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxcomposite
Version: 1:0.4.3-2build1
Depends: libc6 (>= 2.2.5), libx11-6 (>= 2:1.4.99.1)
Pre-Depends: multiarch-support
Description: X11 Composite extension library
 libXcomposite provides an X Window System client interface to the Composite
 extension to the X protocol.
 .
 The Composite extension allows clients called compositing managers to control
 the final drawing of the screen.  Rendering is done into an off-screen buffer.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXcomposite
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libxpp2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 694
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.1.10-7
Description: XML pull parser library for java V2
 Xml Pull Parser (in short XPP) is a streaming pull XML parser for java.
 This version XPP2 is the predecessor of XPP3 (see package libxpp3-java).
 .
 XPP2 consists of two parts: generic API and its implementations. This
 Debian version only provides the default implementation optimized for
 size and speed and is not exposing DTD, entities, comments, or processing
 instructions to the user.
 .
 If you need a xml pull parser implementing the XmlPull API you want to
 have a look at the libxpp3-java package.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.extreme.indiana.edu/xgws/xsoap/xpp/xpp2/

Package: libice-dev
Status: install ok installed
Priority: optional
Section: libdevel
Installed-Size: 536
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libice
Version: 2:1.0.7-2build1
Depends: libice6 (= 2:1.0.7-2build1), x11proto-core-dev
Description: X11 Inter-Client Exchange library (development headers)
 This package provides the main interface to the X11 Inter-Client Exchange
 library, which allows for communication of data between X clients.
 .
 This package contains the development headers for the library found in libice6.
 Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libICE
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libcommons-httpclient-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 404
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-httpclient
Version: 3.1-10
Depends: libcommons-logging-java, libcommons-codec-java
Suggests: libcommons-httpclient-java-doc
Description: A Java(TM) library for creating HTTP clients
 The Jakarta Commons HTTPClient library provides an efficient,
 up-to-date, and feature-rich package implementing the client side of
 the most recent HTTP standards and recommendations.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://hc.apache.org/httpclient-3.x

Package: libsys-hostname-long-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 84
Maintainer: Ubuntu MOTU Developers <ubuntu-motu@lists.ubuntu.com>
Architecture: all
Version: 1.4-2
Depends: perl (>= 5.6.0-16)
Description: Figure out the long (fully-qualified) hostname
 This module determines the host full name on multiple operating
 systems (MacOS, Windows, Unix-like systems; more later.)
 .
 The Sys::Hostname class is the best and standard way to get the basic
 hostname, but that may not be fully qualified.  This module tries to
 determine the host's fully qualified name.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Sys-Hostname-Long/

Package: libklibc
Status: install ok installed
Priority: required
Section: libs
Installed-Size: 127
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: klibc
Version: 1.5.25-1ubuntu2
Description: minimal libc subset for use with initramfs
 klibc is intended to be a minimalistic libc subset for use with
 initramfs.  It is deliberately written for small size, minimal
 entanglement, and portability, not speed.  It is definitely a work in
 progress, and a lot of things are still missing.
Original-Maintainer: maximilian attems <maks@debian.org>

Package: junit
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 195
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.8.2-8
Recommends: default-jre (>= 1.4) | default-jre-headless (>= 1.4) | java2-runtime | java2-runtime-headless
Suggests: junit-doc
Enhances: ant-optional
Description: Automated testing framework for Java
 JUnit is a simple framework for writing and running automated tests.
 As a political gesture, it celebrates programmers testing their own
 software.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.junit.org

Package: xz-lzma
Status: install ok installed
Priority: extra
Section: utils
Installed-Size: 163
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: xz-utils
Version: 5.1.1alpha+20110809-3
Replaces: lzip (<< 1.8~rc2)
Provides: lzma
Depends: xz-utils
Breaks: lzip (<< 1.8~rc2)
Conflicts: lzma
Description: XZ-format compression utilities - compatibility commands
 XZ is the successor to the Lempel-Ziv/Markov-chain Algorithm
 compression format, which provides memory-hungry but powerful
 compression (often better than bzip2) and fast, easy decompression.
 .
 This package provides symbolic links allowing xz-utils to provide the
 same interface for manipulating LZMA files as the lzma package. The
 xz-utils package can handle LZMA files on its own; this package is
 only necessary when using scripts or other programs that require the
 older command names.
Original-Maintainer: Jonathan Nieder <jrnieder@gmail.com>
Homepage: http://tukaani.org/xz/

Package: libhcrypto4-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 284
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libasn1-8-heimdal (>= 1.4.0+git20110226), libc6 (>= 2.14), libroken18-heimdal (>= 1.4.0+git20110226)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - crypto library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
 .
 This package contains the cryptographic library required for Heimdal.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: curl
Status: install ok installed
Priority: optional
Section: web
Installed-Size: 343
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 7.22.0-3ubuntu4
Replaces: curl-ssl
Provides: curl-ssl
Depends: libc6 (>= 2.14), libcurl3 (>= 7.16.2-1), zlib1g (>= 1:1.1.4)
Description: Get a file from an HTTP, HTTPS or FTP server
 curl is a client to get files from servers using any of the supported
 protocols. The command is designed to work without user interaction
 or any kind of interactivity.
 .
 curl offers a busload of useful tricks like proxy support, user
 authentication, FTP upload, HTTP post, file transfer resume and more.
Homepage: http://curl.haxx.se
Original-Maintainer: Ramakrishnan Muthukrishnan <rkrishnan@debian.org>

Package: libcommons-vfs-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 502
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-vfs
Version: 2.0-1ubuntu1
Depends: libcommons-logging-java
Recommends: ant, libcommons-collections3-java, libcommons-httpclient-java, libcommons-net2-java, libjsch-java
Suggests: libcommons-vfs-java-doc
Description: Java API for accessing various filesystems
 Commons VFS provides a single API for accessing various different file
 systems. It presents a uniform view of the files from various different
 sources, such as the files on local disk, on an HTTP server, or inside
 a Zip archive.
 .
 This is a part of the Apache Commons Project.
Homepage: http://commons.apache.org/vfs/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libgirepository-1.0-1
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 252
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gobject-introspection
Version: 1.32.0-1
Replaces: libgirepository1.0-1
Provides: libgirepository1.0-1
Depends: libc6 (>= 2.14), libffi6 (>= 3.0.4), libglib2.0-0 (>= 2.31.8)
Conflicts: libgirepository1.0-1
Description: Library for handling GObject introspection data (runtime library)
 GObject Introspection is a project for providing machine readable
 introspection data of the API of C libraries. This introspection
 data can be used in several different use cases, for example
 automatic code generation for bindings, API verification and documentation
 generation.
 .
 GObject Introspection contains tools to generate and handle the
 introspection data.
 .
 This package contains a C library for handling the introspection data.
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
Homepage: http://live.gnome.org/GObjectIntrospection

Package: libasound2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 1356
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: alsa-lib
Version: 1.0.25-1ubuntu10.1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support, dpkg (>= 1.15.7.2)
Suggests: libasound2-plugins (>= 1.0.18), libasound2-python
Breaks: bluez-alsa (<= 4.94-2), libasound2-plugin-equal (<= 0.6-1), libasound2-plugins (<< 1.0.24)
Description: shared library for ALSA applications
 This package contains the ALSA library and its standard plugins, as well
 as the required configuration files.
 .
 ALSA is the Advanced Linux Sound Architecture.
Homepage: http://www.alsa-project.org/
Original-Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>

Package: base-files
Essential: yes
Status: install ok installed
Priority: required
Section: admin
Installed-Size: 419
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 6.5ubuntu6.4
Replaces: base, dpkg (<= 1.15.0), lsb-release (<< 3.0-8), miscutils
Provides: base
Pre-Depends: awk
Breaks: initscripts (<< 2.88dsf-13.3)
Conffiles:
 /etc/debian_version 931870fda5e3f942afc004db670b3cae
 /etc/dpkg/origins/debian 731423fa8ba067262f8ef37882d1e742
 /etc/dpkg/origins/ubuntu ea35901c45553c3451f60476be94d2d8
 /etc/host.conf 89408008f2585c957c031716600d5a80
 /etc/issue 5213fbddfa79f1443d0f1419d2dfdd2e
 /etc/issue.net 5689c23b919d3d82209eaafa465066aa
 /etc/lsb-release 37023395a1273affd4cea893eb4768b1
 /etc/os-release 4753a44a35d6394c737f205510d42d50
 /etc/update-motd.d/00-header 4a1e6eed7a59f200b4267085721750a3
 /etc/update-motd.d/10-help-text 5064fb57493325202dded183ab0c4ebd
 /etc/update-motd.d/99-footer b0541f3c2e55c44149cd92bcc599c94c
Description: Debian base system miscellaneous files
 This package contains the basic filesystem hierarchy of a Debian system, and
 several important miscellaneous files, such as /etc/debian_version,
 /etc/host.conf, /etc/issue, /etc/motd, /etc/profile, /etc/nsswitch.conf,
 and others, and the text of several common licenses in use on Debian systems.
Original-Maintainer: Santiago Vila <sanvila@debian.org>

Package: mount
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 422
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: util-linux
Version: 2.20.1-1ubuntu3
Pre-Depends: libblkid1 (>= 2.20.1), libc6 (>= 2.14), libmount1 (>= 2.20.1), libselinux1 (>= 2.0.15)
Suggests: nfs-common (>= 1:1.1.0-13)
Description: Tools for mounting and manipulating filesystems
 This package provides the mount(8), umount(8), swapon(8),
 swapoff(8), and losetup(8) commands.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libhtml-form-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.00-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, liburi-perl, libhtml-parser-perl, libhttp-message-perl
Breaks: libwww-perl (<< 6.00)
Description: module that represents an HTML form element
 Objects of the HTML::Form class represents a single HTML <form> ... </form>
 instance. A form consists of a sequence of inputs that usually have names,
 and which can take on various values. The state of a form can be tweaked and
 it can then be asked to provide HTTP::Request objects that can be passed to
 the request() method of LWP::UserAgent.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTML-Form/

Package: libsqlite3-0
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 770
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: sqlite3
Version: 3.7.9-2ubuntu1.1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: SQLite 3 shared library
 SQLite is a C library that implements an SQL database engine.
 Programs that link with the SQLite library can have SQL database
 access without running a separate RDBMS process.
Original-Maintainer: Laszlo Boszormenyi (GCS) <gcs@debian.hu>

Package: libtext-iconv-perl
Status: install ok installed
Priority: required
Section: perl
Installed-Size: 85
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.7-5
Depends: libc6 (>= 2.2.5), perl-base (>= 5.14.2-6), perlapi-5.14.2
Description: converts between character sets in Perl
 The iconv() family of functions from XPG4 defines an API for converting
 between character sets (e.g. UTF-8 to Latin1, EBCDIC to ASCII). They
 are provided by libc6.
 .
 This package allows access to them from Perl via the Text::Iconv
 package.
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://search.cpan.org/search?module=Text::Iconv

Package: libcups2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 473
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: cups
Version: 1.5.3-0ubuntu6
Replaces: libcupsys2
Provides: libcupsys2
Depends: libavahi-client3 (>= 0.6.16), libavahi-common3 (>= 0.6.16), libc6 (>= 2.14), libgnutls26 (>= 2.12.6.1-0), libgssapi-krb5-2 (>= 1.10+dfsg~), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Suggests: cups-common
Breaks: cups (<< 1.5.0)
Conflicts: libcupsys2
Description: Common UNIX Printing System(tm) - Core library
 The Common UNIX Printing System (or CUPS(tm)) is a printing system and
 general replacement for lpd and the like.  It supports the Internet
 Printing Protocol (IPP), and has its own filtering driver model for
 handling various document types.
 .
 This package provides the base shared libraries for CUPS.
Homepage: http://www.cups.org
Original-Maintainer: Debian CUPS Maintainers <pkg-cups-devel@lists.alioth.debian.org>

Package: console-setup
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 1522
Maintainer: Ubuntu Installer Team <ubuntu-installer@lists.ubuntu.com>
Architecture: all
Version: 1.70ubuntu5
Replaces: console-terminus
Provides: console-terminus
Depends: debconf (>= 1.5.34), xkb-data (>= 0.9), keyboard-configuration, initramfs-tools (>= 0.85eubuntu12), kbd (>= 1.15-1ubuntu3), upstart-job
Suggests: lsb-base (>= 3.0-6), locales
Conflicts: console-terminus, lsb (<< 2.0-6), lsb-base (<< 3.0-6), lsb-core (<< 2.0-6)
Conffiles:
 /etc/console-setup/compose.ARMSCII-8.inc fef36b61fb8b1cacc151ad3db127f777
 /etc/console-setup/compose.CP1251.inc fef88d8c8dd4c726498003fd3cd84a7f
 /etc/console-setup/compose.CP1255.inc c972a2e90938657e97b643366b98b2ed
 /etc/console-setup/compose.CP1256.inc 5ea5e4d41da7a88f742863810e86144b
 /etc/console-setup/compose.GEORGIAN-ACADEMY.inc b6d80f40abff7e8af236796ebaca0247
 /etc/console-setup/compose.GEORGIAN-PS.inc cf45272b6bf35a22223b132600dc36c3
 /etc/console-setup/compose.IBM1133.inc a31102602f7e7cab9738022b6c5469ae
 /etc/console-setup/compose.ISIRI-3342.inc 5ada7fbba750192f11fa238add232ba9
 /etc/console-setup/compose.ISO-8859-1.inc 719a4300a50dcb168d7de921bab338e9
 /etc/console-setup/compose.ISO-8859-10.inc e5fce59617c839b56574c9e323d34686
 /etc/console-setup/compose.ISO-8859-11.inc ad2f3cc7ee64602a790bad8a2a989243
 /etc/console-setup/compose.ISO-8859-13.inc 9c2f47a52091515749fefc62fc8efd63
 /etc/console-setup/compose.ISO-8859-14.inc a19822b59629ea7af7682d9247de807f
 /etc/console-setup/compose.ISO-8859-15.inc cfa9b04fec26afa1debc17ce09d46a0a
 /etc/console-setup/compose.ISO-8859-16.inc 8245c19b5262d8d23ca856587739eb20
 /etc/console-setup/compose.ISO-8859-2.inc a56cb83dbe0cd88e4deef52d966d30e4
 /etc/console-setup/compose.ISO-8859-3.inc e70d7b634791b9c97db75bddf6dcc5fa
 /etc/console-setup/compose.ISO-8859-4.inc 4092be9556db0ac82e96eae413f1bd47
 /etc/console-setup/compose.ISO-8859-5.inc f861a4b0403490677e6d400f2d7129da
 /etc/console-setup/compose.ISO-8859-6.inc 41ea36ea1c1a1c0c9bebdf0016395e1f
 /etc/console-setup/compose.ISO-8859-7.inc aa280de25f20e82f58da707101b24d48
 /etc/console-setup/compose.ISO-8859-8.inc 9cceaa9f3312f89aba371d3c893f4e7b
 /etc/console-setup/compose.ISO-8859-9.inc 1893bc3994c24917c907a17ceb2f284b
 /etc/console-setup/compose.KOI8-R.inc 8cfd7766b86e5e55d6e71d0d95519c92
 /etc/console-setup/compose.KOI8-U.inc 217ee62f6982736276f41f760f8622f8
 /etc/console-setup/compose.TIS-620.inc 31b73af83ef3993c128e2b983b9eaf89
 /etc/console-setup/compose.VISCII.inc 0741db54ddb6268e476010a44f219f03
 /etc/console-setup/remap.inc 775b76c6c04cd18f8c72563e413a36aa
 /etc/console-setup/vtrgb 1fb3c13c4fcfa8cc4131aba905df559e
 /etc/console-setup/vtrgb.vga 302837772c14006c7956211e184acfbd
 /etc/init/setvtrgb.conf 30d3102a4587dd863a76df30f35450a7
Description: console font and keymap setup program
 This package provides the Linux console with the same
 keyboard configuration scheme as the X Window System. As a result,
 there is no need to duplicate or change the keyboard files just to
 make simple customizations such as the use of dead keys, the key
 functioning as AltGr or Compose key, the key(s) to switch between
 Latin and non-Latin mode, etc.
 .
 The package also contains console fonts supporting many of the
 world's languages.  It provides an unified set of font faces - the
 classic VGA, the simplistic Fixed, and the cleaned Terminus,
 TerminusBold and TerminusBoldVGA.
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: mysql-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: database
Installed-Size: 128
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: mysql-5.5
Version: 5.5.28-0ubuntu0.12.04.3
Replaces: mysql-common-4.1
Provides: mysql-common-4.1
Breaks: mysql-client-5.1, mysql-client-core-5.1, mysql-server-5.1, mysql-server-core-5.1
Conflicts: mysql-common-4.1
Conffiles:
 /etc/mysql/my.cnf 7424e1ae4a4f3eaf8f1971cf80762978
Description: MySQL database common files, e.g. /etc/mysql/my.cnf
 MySQL is a fast, stable and true multi-user, multi-threaded SQL database
 server. SQL (Structured Query Language) is the most popular database query
 language in the world. The main goals of MySQL are speed, robustness and
 ease of use.
 .
 This package includes files needed by all versions of the client library,
 e.g. /etc/mysql/my.cnf.
Homepage: http://dev.mysql.com/
Original-Maintainer: Debian MySQL Maintainers <pkg-mysql-maint@lists.alioth.debian.org>

Package: libjsch-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 308
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jsch
Version: 0.1.42-2fakesync1
Description: pure Java implementation of the SSH2 protocol
 JSch allows your programs to connect to an SSH server. It supports
 port forwarding, X11 forwarding, file transfer and more.
Homepage: http://www.jcraft.com/jsch/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libxpp3-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 762
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.1.4c-2
Description: XML pull parser library for java
 Xml Pull Parser (in short XPP) is a streaming pull XML parser for java.
 This version XPP3 is a successor of XPP2 (see package libxpp2-java) that
 implements XmlPull API (see http://www.xmlpull.org).
 .
 However XPP3 currently supports only parsing and does not support
 incremental node tree from XPP2.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.extreme.indiana.edu/xgws/xsoap/xpp

Package: libreadline6
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 384
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: readline6
Version: 6.2-8
Depends: readline-common, libc6 (>= 2.11), libtinfo5
Pre-Depends: multiarch-support
Description: GNU readline and history libraries, run-time libraries
 The GNU readline library aids in the consistency of user interface
 across discrete programs that need to provide a command line
 interface.
 .
 The GNU history library provides a consistent user interface for
 recalling lines of previously typed input.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: libncurses5
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 471
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ncurses
Version: 5.9-4
Depends: libtinfo5 (= 5.9-4), libc6 (>= 2.4)
Pre-Depends: multiarch-support, libtinfo5 (>= 5.9-3)
Recommends: libgpm2
Description: shared libraries for terminal handling
 The ncurses library routines are a terminal-independent method of
 updating character screens with reasonable optimization.
 .
 This package contains the shared libraries necessary to run programs
 compiled with ncurses.
Original-Maintainer: Craig Small <csmall@debian.org>
Homepage: http://invisible-island.net/ncurses/

Package: libplymouth2
Status: install ok installed
Priority: required
Section: libs
Installed-Size: 279
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: plymouth
Version: 0.8.2-2ubuntu30
Replaces: plymouth (<< 0.7.0+git20090207-0ubuntu0.1~ppa4)
Depends: libc6 (>= 2.14), libpng12-0 (>= 1.2.13-4)
Breaks: casper (= 1.227), mountall (<< 2.8)
Description: graphical boot animation and logger - shared libraries
 Plymouth is an application that runs very early in the boot process
 (even before the root filesystem is mounted!) that provides a graphical
 boot animation while the boot process happens in the background.
 .
 This package contains the shared libraries.

Package: vim
Status: install ok installed
Priority: optional
Section: editors
Installed-Size: 2013
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2:7.3.429-2ubuntu2.1
Provides: editor
Depends: vim-common (= 2:7.3.429-2ubuntu2.1), vim-runtime (= 2:7.3.429-2ubuntu2.1), libacl1 (>= 2.2.51-5), libc6 (>= 2.15), libgpm2 (>= 1.20.4), libpython2.7 (>= 2.7), libselinux1 (>= 1.32), libtinfo5
Suggests: ctags, vim-doc, vim-scripts
Description: Vi IMproved - enhanced vi editor
 Vim is an almost compatible version of the UNIX editor Vi.
 .
 Many new features have been added: multi level undo, syntax
 highlighting, command line history, on-line help, filename
 completion, block operations, folding, Unicode support, etc.
 .
 This package contains a version of vim compiled with a rather
 standard set of features.  This package does not provide a GUI
 version of Vim.  See the other vim-* packages if you need more
 (or less).
Homepage: http://www.vim.org/
Original-Maintainer: Debian Vim Maintainers <pkg-vim-maintainers@lists.alioth.debian.org>

Package: rsync
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: net
Installed-Size: 638
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.0.9-1ubuntu1
Depends: libacl1 (>= 2.2.51-3), libc6 (>= 2.8), libpopt0 (>= 1.16), lsb-base (>= 3.2-14), base-files (>= 4.0.1)
Suggests: openssh-client, openssh-server
Conflicts: duplicity (<< 0.6.11)
Conffiles:
 /etc/default/rsync e0d7efac23e911c65f44b08de446e837
 /etc/init.d/rsync 14875a3578ab580e9b887b6b158b8291
Description: fast, versatile, remote (and local) file-copying tool
 rsync is a fast and versatile file-copying tool which can copy locally
 and to/from a remote host. It offers many options to control its behaviour,
 and its remote-update protocol can minimize network traffic to make
 transferring updates between machines fast and efficient.
 .
 It is widely used for backups and mirroring and as an improved copy
 command for everyday use.
 .
 This package provides both the rsync command line tool and optional
 daemon functionality.
Homepage: http://rsync.samba.org/
Original-Maintainer: Paul Slootman <paul@debian.org>

Package: libwind0-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 229
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libc6 (>= 2.14), libcomerr2 (>= 1.01), libroken18-heimdal (>= 1.4.0+git20110226)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - stringprep implementation
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: lockfile-progs
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 77
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.1.16
Depends: libc6 (>= 2.8), liblockfile1 (>= 1.0)
Description: Programs for locking and unlocking files and mailboxes
 This package includes several programs to safely lock and unlock
 files and mailboxes from the command line.  These include:
 .
   lockfile-create
   lockfile-remove
   lockfile-touchlock
   mail-lock
   mail-unlock
   mail-touchlock
 .
 These programs use liblockfile to perform the file locking and
 unlocking, so they are guaranteed compatible with Debian's
 file locking policies.
Original-Maintainer: Rob Browning <rlb@defaultvalue.org>

Package: tasksel-data
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 136
Maintainer: Ubuntu Installer Team <ubuntu-installer@lists.ubuntu.com>
Architecture: all
Source: tasksel
Version: 2.88ubuntu9
Depends: tasksel
Recommends: laptop-detect
Conflicts: tasksel (<< 2.67)
Description: Official tasks used for installation of Debian systems
 This package contains data about the standard tasks available on a Debian
 system.
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: libxerces2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1642
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.11.0-4
Depends: libxml-commons-resolver1.1-java, libxml-commons-external-java (>= 1.4.01-2)
Suggests: libxerces2-java-doc, libxerces2-java-gcj
Description: Validating XML parser for Java with DOM level 3 support
 The Xerces2 Java parser is the reference implementation of XNI, the
 Xerces Native Interface, and also a fully conforming XML Schema processor.
 .
 Xerces2-J supports the following standards and APIs:
  * eXtensible Markup Language (XML) 1.0 Second Edition Recommendation
  * Namespaces in XML Recommendation
  * Document Object Model (DOM) Level 2 Core, Events, and Traversal and
    Range Recommendations
  * Simple API for XML (SAX) 2.0.1 Core and Extension
  * Java APIs for XML Processing (JAXP) 1.2.01
  * XML Schema 1.0 Structures and Datatypes Recommendations
  * Experimental implementation of the Document Object Model (DOM) Level 3
    Core and Load/Save Working Drafts
  * Provides a partial implementation of the XML Inclusions (XInclude) W3C
    Candidate Recommendation
 .
 Xerces is now able to parse documents written according to the XML 1.1
 Candidate Recommendation, except that it does not yet provide an option to
 enable normalization checking as described in section 2.13 of this
 specification. It also handles namespaces according to the  XML Namespaces 1.1
 Candidate Recommendation, and will correctly serialize XML 1.1 documents if
 the DOM level 3 load/save API's are in use.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://xerces.apache.org/xerces2-j/

Package: libnspr4
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 368
Maintainer: Ubuntu Mozilla Team <ubuntu-mozillateam@lists.ubuntu.com>
Architecture: amd64
Source: nspr
Version: 4.9.4-0ubuntu0.12.04.1
Replaces: libnspr4-0d (<< 4.8.7)
Depends: libc6 (>= 2.15)
Pre-Depends: multiarch-support
Breaks: evolution-plugins (<< 3.2.0-0ubuntu2)
Conflicts: evolution-documentation-cs, evolution-documentation-de, evolution-documentation-el, evolution-documentation-en, evolution-documentation-es, evolution-documentation-fr, evolution-documentation-mk, evolution-documentation-oc, evolution-documentation-ru, evolution-documentation-sv, language-support-translations-cs, language-support-translations-de, language-support-translations-el, language-support-translations-en, language-support-translations-es, language-support-translations-fr, language-support-translations-mk, language-support-translations-oc, language-support-translations-ru, language-support-translations-sv, libnspr4-0d (<< 4.8.7)
Description: NetScape Portable Runtime Library
 This library provides platform independent non-GUI operating system
 facilities including:
  * threads,
  * thread synchronisation,
  * normal file I/O and network I/O,
  * interval timing and calendar time,
  * basic memory management (malloc and free),
  * shared library linking.
Homepage: http://www.mozilla.org/projects/nspr/
Original-Maintainer: Maintainers of Mozilla-related packages <pkg-mozilla-maintainers@lists.alioth.debian.org>

Package: ppp
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 1172
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.4.5-5ubuntu1
Depends: libc6 (>= 2.11), libpam0g (>= 0.99.7.1), libpcap0.8 (>= 0.9.8), libpam-modules, libpam-runtime, procps
Breaks: network-manager (<= 0.8.0.999-1), network-manager-pptp (<= 0.8.0.999-1), pppdcapiplugin (<= 1:3.9.20060704+dfsg.1-1)
Conffiles:
 /etc/logrotate.d/ppp 8434ebaff1b3b33bb0ea0bce523adfd3
 /etc/bash_completion.d/pon 41cf8cde5bd9fefe51100a051947b118
 /etc/pam.d/ppp cc163be3dbe4258e639238ccd5bcdea0
 /etc/ppp/ip-down.d/0000usepeerdns aaae5708fe89b23c76b94fc9862e1381
 /etc/ppp/ip-up bb4b48272ac4adf06cbc6caf4ede3a1c
 /etc/ppp/ipv6-down e11550beb886ac90b2b79f0b9fea67d6
 /etc/ppp/pppoe_on_boot c3ea78aee841d29ca779783a013b4dac
 /etc/ppp/options 35abf21f84daddb8f602dada6bd46c52
 /etc/ppp/ip-up.d/0000usepeerdns bab9720708c00e7ebba8bfb7d32077dd
 /etc/ppp/ipv6-up 047b617b3d150aeed5e1c7fea7e14e04
 /etc/ppp/ip-down 85d38850a138c53ae48bd2736b1b2753
 /etc/chatscripts/pap 17dbbede1dc894aa6c6c4e8be5727c1d
 /etc/chatscripts/gprs 49518071cd909518f6c79480b69cd10c
 /etc/init.d/pppd-dns da2af4d20b81a9a422a1b67eed69582f
Description: Point-to-Point Protocol (PPP) - daemon
 The Point-to-Point Protocol provides a standard way to transmit
 datagrams over a serial link, as well as a standard way for the machines
 at either end of the link to negotiate various optional characteristics
 of the link.
 .
 This package is most commonly used to manage a modem for dial-up or
 certain kinds of broadband connections.
Original-Maintainer: Marco d'Itri <md@linux.it>

Package: libgcj12
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 54247
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcj-4.6
Version: 4.6.3-1ubuntu2
Replaces: gij-4.4 (<< 4.4.0-1)
Depends: gcj-4.6-base (>= 4.6.3-1ubuntu2), libgcj-common (>= 1:4.1.1-21), libasound2 (>= 1.0.23), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libgmp10, zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Recommends: gcj-4.6-jre-lib (>= 4.6.1-9)
Suggests: libgcj12-dbg, libgcj12-awt (= 4.6.3-1ubuntu2)
Description: Java runtime library for use with gcj
 This is the runtime that goes along with the gcj front end to
 gcc. libgcj includes parts of the Java Class Libraries, plus glue to
 connect the libraries to the compiler and the underlying OS.
 .
 To show file names and line numbers in stack traces, the packages
 libgcj12-dbg and binutils are required.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libplexus-classworlds2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 109
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-classworlds2
Version: 2.4-1
Suggests: libplexus-classworlds2-java-doc
Description: Class loading utilities for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
  * Component lifecycles
  * Component instantiation strategies
  * Nested containers
  * Component configuration
  * Auto-wiring
  * Component dependencies, and
  * Various dependency injection techniques including constructor injection,
   setter injection, and private field injection.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-classworlds

Package: libjpeg-turbo8
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 308
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libjpeg-turbo
Version: 1.1.90+svn733-0ubuntu4.1
Replaces: libjpeg8 (<< 8c-2ubuntu5)
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Breaks: libjpeg8 (<< 8c-2ubuntu5)
Description: IJG JPEG compliant runtime library.
 Runtime library supporting the Independent JPEG Group's standard
 for JPEG files.
 .
 This package contains the shared library which is a drop in
 replacement for libjpeg8, which has better performance than
 standard libjpeg by use of SIMD and other optimizations.
Homepage: http://libjpeg-turbo.virtualgl.org/

Package: libkeyutils1
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 51
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: keyutils
Version: 1.5.2-2
Depends: libc6 (>= 2.7)
Pre-Depends: multiarch-support
Description: Linux Key Management Utilities (library)
 Keyutils is a set of utilities for managing the key retention facility in the
 kernel, which can be used by filesystems, block devices and more to gain and
 retain the authorization and encryption keys required to perform secure
 operations.
 .
 This package provides a wrapper library for the key management facility system
 calls.
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>
Homepage: http://people.redhat.com/~dhowells/keyutils/

Package: libganymed-ssh2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 2849
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ganymed-ssh2
Version: 250-2
Description: pure Java implementation of the SSH-2 protocol
 Ganymed SSH-2 for Java is a library which implements the SSH-2
 protocol in pure Java. It allows one to connect to SSH servers from
 within Java programs. It supports SSH sessions (remote command
 execution and shell access), local and remote port forwarding, local
 stream forwarding, X11 forwarding, SCP and SFTP. There are no
 dependencies on any JCE provider, as all crypto functionality is
 included.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.cleondris.ch/ssh2/

Package: libhttp-message-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 244
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.01-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, liburi-perl, libhttp-date-perl, libhtml-parser-perl, libencode-locale-perl, liblwp-mediatypes-perl, perl (>= 5.10.1) | libio-compress-perl
Breaks: libwww-perl (<< 6.00)
Description: perl interface to HTTP style messages
 The HTTP::Headers class encapsulates HTTP-style message headers. The headers
 consist of attribute-value pairs also called fields, which may be repeated,
 and which are printed in a particular order. The field names are cases
 insensitive.
 .
 Instances of this class are usually created as member variables of the
 HTTP::Request and HTTP::Response classes, internal to the library.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTTP-Message/

Package: parted
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 188
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.3-8ubuntu5.1
Replaces: fsresize, parted1.6
Depends: libc6 (>= 2.11), libparted0debian1 (>= 2.2-1), libreadline6 (>= 6.0), libtinfo5
Suggests: parted-doc
Conflicts: fsresize, parted1.6
Description: disk partition manipulator
 GNU Parted is a program that allows you to create, destroy, resize,
 move, and copy disk partitions. This is useful for creating space
 for new operating systems, reorganizing disk usage, and copying data
 to new hard disks.
 .
 This package contains the binary and manual page. Further
 documentation is available in parted-doc.
 .
 Parted currently supports DOS, Mac, Sun, BSD, GPT, MIPS, and PC98
 partitioning formats, as well as a "loop" (raw disk) type which
 allows use on RAID/LVM. It can detect and remove ASFS/AFFS/APFS,
 Btrfs, ext2/3/4, FAT16/32, HFS, JFS, linux-swap, UFS, XFS, and ZFS
 file systems. Parted also has the ability to create and modify file
 systems of some of these types, but using it to perform file system
 operations is now deprecated.
 .
 The nature of this software means that any bugs could cause massive
 data loss. While there are no such bugs known at the moment, they
 could exist, so please back up all important files before running
 it, and do so at your own risk.
Homepage: http://www.gnu.org/software/parted
Original-Maintainer: Parted Maintainer Team <parted-maintainers@lists.alioth.debian.org>

Package: libvorbisenc2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 2913
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libvorbis
Version: 1.3.2-1ubuntu3
Replaces: libvorbis0 (<< 1.0.0)
Depends: libc6 (>= 2.2.5), libvorbis0a (= 1.3.2-1ubuntu3)
Pre-Depends: multiarch-support
Conflicts: libvorbis0 (<< 1.0.0)
Description: The Vorbis General Audio Compression Codec (Encoder library)
 Ogg Vorbis is a fully open, non-proprietary, patent-and-royalty-free,
 general-purpose compressed audio format for audio and music at fixed
 and variable bitrates from 16 to 128 kbps/channel.
 .
 The Vorbisenc library provides a convenient API for setting up an encoding
 environment using libvorbis.
Original-Maintainer: Debian Xiph.org Maintainers <pkg-xiph-maint@lists.alioth.debian.org>

Package: logrotate
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 184
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.7.8-6ubuntu5
Depends: libc6 (>= 2.8), libpopt0 (>= 1.16), libselinux1 (>= 1.32), cron | anacron | fcron, base-passwd (>= 2.0.3.4)
Suggests: mailx
Conffiles:
 /etc/logrotate.conf 176edd439a499501372cf3d04e795810
 /etc/cron.daily/logrotate da9c29ed0b408ffd88d05c3d8e881e94
Description: Log rotation utility
 The logrotate utility is designed to simplify the administration of
 log files on a system which generates a lot of log files.  Logrotate
 allows for the automatic rotation compression, removal and mailing of
 log files.  Logrotate can be set to handle a log file daily, weekly,
 monthly or when the log file gets to a certain size.  Normally, logrotate
 runs as a daily cron job.
Original-Maintainer: Paul Martin <pm@debian.org>

Package: libexpat1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 383
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: expat
Version: 2.0.1-7.2ubuntu1.1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Conflicts: wink (<= 1.5.1060-4)
Description: XML parsing C library - runtime library
 This package contains the runtime, shared library of expat, the C
 library for parsing XML. Expat is a stream-oriented parser in
 which an application registers handlers for things the parser
 might find in the XML document (like start tags).
Homepage: http://expat.sourceforge.net
Original-Maintainer: Debian XML/SGML Group <debian-xml-sgml-pkgs@lists.alioth.debian.org>

Package: libcdi-api-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: cdi-api
Version: 1.0-1
Depends: libatinject-jsr330-api-java, libgeronimo-interceptor-3.0-spec-java, libservlet2.5-java
Description: Contexts and Dependency Injection for Java EE
 Contexts and Dependency Injection (CDI aka JSR 299) defines a set of
 complementary services to help usage of Inversion of Control (IoC)
 on Java EE platform (like with Spring Framework).
 .
 CDI can be used on Java EE platform but some container also support
 running on Java SE.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jcp.org/en/jsr/detail?id=299

Package: libnet-dns-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 641
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.66-2ubuntu3
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.4), libdigest-hmac-perl (>= 1), libmime-base64-perl, libnet-ip-perl (>= 1.2)
Suggests: libio-socket-inet6-perl
Description: Perform DNS queries from a Perl script
 Net::DNS is a DNS resolver implemented in Perl.  It allows the
 programmer to perform nearly any type of DNS query from a Perl
 script.
 With libio-socket-inet6-perl installed it supports IPv6.
Homepage: http://www.net-dns.org/
Original-Maintainer: Florian Hinzmann <fh@debian.org>

Package: python-keyring
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 207
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.9.2-0ubuntu0.12.04.2
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Recommends: python-crypto
Description: store and access your passwords safely
 The Python keyring library provides an easy way to access the system
 keyring service (e.g Gnome-Keyring, KWallet) from Python.
 it can be used in any application that needs safe password storage.
Homepage: http://home.python-keyring.org/
Original-Maintainer: Carl Chenet <chaica@debian.org>

Package: libnetty-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 802
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: netty
Version: 1:3.2.6.Final-2
Recommends: libcommons-logging-java | liblog4j1.2-java | libslf4j-java, libservlet2.5-java
Description: Java NIO client/server socket framework
 Netty is a Java NIO client/server framework which enables quick and easy
 development of network applications such as protocol servers and clients.
 It greatly simplifies and streamlines network programming such as TCP and UDP
 socket server.
Original-Maintainer: Chris Grzegorczyk <grze@eucalyptus.com>
Homepage: http://www.jboss.org/netty

Package: iproute
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: net
Installed-Size: 982
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 20111117-1ubuntu2
Provides: arpd
Depends: libc6 (>= 2.14), libdb5.1
Recommends: libatm1
Suggests: iproute-doc
Conflicts: arpd
Conffiles:
 /etc/iproute2/ematch_map 0b9befbbbee4b415319b8070f18b9b88
 /etc/iproute2/group 3aea2c0e0dd75e13a5f8f48f2936915f
 /etc/iproute2/rt_dsfield 4264d5c7c8298300185aa04e1a736934
 /etc/iproute2/rt_protos 95ce0b4b5b79f5a8a45941fb418a904c
 /etc/iproute2/rt_realms 7137bdf40e8d58c87ac7e3bba503767f
 /etc/iproute2/rt_scopes 6298b8df09e9bda23ea7da49021ca457
 /etc/iproute2/rt_tables a1313318d6778fe6b8c680248ef5a463
Description: networking and traffic control tools
 The iproute suite, also known as iproute2, is a collection of
 utilities for networking and traffic control.
 .
 These tools communicate with the Linux kernel via the (rt)netlink
 interface, providing advanced features not available through the
 legacy net-tools commands 'ifconfig' and 'route'.
Homepage: http://www.linux-foundation.org/en/Net:Iproute2
Original-Maintainer: Debian iproute maintainers <ah-iproute@debian.org>

Package: libasm3-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 964
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: asm3
Version: 3.3.2-1
Description: Java bytecode manipulation framework
 It can be used to dynamically generate stub classes or other proxy classes,
 directly in binary form, or to dynamically modify classes at load time, i.e.,
 just before they are loaded into the Java Virtual Machine.
 .
 ASM offers similar functionalities as BCEL or SERP, but is much smaller
 (25KB instead of 350KB for BCEL and 150KB for SERP) and faster
 than these tools (the overhead of a load time class transformation is on
 the order of 60% with ASM, 700% or more with BCEL, and 1100% or more with
 SERP). ASM was designed to be used in a dynamic and static way and was
 therefore designed and implemented to be as small and as fast as possible.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://asm.objectweb.org/

Package: libcommons-collections3-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 752
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.2.1-5
Suggests: libcommons-collections3-java-doc
Description: A set of abstract data type interfaces and implementations
 The Java Collections Framework provides a set of abstract data
 type interfaces and implementations that offer both a wealth
 of useful functionality, and a solid foundation for extending
 that functionality.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/collections/

Package: libxt-dev
Status: install ok installed
Priority: optional
Section: libdevel
Installed-Size: 1196
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxt
Version: 1:1.1.1-2build1
Depends: libxt6 (= 1:1.1.1-2build1), libx11-dev, x11proto-core-dev, libsm-dev
Description: X11 toolkit intrinsics library (development headers)
 libXt provides the X Toolkit Intrinsics, an abstract widget library upon
 which other toolkits are based.  Xt is the basis for many toolkits, including
 the Athena widgets (Xaw), and LessTif (a Motif implementation).
 .
 This package contains the development headers for the library found in
 libxt6.  Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXt
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libosgi-compendium-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 500
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: osgi-compendium
Version: 4.3.0-1
Depends: libgeronimo-jpa-2.0-spec-java, libosgi-core-java, libosgi-foundation-ee-java, libservlet2.5-java
Suggests: libosgi-compendium-java-doc
Description: Java OSGi API - Compendium module
 OSGi, for Open Services Gateway initiative framework, is a module system and
 service platform for the Java programming language.
 .
 This package contains OSGi Compendium for Release 4 Version 4.2.
 On top of OSGi Core, this provide additionnal services to help dynamic
 components.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.osgi.org/Specifications/HomePage

Package: libplexus-containers-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 388
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-containers
Version: 1.0~beta3.0.7-5
Depends: libgoogle-collections-java (>= 1.0), libplexus-classworlds-java, libplexus-utils-java, libxbean-java
Conflicts: libplexus-container-default-java (<= 1.0-alpha-9-stable-1-2)
Description: utilities for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
 .
 This package replaces the old packages libplexus-containers-default-java.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org

Package: libgeronimo-interceptor-3.0-spec-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 44
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: geronimo-interceptor-3.0-spec
Version: 1.0.1-1fakesync1
Depends: default-jre-headless | java5-runtime-headless
Description: Geronimo API implementation of the Interceptor 3.0 spec
 The goal of the Geronimo project is to produce a server runtime framework
 that pulls together the best Open Source alternatives to create runtimes
 that meet the needs of developers and system administrators. Geronimo's
 most popular distribution is a fully certified Java EE 5 application server
 runtime.
 .
 Geronimo API implementation of the Interceptor 3.0 spec (javax.interceptor
 classes)
Original-Maintainer: Chris Grzegorczyk <grze@eucalyptus.com>

Package: patch
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: vcs
Installed-Size: 218
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.6.1-3
Depends: libc6 (>= 2.4)
Suggests: ed, diffutils-doc
Description: Apply a diff file to an original
 Patch will take a patch file containing any of the four forms
 of difference listing produced by the diff program and apply
 those differences to an original file, producing a patched
 version.
Original-Maintainer: Christoph Berg <myon@debian.org>

Package: libmaven-scm-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1620
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: maven-scm
Version: 1.3-4
Depends: libganymed-ssh2-java, libmaven2-core-java, libnetbeans-cvsclient-java, libplexus-container-default-java, libplexus-utils-java, libregexp-java
Suggests: libmaven-scm-java-doc
Description: Maven SCM provides a common API for doing SCM operations
 Maven is a software project management and comprehension tool. Based on the
 concept of a project object model (POM), Maven can manage a project's build,
 reporting and documentation from a central piece of information.
 .
 Maven's primary goal is to allow a developer to comprehend the complete
 state of a development effort in the shortest period of time. In order to
 attain this goal there are several areas of concern that Maven attempts
 to deal with:
 .
    * Making the build process easy
    * Providing a uniform build system
    * Providing quality project information
    * Providing guidelines for best practices development
    * Allowing transparent migration to new features
 .
 This package provides a common API for doing SCM operations.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://maven.apache.org/scm/

Package: libpango1.0-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 1045
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pango1.0
Version: 1.30.0-0ubuntu3.1
Provides: pango1.0-multiarch-modver-1.6.0
Depends: libc6 (>= 2.14), libcairo2 (>= 1.8.10-3), libfontconfig1 (>= 2.8.0), libfreetype6 (>= 2.2.1), libglib2.0-0 (>= 2.31.8), libthai0 (>= 0.1.12), libx11-6, libxft2 (>> 2.1.1), libxrender1, fontconfig (>= 2.1.91)
Pre-Depends: multiarch-support
Suggests: ttf-baekmuk, ttf-arphic-gbsn00lp, ttf-arphic-bsmi00lp, ttf-arphic-gkai00mp, ttf-arphic-bkai00mp
Breaks: plymouth (<< 0.8.2-2ubuntu19)
Conflicts: pango-libthai
Description: Layout and rendering of internationalized text
 Pango is a library for layout and rendering of text, with an emphasis
 on internationalization. Pango can be used anywhere that text layout is
 needed. however, most of the work on Pango-1.0 was done using the GTK+
 widget toolkit as a test platform. Pango forms the core of text and
 font handling for GTK+-2.0.
 .
 Pango is designed to be modular; the core Pango layout can be used with
 four different font backends:
  - Core X windowing system fonts
  - Client-side fonts on X using the Xft library
  - Direct rendering of scalable fonts using the FreeType library
  - Native fonts on Microsoft backends
 .
 This package contains the shared libraries.
Original-Maintainer: Sebastien Bacher <seb128@debian.org>

Package: initramfs-tools-bin
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 119
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: initramfs-tools
Version: 0.99ubuntu13
Depends: libc6 (>= 2.4), libudev0 (>= 147)
Description: binaries used by initramfs-tools
 This package contains binaries used inside the initramfs images generated
 by initramfs-tools.
Original-Maintainer: Debian kernel team <debian-kernel@lists.debian.org>

Package: intltool-debian
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 140
Maintainer: Ubuntu Core Developers <ubuntu-devel@lists.ubuntu.com>
Architecture: all
Version: 0.35.0+20060710.1
Depends: perl, gettext
Description: Help i18n of RFC822 compliant config files
 Intltool is a bunch of scripts written by the GNOME project to
 internationalize many different file formats.  This package is
 a slightly modified version which adds support for RFC822
 compliant config files, e.g. Debconf templates files.
Original-Maintainer: Nicolas FRANCOIS (Nekral) <nicolas.francois@centraliens.net>

Package: usbutils
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 661
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:005-1
Depends: libc6 (>= 2.4), libusb-1.0-0 (>= 2:1.0.8), zlib1g (>= 1:1.1.4)
Suggests: wget (>= 1.8.1-6) | lynx (>= 2.8.4.1b-3)
Description: Linux USB utilities
 This package contains the lsusb utility for inspecting the devices
 connected to the USB bus. It shows a graphical representation of the
 devices that are currently plugged in, showing the topology of the
 USB bus. It also displays information on each individual device on
 the bus.
 .
 More information can be found at the Linux USB web site
 http://www.linux-usb.org/ .
Original-Maintainer: Aurelien Jarno <aurel32@debian.org>

Package: libdevmapper1.02.1
Status: install ok installed
Priority: required
Section: libs
Installed-Size: 201
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: lvm2 (2.02.66-4ubuntu7.1)
Version: 2:1.02.48-4ubuntu7.1
Provides: libdevmapper
Depends: libc6 (>= 2.14), libselinux1 (>= 1.32), libudev0 (>= 147), dmsetup (>= 2:1.02.48-4ubuntu7.1)
Breaks: lvm2 (<< 2.02.66)
Description: The Linux Kernel Device Mapper userspace library
 The Linux Kernel Device Mapper is the LVM (Linux Logical Volume Management)
 Team's implementation of a minimalistic kernel-space driver that handles
 volume management, while keeping knowledge of the underlying device layout
 in user-space.  This makes it useful for not only LVM, but EVMS, software
 raid, and other drivers that create "virtual" block devices.
 .
 This package contains the (user-space) shared library for accessing the
 device-mapper; it allows usage of the device-mapper through a clean,
 consistent interface (as opposed to through kernel ioctls).
Homepage: http://sources.redhat.com/lvm2/
Original-Maintainer: Debian LVM Team <pkg-lvm-maintainers@lists.alioth.debian.org>

Package: libxi6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 142
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libxi
Version: 2:1.6.0-0ubuntu2
Depends: libc6 (>= 2.14), libx11-6 (>= 2:1.4.99.1), libxext6
Pre-Depends: multiarch-support
Description: X11 Input extension library
 libXi provides an X Window System client interface to the XINPUT
 extension to the X protocol.
 .
 The Input extension allows setup and configuration of multiple input devices,
 and will soon allow hotplugging of input devices; to be added and removed on
 the fly.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXi
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libattr1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 56
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: attr
Version: 1:2.4.46-5ubuntu1
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Conflicts: attr (<< 2.0.0)
Description: Extended attribute shared library
 Contains the runtime environment required by programs that make use
 of extended attributes.
Homepage: http://savannah.nongnu.org/projects/attr/
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: liblwres80
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 120
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: libbind0
Depends: libc6 (>= 2.15)
Conflicts: libbind0
Description: Lightweight Resolver Library used by BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers the liblwres shared library used by BIND's daemons
 and clients.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: krb5-locales
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: localization
Installed-Size: 1516
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: krb5
Version: 1.10+dfsg~beta1-2ubuntu0.3
Description: Internationalization support for MIT Kerberos
 Kerberos is a system for authenticating users and services on a network.
 Kerberos is a trusted third-party service.  That means that there is a
 third party (the Kerberos server) that is trusted by all the entities on
 the network (users and services, usually called "principals").
 .
 This is the MIT reference implementation of Kerberos V5.
 .
 This package contains internationalized messages for MIT Kerberos.
Homepage: http://web.mit.edu/kerberos/
Original-Maintainer: Sam Hartman <hartmans@debian.org>

Package: libmpc2
Status: install ok installed
Multi-Arch: same
Priority: extra
Section: libs
Installed-Size: 118
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: mpclib
Version: 0.9-4
Depends: libc6 (>= 2.3.4), libgmp10, libmpfr4
Pre-Depends: multiarch-support
Description: multiple precision complex floating-point library
 MPC is a portable library written in C for arbitrary precision
 arithmetic on complex numbers providing correct rounding. For the time
 being, it contains all arithmetic operations over complex numbers, the
 exponential and the logarithm functions, the trigonometric and
 hyperbolic functions.
 .
 Ultimately, it should implement a multiprecision equivalent of the ISO
 C99 standard.
 .
 It builds upon the GNU MP and the MPFR libraries.
Original-Maintainer: Laurent Fousse <lfousse@debian.org>
Homepage: http://www.multiprecision.org/mpc/

Package: libpcap0.8
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 283
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libpcap
Version: 1.1.1-10
Replaces: libpcap0.8-dev (<< 1.0.0-2)
Depends: libc6 (>= 2.11)
Pre-Depends: multiarch-support
Description: system interface for user-level packet capture
 libpcap (Packet CAPture) provides a portable framework for low-level
 network monitoring.  Applications include network statistics collection,
 security monitoring, network debugging, etc.
 .
 Since almost every system vendor provides a different interface for
 packet capture, and since there are several tools that require this
 functionality, the libpcap authors created this system-independent API
 to ease in porting and to alleviate the need for several
 system-dependent packet capture modules in each application.
Original-Maintainer: Romain Francoise <rfrancoise@debian.org>
Homepage: http://www.tcpdump.org/

Package: libsmbios2
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 899
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libsmbios
Version: 2.2.28-0ubuntu2
Depends: libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6)
Suggests: libsmbios-doc
Description: Provide access to (SM)BIOS information -- dynamic library
 libsmbios aims towards providing access to as much BIOS information as
 possible. It does this by providing a library of functions that can be used
 as well as sample binaries.
 .
 It incorporates extensible access to SMBIOS information capabilities and
 ability to perform unit tests across multiple systems without using physical
 hardware. Moreover, centralized, data-driven exception handling for broken
 BIOS tables is provided. Currently, full access to the SMBIOS table and its
 items is implemented. Additionally, access and manipulation of Dell Indexed
 IO Token (type 0xD4) is implemented. This token is a vendor-extention
 SMBIOS structure which allows uniform access to manipulate the system CMOS
 to enable, disable, or otherwise manipulate normal BIOS functions or features.
Original-Maintainer: Jose Luis Tallon <jltallon@adv-solutions.net>

Package: libhtml-tree-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 536
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 4.2-1
Depends: perl, libhtml-parser-perl, libhtml-tagset-perl
Description: Perl module to represent and create HTML syntax trees
 HTML::Tree is a collection of modules that represent, create and extract
 information from HTML syntax trees.  These modules used to be part of
 the libwww-perl distribution, but are now unbundled in order to
 facilitate a separate development track.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTML-Tree/

Package: genisoimage
Status: install ok installed
Priority: optional
Section: otherosfs
Installed-Size: 1543
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: cdrkit
Version: 9:1.1.11-2ubuntu2
Replaces: mkisofs
Provides: mkisofs
Depends: libbz2-1.0, libc6 (>= 2.7), libmagic1, zlib1g (>= 1:1.1.4)
Suggests: wodim, cdrkit-doc
Conflicts: mkhybrid, mkisofs
Description: Creates ISO-9660 CD-ROM filesystem images
 genisoimage is a pre-mastering program for creating ISO-9660 CD-ROM
 filesystem images, which can then be written to CD or DVD media using
 the wodim program. genisoimage includes support for making bootable
 "El Torito" CDs, as well as CDs with support for the
 Macintosh HFS filesystem.
 .
 The package also includes extra tools useful for working with ISO images:
  * mkzftree - create ISO-9660 image with compressed contents
  * dirsplit - easily separate large directory contents into disks of
    predefined size
  * geteltorito - extract an El Torito boot image from a CD image
 .
 Please install cdrkit-doc if you want most of the documentation and
 README files.
Original-Maintainer: Joerg Jaspert <joerg@debian.org>

Package: sed
Essential: yes
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 296
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.2.1-9
Depends: dpkg (>= 1.15.4) | install-info
Pre-Depends: libc6 (>= 2.4), libselinux1 (>= 1.32)
Description: The GNU sed stream editor
 sed reads the specified files or the standard input if no
 files are specified, makes editing changes according to a
 list of commands, and writes the results to the standard
 output.
Original-Maintainer: Clint Adams <clint@debian.org>
Homepage: http://www.gnu.org/software/sed/

Package: libidn11
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 347
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libidn
Version: 1.23-2
Replaces: libidn11-dev
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Conflicts: libidn9-dev
Description: GNU Libidn library, implementation of IETF IDN specifications
 GNU Libidn is a fully documented implementation of the Stringprep,
 Punycode and IDNA specifications.  Libidn's purpose is to encode and
 decode internationalized domain names.  The Nameprep, XMPP, SASLprep,
 and iSCSI profiles are supported.
 .
 This package contains the shared library.
Original-Maintainer: Debian Libidn Team <help-libidn@gnu.org>
Homepage: http://www.gnu.org/software/libidn/

Package: hdparm
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 260
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 9.37-0ubuntu3.1
Replaces: apmd (<= 3.0.2-1.15), pm-utils (<< 1.2.6)
Depends: libc6 (>= 2.14)
Recommends: powermgmt-base
Suggests: apmd
Breaks: pm-utils (<< 1.2.5-2ubuntu8), udev (<< 136-1)
Conffiles:
 /etc/apm/event.d/20hdparm 69c0a826b29c8f40b7ca5e56e53d7f83
 /etc/hdparm.conf ca3e32b09c7bfda7e7e3580a587e3c2b
Description: tune hard disk parameters for high performance
 Get/set device parameters for Linux SATA/IDE drives.
 Primary use is for enabling irq-unmasking and IDE multiplemode.
Homepage: http://sourceforge.net/projects/hdparm/
Original-Maintainer: Stephen Gran <sgran@debian.org>

Package: python2.7-minimal
Status: install ok installed
Priority: required
Section: python
Installed-Size: 5480
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: python2.7
Version: 2.7.3-0ubuntu3.1
Replaces: python2.7 (<< 2.7.1~rc1-2~)
Depends: libc6 (>= 2.15), libgcc1 (>= 1:4.1.1), libssl1.0.0 (>= 1.0.0), zlib1g (>= 1:1.2.0), python-minimal (>= 2.6.6-3+squeeze1)
Recommends: python2.7
Suggests: binfmt-support
Conflicts: binfmt-support (<< 1.1.2)
Conffiles:
 /etc/python2.7/sitecustomize.py d6b276695157bde06a56ba1b2bc53670
Description: Minimal subset of the Python language (version 2.7)
 This package contains the interpreter and some essential modules.  It can
 be used in the boot process for some basic tasks.
 See /usr/share/doc/python2.7-minimal/README.Debian for a list of the modules
 contained in this package.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: tcpdump
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 1040
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.2.1-1ubuntu2
Depends: libc6 (>= 2.14), libpcap0.8 (>= 1.0.0), libssl1.0.0 (>= 1.0.0)
Suggests: apparmor (>= 2.3)
Conffiles:
 /etc/apparmor.d/usr.sbin.tcpdump 0140154aa1f454b1f1c2eacefddbc4d4
Description: command-line network traffic analyzer
 This program allows you to dump the traffic on a network. tcpdump
 is able to examine IPv4, ICMPv4, IPv6, ICMPv6, UDP, TCP, SNMP, AFS
 BGP, RIP, PIM, DVMRP, IGMP, SMB, OSPF, NFS and many other packet
 types.
 .
 It can be used to print out the headers of packets on a network
 interface, filter packets that match a certain expression. You can
 use this tool to track down network problems, to detect attacks
 or to monitor network activities.
Homepage: http://www.tcpdump.org/
Original-Maintainer: Romain Francoise <rfrancoise@debian.org>

Package: libxcb-render0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 83
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxcb
Version: 1.8.1-1ubuntu0.1
Depends: libc6 (>= 2.2.5), libxcb1 (>= 1.8)
Pre-Depends: multiarch-support
Description: X C Binding, render extension
 This package contains the library files needed to run software using
 libxcb-render, the render extension for the X C Binding.
 .
 The XCB library provides an interface to the X Window System protocol,
 designed to replace the Xlib interface.  XCB provides several advantages over
 Xlib:
 .
  * Size: small library and lower memory footprint
  * Latency hiding: batch several requests and wait for the replies later
  * Direct protocol access: one-to-one mapping between interface and protocol
  * Thread support: access XCB from multiple threads, with no explicit locking
  * Easy creation of new extensions: automatically generates interface from
    machine-parsable protocol descriptions
Homepage: http://xcb.freedesktop.org
Original-Maintainer: XCB Developers <xcb@lists.freedesktop.org>

Package: x11proto-kb-dev
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 176
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: x11proto-kb
Version: 1.0.5-2
Description: X11 XKB extension wire protocol
 This package provides development headers describing the wire protocol
 for the XKEYBOARD extension, used to control all manner of options
 related to keyboard handling and layout in particular.
 It does not control the addition/enabling/disabling of keyboards;
 this is done with the XINPUT extension.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This package is built from the X.org kbproto proto module.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: liblockfile-bin
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: utils
Installed-Size: 70
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: liblockfile
Version: 1.09-3
Replaces: liblockfile1 (<< 1.09-1)
Depends: libc6 (>= 2.4)
Breaks: liblockfile1 (<< 1.09-1)
Description: support binaries for and cli utilities based on liblockfile
 This package contains support binaries for the liblockfile library,
 and the command-line utility ''dotlockfile''.
Original-Maintainer: Miquel van Smoorenburg <miquels@cistron.nl>

Package: libpulse0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 828
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pulseaudio
Version: 1:1.1-0ubuntu15.1
Depends: libasyncns0 (>= 0.3), libc6 (>= 2.15), libdbus-1-3 (>= 1.1.1), libjson0, libsndfile1 (>= 1.0.20), libwrap0 (>= 7.6-4~), libxcb1
Pre-Depends: multiarch-support
Suggests: pulseaudio
Breaks: pavucontrol (<< 0.9.8)
Conffiles:
 /etc/pulse/client.conf bdea965cdb68b445c04a1fa62193c096
Description: PulseAudio client libraries
 PulseAudio, previously known as Polypaudio, is a sound server for POSIX and
 WIN32 systems. It is a drop in replacement for the ESD sound server with
 much better latency, mixing/re-sampling quality and overall architecture.
 .
 Client libraries used by applications that access a PulseAudio sound server
 via PulseAudio's native interface.
Homepage: http://www.pulseaudio.org
Original-Maintainer: Pulseaudio maintenance team <pkg-pulseaudio-devel@lists.alioth.debian.org>

Package: libgtk2.0-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 1108
Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
Architecture: all
Source: gtk+2.0
Version: 2.24.10-0ubuntu6
Replaces: libgtk2.0-0 (<< 2.24.8-2)
Recommends: libgtk2.0-0
Breaks: libgtk2.0-0 (<< 2.24.8-2)
Conffiles:
 /etc/gtk-2.0/im-multipress.conf c358838e1789c1d4e6da7f525fc922cf
Description: common files for the GTK+ graphical user interface library
 GTK+ is a multi-platform toolkit for creating graphical user
 interfaces. Offering a complete set of widgets, GTK+ is suitable
 for projects ranging from small one-off tools to complete application
 suites.
 .
 This package contains the common files which the libraries need.
Homepage: http://www.gtk.org/
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libatk-wrapper-java
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: java
Installed-Size: 61
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: java-atk-wrapper
Version: 0.30.4-0ubuntu2
Depends: default-jre | java2-runtime
Recommends: libatk-wrapper-java-jni
Description: An ATK implementation for Java using JNI
 Java ATK Wrapper is an implementation of ATK by using JNI. It
 converts Java Swing events into ATK events, and send these events to
 ATK-Bridge.
Homepage: http://ftp.gnome.org/pub/GNOME/sources/java-atk-wrapper/
Original-Maintainer: Debian Accessibility Team <debian-accessibility@lists.debian.org>

Package: libcommons-jexl-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 186
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.1-3
Description: expression language engine
 This library is an expression language engine for easy embedding in
 applications and frameworks. It implements an extented version of the
 Expression Language of the JSTL (Java Standard Tag Library, java server
 related technology).
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/jexl

Package: lshw
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 712
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 02.15-2
Depends: libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.4.0)
Recommends: pciutils, usbutils
Description: information about hardware configuration
 A small tool to provide detailed information on the hardware
 configuration of the machine. It can report exact memory
 configuration, firmware version, mainboard configuration, CPU version
 and speed, cache configuration, bus speed, etc. on DMI-capable x86
 systems, on some PowerPC machines (PowerMac G4 is known to work) and AMD64.
 .
 Information can be output in plain text, HTML or XML.
Original-Maintainer: Ghe Rivero <ghe.rivero@gmail.com>

Package: librtmp0
Status: install ok installed
Multi-Arch: same
Priority: extra
Section: libs
Installed-Size: 143
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: rtmpdump
Version: 2.4~20110711.gitc28f1bab-1
Depends: libc6 (>= 2.7), libgcrypt11 (>= 1.5.0-0), libgnutls26 (>= 2.9.11-0), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Description: toolkit for RTMP streams (shared library)
 A small dumper for media content streamed over the RTMP protocol (like BBC's
 iPlayer high quality streams). Supplying an rtmp URL will result in a dumped
 flv file, which can be played/transcoded using ffmpeg/mplayer, etc.
 .
 This package contains the shared libraries, header files needed by
 programs that want to use librtmp.
Original-Maintainer: Debian Multimedia Maintainers <pkg-multimedia-maintainers@lists.alioth.debian.org>
Homepage: http://rtmpdump.mplayerhq.hu/

Package: libtiff4
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 494
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: tiff
Version: 3.9.5-2ubuntu1.4
Depends: libc6 (>= 2.14), libjpeg8 (>= 8c), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Description: Tag Image File Format (TIFF) library
 libtiff is a library providing support for the Tag Image File Format
 (TIFF), a widely used format for storing image data.  This package
 includes the shared library.
Homepage: http://libtiff.maptools.org
Original-Maintainer: Jay Berkenbilt <qjb@debian.org>

Package: libcommons-cli-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 108
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.2-3
Depends: libcommons-lang-java (>= 2.0)
Description: API for working with the command line arguments and options
 You define arguments you want to parse, parse arguments the user
 entered and then you can retrieve them like properties
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/cli/

Package: klibc-utils
Status: install ok installed
Priority: required
Section: libs
Installed-Size: 367
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: klibc
Version: 1.5.25-1ubuntu2
Depends: libklibc (= 1.5.25-1ubuntu2)
Description: small utilities built with klibc for early boot
 This package contains a collection of programs that are linked
 against klibc. These duplicate some of the functionality of a
 regular Linux toolset, but are typically much smaller than their
 full-function counterparts.  They are intended for inclusion in
 initramfs images and embedded systems.
Original-Maintainer: maximilian attems <maks@debian.org>

Package: g++
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 34
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-defaults (1.112ubuntu5)
Version: 4:4.6.3-1ubuntu5
Provides: c++-compiler
Depends: cpp (>= 4:4.6.3-1ubuntu5), gcc (>= 4:4.6.3-1ubuntu5), g++-4.6 (>= 4.6.3-1~), gcc-4.6 (>= 4.6.3-1~)
Suggests: g++-multilib
Description: GNU C++ compiler
 This is the GNU C++ compiler, a fairly portable optimizing compiler for C++.
 .
 This is a dependency package providing the default GNU C++ compiler.
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: e2fslibs
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 370
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: e2fsprogs
Version: 1.42-1ubuntu2
Replaces: e2fsprogs (<< 1.34-1)
Provides: libe2p2, libext2fs2
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: ext2/ext3/ext4 file system libraries
 The ext2, ext3 and ext4 file systems are successors of the original ext
 ("extended") file system. They are the main file system types used for
 hard disks on Debian and other Linux systems.
 .
 This package provides the ext2fs and e2p libraries, for userspace software
 that directly accesses extended file systems. Programs that use libext2fs
 include e2fsck, mke2fs, and tune2fs. Programs that use libe2p include
 dumpe2fs, chattr, and lsattr.
Homepage: http://e2fsprogs.sourceforge.net
Original-Maintainer: Theodore Y. Ts'o <tytso@mit.edu>

Package: linux-headers-server
Status: install ok installed
Priority: optional
Section: kernel
Installed-Size: 31
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux-meta
Version: 3.2.0.35.40
Depends: linux-headers-3.2.0-35-generic
Description: Linux kernel headers on Server Equipment.
 This package will always depend on the latest kernel headers available
 for Server Equipment.

Package: lintian
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: devel
Installed-Size: 2071
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.5.6ubuntu0.1
Depends: binutils, bzip2, diffstat, file, gettext, intltool-debian, libapt-pkg-perl, libc-bin (>= 2.13) | locales, libclass-accessor-perl, libclone-perl, libdigest-sha-perl, libdpkg-perl, libemail-valid-perl, libipc-run-perl, libparse-debianchangelog-perl, libtimedate-perl, liburi-perl, man-db, patchutils, perl, unzip
Suggests: binutils-multiarch, dpkg-dev, libhtml-parser-perl, libtext-template-perl, man-db (>= 2.5.1-1), xz-utils
Conffiles:
 /etc/lintianrc b71b2159a43f560760c8cb091edb398b
Description: Debian package checker
 Lintian dissects Debian packages and reports bugs and policy
 violations. It contains automated checks for many aspects of Debian
 policy as well as some checks for common errors.
 .
 It uses an archive directory, called laboratory, in which it stores
 information about the packages it examines.  It can keep this
 information between multiple invocations in order to avoid repeating
 expensive data-collection operations. This makes it possible to check the
 complete Debian archive for bugs, in a reasonable time.
 .
 This package is useful for all people who want to check Debian
 packages for compliance with Debian policy. Every Debian maintainer
 should check packages with this tool before uploading them to the
 archive.
 .
 This version of Lintian is calibrated for policy version 3.9.2.
Original-Maintainer: Debian Lintian Maintainers <lintian-maint@debian.org>

Package: libkrb5support0
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 110
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: krb5
Version: 1.10+dfsg~beta1-2ubuntu0.3
Replaces: libkrb53 (<< 1.6.dfsg.4~beta1-7)
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Breaks: libkrb53 (<< 1.6.dfsg.4~beta1-9)
Description: MIT Kerberos runtime libraries - Support library
 Kerberos is a system for authenticating users and services on a network.
 Kerberos is a trusted third-party service.  That means that there is a
 third party (the Kerberos server) that is trusted by all the entities on
 the network (users and services, usually called "principals").
 .
 This is the MIT reference implementation of Kerberos V5.
 .
 This package contains an internal runtime support library used by other
 Kerberos libraries.
Homepage: http://web.mit.edu/kerberos/
Original-Maintainer: Sam Hartman <hartmans@debian.org>

Package: wget
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: web
Installed-Size: 600
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.13.4-2ubuntu1
Depends: libc6 (>= 2.15), libidn11 (>= 1.13), libssl1.0.0 (>= 1.0.0), dpkg (>= 1.15.4) | install-info
Conflicts: wget-ssl
Conffiles:
 /etc/wgetrc 12cbbf1f2f88dc3b0b289cd368761b7e
Description: retrieves files from the web
 Wget is a network utility to retrieve files from the web
 using HTTP(S) and FTP, the two most widely used internet
 protocols. It works non-interactively, so it will work in
 the background, after having logged off. The program supports
 recursive retrieval of web-authoring pages as well as FTP
 sites -- you can use Wget to make mirrors of archives and
 home pages or to travel the web like a WWW robot.
 .
 Wget works particularly well with slow or unstable connections
 by continuing to retrieve a document until the document is fully
 downloaded. Re-getting files from where it left off works on
 servers (both HTTP and FTP) that support it. Both HTTP and FTP
 retrievals can be time stamped, so Wget can see if the remote
 file has changed since the last retrieval and automatically
 retrieve the new version if it has.
 .
 Wget supports proxy servers; this can lighten the network load,
 speed up retrieval, and provide access behind firewalls.
Homepage: http://www.gnu.org/software/wget/
Original-Maintainer: Noël Köthe <noel@debian.org>

Package: libmaven-plugin-tools-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 364
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: maven-plugin-tools
Version: 2.8-2
Depends: libmaven-reporting-impl-java, libdoxia-sitetools-java, libplexus-container-default-java, libgoogle-collections-java, libxbean-java, libqdox-java, bsh, libjtidy-java, libmaven2-core-java
Description: Maven Plugin Tools Base POM
 Maven is a software project management and comprehension tool. Based on the
 concept of a project object model (POM), Maven can manage a project's build,
 reporting and documentation from a central piece of information.
 .
 Maven's primary goal is to allow a developer to comprehend the complete
 state of a development effort in the shortest period of time. In order to
 attain this goal there are several areas of concern that Maven attempts
 to deal with:
 .
    * Making the build process easy
    * Providing a uniform build system
    * Providing quality project information
    * Providing guidelines for best practices development
    * Allowing transparent migration to new features
 .
 This package ships some basic POM tools.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://maven.apache.org

Package: base-passwd
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 165
Maintainer: Colin Watson <cjwatson@debian.org>
Architecture: amd64
Version: 3.5.24
Replaces: base
Depends: libc6 (>= 2.8)
Description: Debian base system master password and group files
 These are the canonical master copies of the user database files
 (/etc/passwd and /etc/group), containing the Debian-allocated user and
 group IDs. The update-passwd tool is provided to keep the system databases
 synchronized with these master files.

Package: uuid-runtime
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: libs
Installed-Size: 141
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: util-linux
Version: 2.20.1-1ubuntu3
Replaces: e2fsprogs (<= 1.40.3-1ubuntu1)
Depends: passwd, libuuid1 (>= 2.20.1), libc6 (>= 2.4)
Description: runtime components for the Universally Unique ID library
 The libuuid library generates and parses 128-bit universally unique
 ids (UUIDs).  A UUID is an identifier that is unique across both
 space and time, with respect to the space of all UUIDs.  A UUID can
 be used for multiple purposes, from tagging objects with an extremely
 short lifetime, to reliably identifying very persistent objects
 across a network.
 .
 See RFC 4122 for more information.
 .
 This package contains the uuidgen program and the uuidd daemon.
 .
 The uuidd daemon is used to generate UUIDs, especially time-based
 UUID’s, in a secure and guaranteed-unique fashion, even in the face
 of large numbers of threads trying to grab UUID’s running on
 different CPU’s. It is used by libuuid as well as the uuidgen
 program.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: at
Status: install ok installed
Priority: standard
Section: admin
Installed-Size: 177
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.1.13-1ubuntu1
Depends: libc6 (>= 2.7), libpam0g (>= 0.99.7.1), upstart-job, lsb-base (>= 3.2-14), libpam-runtime (>= 1.0.1-11)
Suggests: default-mta | mail-transport-agent
Conffiles:
 /etc/pam.d/atd 931055740c22663fcef3e304dcf89c54
 /etc/init/atd.conf 67b61cd5b9745d2c3837b776c2367472
 /etc/at.deny 8cb7e7632119dc26115436938efd2522
Description: Delayed job execution and batch processing
 At and batch read shell commands from standard input
 storing them as a job to be scheduled for execution in the
 future.
 .
 Use
  at    to run the job at a specified time
  batch to run the job when system load levels permit
Original-Maintainer: Ansgar Burchardt <ansgar@debian.org>

Package: bind9-host
Status: install ok installed
Priority: standard
Section: net
Installed-Size: 171
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: dnsutils (<< 1:9.0.0), host (<< 1:9.7.0)
Provides: host
Depends: libbind9-80 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libc6 (>= 2.14), libdns81 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libisc83 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), libisccfg82 (= 1:9.8.1.dfsg.P1-4ubuntu0.5), liblwres80 (= 1:9.8.1.dfsg.P1-4ubuntu0.5)
Conflicts: dnsutils (<< 1:9.0.0), host (<< 1:9.7.0)
Description: Version of 'host' bundled with BIND 9.X
 This package provides the 'host' program in the form that is bundled with
 the BIND 9.X sources.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: bsh
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 352
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.0b4-12build1
Depends: default-jre-headless | java1-runtime-headless | java2-runtime-headless, libjline-java
Recommends: bsh-gcj
Suggests: libservlet2.5-java, bsh-doc, default-jre | java1-runtime | java2-runtime
Enhances: libbsf-java
Description: Java scripting environment (BeanShell) Version 2
 BeanShell is a small, free, embeddable, Java source interpreter with object
 scripting language features, written in Java. BeanShell executes standard Java
 statements and expressions, in addition to obvious scripting commands and
 syntax.  BeanShell supports scripted objects as simple method closures like
 those in Perl and JavaScript(tm).
 .
 You can use BeanShell interactively for Java experimentation and debugging or
 as a simple scripting engine for you applications.  In short: BeanShell is a
 dynamically interpreted Java, plus some useful stuff.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.beanshell.org/

Package: libalgorithm-diff-xs-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 87
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.04-2build2
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.2.5), libalgorithm-diff-perl
Description: module to find differences between files (XS accelerated)
 Algorithm::Diff::XS is a Perl diff utility module based on Joe Schaefer's
 excellent but not very well-known Algorithm::LCS module, with a drop-in
 interface identical to Algorithm::Diff.
 .
 Note that only the LCSidx function is optimized in XS at the moment, which
 means only compact_diff will get significantly faster for large data sets,
 while diff and sdiff will run in identical speed as Algorithm::Diff.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Algorithm-Diff-XS/

Package: libcomerr2
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 97
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: e2fsprogs
Version: 1.42-1ubuntu2
Replaces: e2fsprogs (<< 1.34-1)
Provides: libcomerr-kth-compat
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: common error description library
 libcomerr is an attempt to present a common error-handling mechanism to
 manipulate the most common form of error code in a fashion that does not
 have the problems identified with mechanisms commonly in use.
Homepage: http://e2fsprogs.sourceforge.net
Original-Maintainer: Theodore Y. Ts'o <tytso@mit.edu>

Package: libaopalliance-java
Status: install ok installed
Priority: extra
Section: java
Installed-Size: 62
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 20070526-5
Suggests: libaopalliance-java-doc
Description: library for interoperability for Java AOP implementations
 Aspect-Oriented Programming (AOP) offers a better solution to
 many problems than do existing technologies such as EJB.
 .
 The AOP Alliance aims to ensure interoperability between Java AOP
 implementations by providing standard interfaces common among the different
 frameworks and implementations.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://aopalliance.sourceforge.net/

Package: libfile-listing-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 55
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.03-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, libhttp-date-perl
Breaks: libwww-perl (<< 6.00)
Description: module to parse directory listings
 File::Listing exports a single function called parse_dir(), which can be used
 to parse directory listings.
 .
 The first parameter to parse_dir() is the directory listing to parse. It can
 be a scalar, a reference to an array of directory lines or a glob
 representing a filehandle to read the directory listing from.
 .
 The second parameter is the time zone to use when parsing time stamps in the
 listing. If this value is undefined, then the local time zone is assumed.
 .
 The third parameter is the type of listing to assume. Currently supported
 formats are 'unix', 'apache' and 'dosftp'. The default value 'unix'.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/File-Listing/

Package: language-pack-en-base
Status: install ok installed
Priority: optional
Section: translations
Installed-Size: 4057
Maintainer: Language pack maintainers <language-packs@ubuntu.com>
Architecture: all
Version: 1:12.04+20120801
Replaces: language-pack-en (<< 1:12.04+20120801), language-pack-en-base (<< 1:12.04+20120801), language-pack-gnome-en (<< 1:12.04+20120801), language-pack-gnome-en-base (<< 1:12.04+20120801), language-pack-kde-en (<< 1:12.04+20120801), language-pack-kde-en-base (<< 1:12.04+20120801)
Depends: locales (>= 2.3.6), language-pack-en (>= 1:12.04+20120801)
Pre-Depends: dpkg (>= 1.10.27ubuntu1)
Recommends: firefox-locale-en
Conflicts: language-pack-en (<< 1:12.04+20120801)
Description: translations for language English
 Translation data for all supported packages for:
 English
 .
 This package provides the bulk of translation data and is updated
 only seldom. language-pack-en provides frequent
 translation updates, so you should install this as well.

Package: python-serial
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 374
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: pyserial
Version: 2.5-2.1build1
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Suggests: python-wxgtk2.8 | python-wxgtk2.6 | python-wxgtk
Description: pyserial - module encapsulating access for the serial port
 This module capsulates the access for the serial port. It provides
 backends for standard Python running on Windows, Linux, BSD (possibly
 any POSIX compilant system). The module named "serial" automatically
 selects the appropriate backend.
Original-Maintainer: Matthias Klose <doko@debian.org>
Python-Version: 2.7

Package: mawk
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 197
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.3.3-17
Provides: awk
Pre-Depends: libc6 (>= 2.14)
Description: a pattern scanning and text processing language
 Mawk is an interpreter for the AWK Programming Language. The AWK
 language is useful for manipulation of data files, text retrieval and
 processing, and for prototyping and experimenting with algorithms. Mawk
 is a new awk meaning it implements the AWK language as defined in Aho,
 Kernighan and Weinberger, The AWK Programming Language, Addison-Wesley
 Publishing, 1988. (Hereafter referred to as the AWK book.) Mawk conforms
 to the POSIX 1003.2 (draft 11.3) definition of the AWK language
 which contains a few features not described in the AWK book, and mawk
 provides a small number of extensions.
 .
 Mawk is smaller and much faster than gawk. It has some compile-time
 limits such as NF = 32767 and sprintf buffer = 1020.
Original-Maintainer: Steve Langasek <vorlon@debian.org>

Package: libcommons-net2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 262
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.2-1ubuntu1
Suggests: libcommons-net2-java-doc
Description: internet protocol suite Java library
 This is an Internet protocol suite Java library originally developed by
 ORO, Inc. This version supports Finger, Whois, TFTP, Telnet, POP3, FTP,
 NNTP, SMTP, and some miscellaneous protocols like Time and Echo as well
 as BSD R command support. The purpose of the library is to provide
 fundamental protocol access, not higher-level abstractions. Therefore,
 some of the design violates object-oriented design principles. Our
 philosophy is to make the global functionality of a protocal accesible
 (e.g., TFTP send file and receive file) when possible, but also provide
 access to the fundamental protocols where applicable so that the
 programmer may construct his own custom implementations (e.g, the TFTP
 packet classes and the TFTP packet send and receive methods are
 exposed). NetComponents was originally a commercial product, but after
 ORO dissolved, it was continued to be made available for those who
 found it useful. However, no updates have been made since version
 1.3.8, released in 1998. Now that certain contract obligations have
 expired, it is possible to make the source code freely available under
 the Apache Software License.
 .
 This is a part of the Apache Jakarta Project.
Homepage: http://commons.apache.org/net/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: plymouth-theme-ubuntu-text
Status: install ok installed
Priority: optional
Section: x11
Installed-Size: 77
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: plymouth
Version: 0.8.2-2ubuntu30
Replaces: plymouth (<< 0.8.1-1~)
Provides: plymouth-theme
Depends: libc6 (>= 2.2.5), libplymouth2 (>= 0.8.0~-13~ppa1), plymouth
Description: graphical boot animation and logger - ubuntu-logo theme
 Plymouth is an application that runs very early in the boot process
 (even before the root filesystem is mounted!) that provides a graphical
 boot animation while the boot process happens in the background.
 .
 This package contains the default ubuntu-text text theme used when no
 support for a graphical theme is found on your system.

Package: groff-base
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: text
Installed-Size: 2779
Maintainer: Colin Watson <cjwatson@debian.org>
Architecture: amd64
Source: groff
Version: 1.21-7
Replaces: groff (<< 1.20.1-6), jgroff (<< 1.17-1)
Depends: libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.1.1)
Suggests: groff
Breaks: groff (<< 1.17-1), jgroff (<< 1.17-1), pmake (<< 1.45-7), troffcvt (<< 1.04-14)
Conffiles:
 /etc/groff/mdoc.local ff5789529422421c5e5128f22c248e0c
 /etc/groff/man.local f2c6e1f0ab35c26505d35e3abbda7606
Description: GNU troff text-formatting system (base system components)
 This package contains the traditional UN*X text formatting tools
 troff, nroff, tbl, eqn, and pic. These utilities, together with the
 man-db package, are essential for displaying the on-line manual pages.
 .
 groff-base is a stripped-down package containing the necessary components
 to read manual pages in ASCII, Latin-1, and UTF-8, plus the PostScript
 device (groff's default). Users who want a full groff installation, with
 the standard set of devices, fonts, macros, and documentation, should
 install the groff package.
Homepage: http://groff.ffii.org/

Package: gcj-4.6-base
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 163
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcj-4.6
Version: 4.6.3-1ubuntu2
Description: GCC, the GNU Compiler Collection (gcj base package)
 This package contains files common to all java related packages
 built from the GNU Compiler Collection (GCC).
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: gnupg
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: utils
Installed-Size: 1940
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.4.11-3ubuntu2.2
Depends: libbz2-1.0, libc6 (>= 2.15), libreadline6 (>= 6.0), libusb-0.1-4 (>= 2:0.1.12), zlib1g (>= 1:1.1.4), dpkg (>= 1.15.4) | install-info, gpgv
Suggests: gnupg-curl, gnupg-doc, xloadimage | imagemagick | eog, libpcsclite1
Description: GNU privacy guard - a free PGP replacement
 GnuPG is GNU's tool for secure communication and data storage.
 It can be used to encrypt data and to create digital signatures.
 It includes an advanced key management facility and is compliant
 with the proposed OpenPGP Internet standard as described in RFC 4880.
 .
 GnuPG 1.4 is the standalone, non-modularized series. In contrast to
 the version 2 series, shipped with the gnupg2 package, it comes
 with no support for S/MIME and some other tools useful for desktop
 environments, but also with less dependencies.
 .
 The gnupg package is built without libcurl. So it does not support
 HKPS keyservers. Install the gnupg-curl package if you want to use
 the keyserver helper tools built with libcurl and supporting HKPS.
 .
 GnuPG does not use any patented algorithms. This means it cannot be
 compatible with PGP2, because that uses IDEA (which is patented in
 a number of countries).
Homepage: http://www.gnupg.org
Original-Maintainer: Debian GnuPG-Maintainers <pkg-gnupg-maint@lists.alioth.debian.org>

Package: libhttp-daemon-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 80
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.00-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, libhttp-message-perl, libhttp-date-perl, liblwp-mediatypes-perl
Breaks: libwww-perl (<< 6.00)
Description: simple http server class
 Instances of the HTTP::Daemon class are HTTP/1.1 servers that listen on a
 socket for incoming requests. The HTTP::Daemon is a subclass of
 IO::Socket::INET, so you can perform socket operations directly on it too.
 .
 The accept() method will return when a connection from a client is available.
 The returned value will be an HTTP::Daemon::ClientConn object which is
 another IO::Socket::INET subclass. Calling the get_request() method on this
 object will read data from the client and return an HTTP::Request object. The
 ClientConn object also provide methods to send back various responses.
 .
 This HTTP daemon does not fork(2) for you. Your application, i.e. the user of
 the HTTP::Daemon is responsible for forking if that is desirable. Also note
 that the user is responsible for generating responses that conform to the
 HTTP/1.1 protocol.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTTP-Daemon/

Package: libhamcrest-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 440
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.1-8
Description: library of matchers for building test expressions
 Provides a library of matcher objects (also known as constraints or
 predicates) allowing 'match' rules to be defined declaratively, to be
 used in other frameworks. Typical scenarios include testing
 frameworks, mocking libraries and UI validation rules.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://code.google.com/p/hamcrest/

Package: libplexus-build-api-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 68
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-build-api
Version: 0.0.4-4
Depends: libplexus-utils-java
Suggests: libplexus-build-api-java-doc
Description: Incremental build API for Plexus components.
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
 .
 This package provides an incremental build API for Plexus components.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: https://github.com/sonatype/sisu-build-api

Package: librhino-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1161
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: rhino
Version: 1.7R3-5
Replaces: rhino (<< 1.7R3~pre-2)
Suggests: rhino
Conflicts: rhino (<< 1.7R3~pre-2)
Description: Libraries for rhino Java Script Engine
 Rhino is an implementation of the JavaScript language written
 entirely in Java. It is typically embedded into Java applications to
 provide scripting to end users.
 .
 This package contains only Java library and no interpreter. For
 Rhino interpreter, you install rhino package.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.mozilla.org/rhino/

Package: libnewt0.52
Status: install ok installed
Priority: important
Section: libs
Installed-Size: 184
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: newt
Version: 0.52.11-2ubuntu10
Replaces: libnewt-utf8, libnewt0, libnewt0.51
Depends: libc6 (>= 2.15), libslang2 (>= 2.0.7-1)
Recommends: libfribidi0
Conflicts: libnewt0.51
Conffiles:
 /etc/newt/palette.ubuntu d0fd66665cec1557ad2ea291a662c620
 /etc/newt/palette.original db320e5fbe7aa3b164b4ed2dfd8134ae
Description: Not Erik's Windowing Toolkit - text mode windowing with slang
 Newt is a windowing toolkit for text mode built from the slang library.
 It allows color text mode applications to easily use stackable windows,
 push buttons, check boxes, radio buttons, lists, entry fields, labels,
 and displayable text. Scrollbars are supported, and forms may be nested
 to provide extra functionality. This package contains the shared library
 for programs that have been built with newt.
Homepage: https://fedorahosted.org/newt/
Original-Maintainer: Alastair McKinstry <mckinstry@debian.org>

Package: ltrace
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 224
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.5.3-2.1ubuntu2
Depends: libc6 (>= 2.7), libelf1 (>= 0.131)
Conffiles:
 /etc/ltrace.conf e11b034b34cef8bb83e413235c1ad017
Description: Tracks runtime library calls in dynamically linked programs
 ltrace is a debugging program which runs a specified command until it
 exits.  While the command is executing, ltrace intercepts and records
 the dynamic library calls which are called by
 the executed process and the signals received by that process.
 It can also intercept and print the system calls executed by the program.
 .
 The program to be traced need not be recompiled for this, so you can
 use it on binaries for which you don't have the source handy.
 .
 You should install ltrace if you need a sysadmin tool for tracking the
 execution of processes.
Original-Maintainer: Juan Cespedes <cespedes@debian.org>

Package: libalgorithm-diff-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 160
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.19.02-2
Depends: perl
Recommends: libalgorithm-diff-xs-perl
Description: module to find differences between files
 Algorithm::Diff is a Perl module that allows users to analyze text based on a
 Longest Common Subsequence (LCS) algorithm. It can compare two files and find
 the differences between them, which can produce the same information as the
 common Unix tool 'diff'.
 .
 There is an XS-optimized implementation of the core loop, which accelerates
 some types of diff output (see libalgorithm-diff-xs-perl).
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Algorithm-Diff/

Package: x11-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 489
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: all
Source: xorg
Version: 1:7.6+12ubuntu1
Depends: debconf (>= 0.5) | debconf-2.0, lsb-base (>= 1.3-9ubuntu2)
Conffiles:
 /etc/X11/rgb.txt 09ee098b83d94c7c046d6b55ebe84ae1
 /etc/X11/Xreset 05d188ccac2f3360af8fe0c216640233
 /etc/X11/Xreset.d/README b344c222b5daf81926fd3270df374b5f
 /etc/X11/Xsession 50678401170c9c701d2375bd279690c5
 /etc/X11/Xsession.d/20x11-common_process-args 862c8286749d25fe58dd98cad24c3fe4
 /etc/X11/Xsession.d/30x11-common_xresources 61cebe25ee0c64e981b88958dfee6f9c
 /etc/X11/Xsession.d/35x11-common_xhost-local 3080616d080574d7b06c2b2a20af53dd
 /etc/X11/Xsession.d/40x11-common_xsessionrc db544c8543d1cb3762b9859288e77040
 /etc/X11/Xsession.d/50x11-common_determine-startup b4570043736ae7f22947067b6d28ab8d
 /etc/X11/Xsession.d/60x11-common_localhost 2353ea72efc0c3e101058c3c56e282b4
 /etc/X11/Xsession.d/60x11-common_xdg_path 2e26bf3ff07f92cbfd1b12a63047f6c4
 /etc/X11/Xsession.d/90x11-common_ssh-agent ae74aadf705c5fccf841ef921b45ca72
 /etc/X11/Xsession.d/99x11-common_start 3874d5e8f3ec888f69adb126e223e168
 /etc/X11/Xsession.options 210cd520efa87a5197cac01e10b3a84a
 /etc/X11/Xresources/x11-common b640adb1cd646ec097f8df5b6deca9f0
 /etc/init.d/x11-common aacceda738fb4e684ff00b5ac3fb6c0a
Description: X Window System (X.Org) infrastructure
 x11-common contains the filesystem infrastructure required for further
 installation of the X Window System in any configuration; it does not
 provide a full installation of clients, servers, libraries, and utilities
 required to run the X Window System.
 .
 A number of terms are used to refer to the X Window System, including "X",
 "X Version 11", "X11", "X11R6", and "X11R7".  The version of X used in
 Debian is derived from the version released by the X.Org Foundation, and
 is thus often also referred to as "X.Org".  All of the preceding quoted
 terms are functionally interchangeable in an Debian system.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libasync-http-client-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 398
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: async-http-client
Version: 1.6.5-1
Depends: libnetty-java (>= 3.2.6.Final), libslf4j-java
Recommends: libcommons-httpclient-java, libcommons-lang-java, libcommons-logging-java
Suggests: libasync-http-client-java-doc
Description: Java Asynchronous HTTP Client
 Async HTTP Client library purpose is to allow Java applications to easily
 execute HTTP requests and asynchronously process the HTTP responses.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://github.com/sonatype/async-http-client

Package: libaugeas0
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 391
Maintainer: Raphaël Pinson <raphink@ubuntu.com>
Architecture: amd64
Source: augeas
Version: 0.10.0-0ubuntu4
Depends: libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libxml2 (>= 2.7.4), augeas-lenses
Suggests: augeas-tools
Description: Augeas configuration editing library and API
 Augeas is a configuration editing tool. It parses configuration files in their
 native formats and transforms them into a tree. Configuration changes are made
 by manipulating this tree and saving it back into native config files.
 .
 The transformation works very hard to preserve comments and formatting
 details. It is controlled by ''lens'' definitions that describe the file
 format and the transformation into a tree.
Homepage: http://augeas.net/
Original-Maintainer: Nicolas Valcárcel Scerpella (Canonical) <nicolas.valcarcel@canonical.com>

Package: net-tools
Status: install ok installed
Priority: important
Section: net
Installed-Size: 724
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.60-24.1ubuntu2
Replaces: ja-trans (<= 0.8-2), netbase (<< 4.00)
Depends: libc6 (>= 2.14)
Conflicts: ja-trans (<= 0.8-2)
Description: The NET-3 networking toolkit
 This package includes the important tools for controlling the network
 subsystem of the Linux kernel.  This includes arp, ifconfig, netstat,
 rarp, nameif and route.  Additionally, this package contains utilities
 relating to particular network hardware types (plipconfig, slattach,
 mii-tool) and advanced aspects of IP configuration (iptunnel, ipmaddr).
 .
 In the upstream package 'hostname' and friends are included. Those are
 not installed by this package, since there is a special "hostname*.deb".
Homepage: http://net-tools.berlios.de/
Original-Maintainer: net-tools Team <pkg-net-tools-maintainers@lists.alioth.debian.org>

Package: wireless-regdb
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: net
Installed-Size: 52
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2011.04.28-1ubuntu3
Suggests: crda
Description: wireless regulatory database
 This package contains the wireless regulatory database used by the Central
 Regulatory Database Agent (CRDA) to configure wireless devices to operate
 within the radio spectrum allowed in the local jurisdiction.
 .
 This regulatory information is provided with no warranty either expressed or
 implied. Only Linux drivers which use cfg80211 framework can make use of the
 regulatory database and CRDA.
Homepage: http://wireless.kernel.org/en/developers/Regulatory/#Theregulatorydatabase
Original-Maintainer: Ben Hutchings <ben@decadent.org.uk>

Package: ca-certificates-java
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: java
Installed-Size: 70
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 20110912ubuntu6
Depends: ca-certificates (>= 20090814), openjdk-6-jre-headless (>= 6b16-1.6.1-2) | java6-runtime-headless, libnss3-1d (>= 3.12.9+ckbi-1.82-0ubuntu3~)
Conffiles:
 /etc/default/cacerts 0ded97abeff69c2362939e2e881e214a
 /etc/ca-certificates/update.d/jks-keystore a7673ed420f0e46cf101aed983a1d5db
Description: Common CA certificates (JKS keystore)
 This package uses the hooks of the ca-certificates package to update the
 cacerts JKS keystore used for many java runtimes.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libxfixes3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 61
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxfixes
Version: 1:5.0-4ubuntu4
Depends: libc6 (>= 2.14), libx11-6 (>= 2:1.4.99.1)
Pre-Depends: multiarch-support
Breaks: unity (<< 5.6.0-0ubuntu2)
Description: X11 miscellaneous 'fixes' extension library
 libXfixes provides an X Window System client interface to the 'XFIXES'
 extension to the X protocol.
 .
 It provides support for Region types, and some cursor functions.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXfixes
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libsndfile1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 509
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libsndfile
Version: 1.0.25-4
Depends: libc6 (>= 2.7), libflac8 (>= 1.2.1), libogg0 (>= 1.0rc3), libvorbis0a (>= 1.2.3), libvorbisenc2 (>= 1.1.2)
Pre-Depends: multiarch-support
Description: Library for reading/writing audio files
 libsndfile is a library of C routines for reading and writing files containing
 sampled audio data.
 .
 Various versions of WAV (integer, floating point, GSM, and compressed formats);
 Microsoft PCM, A-law and u-law formats; AIFF, AIFC and RIFX; various AU/SND
 formats (Sun/NeXT, Dec AU, G721 and G723 ADPCM); RAW header-less PCM files;
 Amiga IFF/8SVX/16SV PCM files; Ensoniq PARIS  (.PAF); Apple's Core Audio Format
 (CAF) and others.
Original-Maintainer: Erik de Castro Lopo <erikd@mega-nerd.com>
Homepage: http://www.mega-nerd.com/libsndfile/

Package: whoopsie
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 104
Maintainer: Evan Dandrea <ev@ubuntu.com>
Architecture: amd64
Source: whoopsie-daisy
Version: 0.1.32
Depends: libc6 (>= 2.8), libcurl3 (>= 7.16.2-1), libgcrypt11 (>= 1.4.5), libglib2.0-0 (>= 2.31.8), upstart-job, adduser
Pre-Depends: dpkg (>= 1.15.7.2)
Conffiles:
 /etc/init/whoopsie.conf 556e585ea8031e4ad3bf18c3e327fa01
 /etc/default/whoopsie c17ce59a6bf167443b2b673bb57ba885
Description: Ubuntu crash database submission daemon
 This program submits crash reports back to an Ubuntu server.
Homepage: http://wiki.ubuntu.com/ErrorTracker

Package: libaccountsservice0
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 106
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: accountsservice
Version: 0.6.15-2ubuntu9.4
Depends: libc6 (>= 2.4), libdbus-1-3 (>= 1.0.2), libdbus-glib-1-2 (>= 0.78), libglib2.0-0 (>= 2.25.11)
Breaks: accountsservice (<< 0.6.5)
Description: query and manipulate user account information - shared libraries
 The AccountService project provides a set of D-Bus
 interfaces for querying and manipulating user account
 information and an implementation of these interfaces,
 based on the useradd, usermod and userdel commands.
 .
 This package provides the shared libraries of the
 AccountService library.
Homepage: http://cgit.freedesktop.org/accountsservice/
Original-Maintainer: Alessio Treglia <alessio@debian.org>

Package: debconf-i18n
Status: install ok installed
Priority: important
Section: localization
Installed-Size: 1075
Maintainer: Colin Watson <cjwatson@ubuntu.com>
Architecture: all
Source: debconf
Version: 1.5.42ubuntu1
Replaces: debconf (<< 1.3.0), debconf-utils (<< 1.3.22)
Depends: debconf, liblocale-gettext-perl, libtext-iconv-perl, libtext-wrapi18n-perl, libtext-charwidth-perl
Conflicts: debconf-english, debconf-utils (<< 1.3.22)
Description: full internationalization support for debconf
 This package provides full internationalization for debconf, including
 translations into all available languages, support for using translated
 debconf templates, and support for proper display of multibyte character
 sets.
Original-Maintainer: Debconf Developers <debconf-devel@lists.alioth.debian.org>

Package: fuse
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 156
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.8.6-2ubuntu2
Replaces: fuse-utils
Depends: libc6 (>= 2.14), libfuse2 (= 2.8.6-2ubuntu2), adduser, mount (>= 2.19.1), sed (>= 4), udev | makedev
Conflicts: fuse-utils (<< 2.8.5-2~), loop-aes-utils
Conffiles:
 /etc/fuse.conf c9457cf5b2196da67d5ac816d1c86a4f
Description: Filesystem in Userspace
 Filesystem in Userspace (FUSE) is a simple interface for userspace programs to
 export a virtual filesystem to the Linux kernel. It also aims to provide a
 secure method for non privileged users to create and mount their own filesystem
 implementations.
Homepage: http://fuse.sourceforge.net/
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>

Package: acpid
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 156
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:2.0.10-1ubuntu3
Depends: libc6 (>= 2.7), upstart-job, lsb-base (>= 3.2-14), module-init-tools (>> 3.1-rel-2)
Conffiles:
 /etc/acpi/events/powerbtn 57f021ab2369f211018d6e7d11434314
 /etc/acpi/powerbtn.sh ee194bed50e3f5f44824b3ce70a6ec96
 /etc/init/acpid.conf 5ed634f9848d884b1314afc5ae92e2d6
 /etc/default/acpid 8905607a50c80a1fb8ee1e09fc8dc3f2
Description: Advanced Configuration and Power Interface event daemon
 Modern computers support the Advanced Configuration and Power Interface (ACPI)
 to allow intelligent power management on your system and to query battery and
 configuration status.
 .
 ACPID is a completely flexible, totally extensible daemon for delivering
 ACPI events. It listens on netlink interface (or on the deprecated file
 /proc/acpi/event), and when an event occurs, executes programs to handle the
 event. The programs it executes are configured through a set of configuration
 files, which can be dropped into place by packages or by the admin.
Homepage: http://www.tedfelix.com/linux/acpid-netlink.html
Original-Maintainer: Debian Acpi Team <pkg-acpi-devel@lists.alioth.debian.org>

Package: libdom4j-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 539
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: dom4j
Version: 1.6.1+dfsg.2-5
Depends: libjaxen-java, libjaxme-java, libxpp2-java, libxpp3-java, libbackport-util-concurrent-java
Suggests: libdom4j-java-doc
Description: flexible XML framework for Java
 dom4j is a library for working with XML, XPath and XSLT on the Java
 platform using the Java Collections Framework and with full support
 for DOM, SAX and JAXP.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://sourceforge.net/projects/dom4j/

Package: grep
Essential: yes
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 608
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.10-1
Provides: rgrep
Depends: dpkg (>= 1.15.4) | install-info
Pre-Depends: libc6 (>= 2.4)
Suggests: libpcre3 (>= 7.7)
Conflicts: rgrep
Description: GNU grep, egrep and fgrep
 'grep' is a utility to search for text in files; it can be used from the
 command line or in scripts.  Even if you don't want to use it, other packages
 on your system probably will.
 .
 The GNU family of grep utilities may be the "fastest grep in the west".
 GNU grep is based on a fast lazy-state deterministic matcher (about
 twice as fast as stock Unix egrep) hybridized with a Boyer-Moore-Gosper
 search for a fixed string that eliminates impossible text from being
 considered by the full regexp matcher without necessarily having to
 look at every character. The result is typically many times faster
 than Unix grep or egrep. (Regular expressions containing backreferencing
 will run more slowly, however.)
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://www.gnu.org/software/grep/

Package: python-paramiko
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 7015
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: paramiko
Version: 1.7.7.1-2
Provides: python2.7-paramiko
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-crypto (>= 2.1.0-2)
Description: Make ssh v2 connections with Python
 This is a library for making SSH2 connections (client or server).
 Emphasis is on using SSH2 as an alternative to SSL for making secure
 connections between Python scripts.  All major ciphers and hash methods
 are supported.  SFTP client and server mode are both supported too.
Original-Maintainer: Jeremy T. Bouse <jbouse@debian.org>
Homepage: http://www.lag.net/paramiko/

Package: libjson-xs-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 226
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.320-1build1
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.4), libcommon-sense-perl
Description: module for manipulating JSON-formatted data (C/XS-accelerated)
 JSON::XS is a module for manipulating data stored in the JavaScript Object
 Notation (JSON) serialization format (defined in RFC 4627), which serves as
 an alternative to XML.
 .
 This C/XS-accelerated JSON implementation confers significant performance
 gains if available. After installing this package, any code using the JSON
 module (see libjson-perl) will automagically benefit from this.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/JSON-XS/

Package: libnl-genl-3-200
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 59
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libnl3
Version: 3.2.3-2ubuntu2
Depends: libnl-3-200 (= 3.2.3-2ubuntu2), libc6 (>= 2.4)
Description: library for dealing with netlink sockets - generic netlink
 This is a library for applications dealing with netlink sockets.
 The library provides an interface for raw netlink messaging and various
 netlink family specific interfaces.
 .
 API to the generic netlink protocol, an extended version of the netlink
 protocol.
Homepage: http://people.suug.ch/~tgr/libnl/
Original-Maintainer: Heiko Stuebner <mmind@debian.org>

Package: busybox-static
Status: install ok installed
Priority: extra
Section: shells
Installed-Size: 1873
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: busybox
Version: 1:1.18.5-1ubuntu4.1
Replaces: busybox
Conflicts: busybox
Description: Standalone rescue shell with tons of builtin utilities
 BusyBox combines tiny versions of many common UNIX utilities into a single
 small executable. It provides minimalist replacements for the most common
 utilities you would usually find on your desktop system (i.e., ls, cp, mv,
 mount, tar, etc.).  The utilities in BusyBox generally have fewer options than
 their full-featured GNU cousins; however, the options that are included
 provide the expected functionality and behave very much like their GNU
 counterparts.
 .
 busybox-static provides you with a statically linked simple stand alone shell
 that provides all the utilities available in BusyBox. This package is
 intended to be used as a rescue shell, in the event that you screw up your
 system. Invoke "busybox sh" and you have a standalone shell ready to save
 your system from certain destruction. Invoke "busybox", and it will list the
 available builtin commands.
Homepage: http://www.busybox.net
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: libplexus-interactivity-api-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 75
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-interactivity-api
Version: 1.0-alpha-6-6
Depends: libplexus-containers-java, libplexus-utils-java
Suggests: libplexus-interactivity-api-java-doc
Description: interactivity API for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-components/plexus-interactivity/

Package: plymouth
Status: install ok installed
Priority: required
Section: x11
Installed-Size: 441
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.8.2-2ubuntu30
Depends: libc6 (>= 2.14), libdbus-1-3 (>= 1.1.1), libdrm-intel1 (>= 2.4.9), libdrm-nouveau1a (>= 2.4.23), libdrm-radeon1 (>= 2.4.17), libdrm2 (>= 2.4.3), libplymouth2 (= 0.8.2-2ubuntu30), libtinfo5, upstart-job, udev (>= 166-0ubuntu4), mountall (>= 2.0), initramfs-tools
Recommends: plymouth-theme-ubuntu-text | plymouth-theme
Breaks: gdm (<< 3.0.4-0ubuntu11), kdm (<< 4:4.7.1-0ubuntu3), lightdm (<< 0.9.7-0ubuntu2), lubuntu-plymouth-theme (<= 0.4), lxdm (<< 0.4.1-0ubuntu2), ubuntustudio-plymouth-theme (<= 0.38), xubuntu-plymouth-theme (<< 10.04.4)
Conflicts: usplash
Conffiles:
 /etc/init/plymouth.conf f8bddf7212b2362f9e37ae9f3a343481
 /etc/init/plymouth-log.conf 65d2943a69f455dec3fed43fd7996d76
 /etc/init/plymouth-splash.conf 2c0582725491da66e2d09280847e0452
 /etc/init/plymouth-stop.conf 85e687292436631eaa98959be0bad17a
 /etc/init/plymouth-upstart-bridge.conf b2c90588cf9a0cd8a91ad58f67aa7e0e
Description: graphical boot animation and logger - main package
 Plymouth is an application that runs very early in the boot process
 (even before the root filesystem is mounted!) that provides a graphical
 boot animation while the boot process happens in the background.

Package: jsvc
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 89
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: commons-daemon
Version: 1.0.8-1
Depends: libc6 (>= 2.4), libcap2 (>= 2.10), libcommons-daemon-java
Recommends: default-jre-headless | java2-runtime-headless
Description: wrapper to launch Java applications as daemons
 This is the native application for launching Java applications
 implementing certain interfaces from the libcommons-daemon-java
 package as daemons.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/daemon/

Package: glassfish-javaee
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1848
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: glassfish
Version: 1:2.1.1-b31g-1
Description: Open source Java EE 5 Application Server
 The GlassFish community is building free, open source,
 production-quality, enterprise software. The main deliverables are an
 Application Server, the Java EE 5 Reference Implementation, and the
 Java Persistence API Reference Implementation, TopLink Essentials.
 .
 This package ships only the Java EE 5 Reference Implementation
 components of GlassFish.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: https://glassfish.dev.java.net/

Package: libcommons-validator-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 290
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:1.3.1-8
Depends: libcommons-beanutils-java (>= 1.7), libcommons-collections-java (>= 2.1), libcommons-digester-java (>= 1.6), libcommons-logging-java (>= 1.0.4), sgml-base (>= 1.17)
Recommends: liboro-java (>= 2.0.8)
Description: ease and speed development and maintenance of validation rules
 The Commons Validator is a basic validation framework
 that lets you define validation rules for a JavaBean
 in an xml file.
 .
 Validation rules can be defined in an xml file which
 keeps them abstracted from JavaBean you are validating.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/validator/

Package: python-problem-report
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 156
Maintainer: Martin Pitt <martin.pitt@ubuntu.com>
Architecture: all
Source: apport
Version: 2.0.1-0ubuntu17.1
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Description: Python library to handle problem reports
 This Python library provides an interface for creating, modifying,
 and accessing standardized problem reports for program and kernel
 crashes and packaging bugs.
 .
 These problem reports use standard Debian control format syntax
 (RFC822).
Homepage: https://wiki.ubuntu.com/Apport

Package: kbd
Status: install ok installed
Priority: extra
Section: utils
Installed-Size: 996
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.15.2-3ubuntu4
Replaces: open, util-linux (<< 2.11)
Provides: console-utilities, open
Depends: libc6 (>= 2.14), console-setup, lsb-base (>= 3.0-10), initramfs-tools
Pre-Depends: dpkg (>= 1.15.7.2)
Breaks: util-linux (<< 2.11)
Conflicts: console-utilities, kbd-data, open
Conffiles:
 /etc/kbd/remap 2f1f15d62b45ab43c04b3ddbfcf591ec
 /etc/kbd/config 7675e7d682fcc2633d00990fc1a38c29
Description: Linux console font and keytable utilities
 This package allows you to set up the Linux console, change the font,
 resize text mode virtual consoles and remap the keyboard.
 .
 You will probably want to install a set of data files, such as the one
 in the “console-setup” package.
Original-Maintainer: Console utilities maintainers <pkg-kbd-devel@lists.alioth.debian.org>

Package: libnss3-1d
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 82
Maintainer: Ubuntu Mozilla Team <ubuntu-mozillateam@lists.ubuntu.com>
Architecture: amd64
Source: nss
Version: 3.14.1-0ckbi1.93ubuntu.0.12.04.1
Depends: libnss3 (= 3.14.1-0ckbi1.93ubuntu.0.12.04.1)
Description: Network Security Service libraries
 This is a set of libraries designed to support cross-platform development
 of security-enabled client and server applications. It can support SSLv2
 and  v4, TLS, PKCS #5, #7, #11, #12, S/MIME, X.509 v3 certificates and
 other security standards.
 .
 This package contains versioned symbolic links for Debian compatibility.
Homepage: http://www.mozilla.org/projects/security/pki/nss/
Original-Maintainer: Maintainers of Mozilla-related packages <pkg-mozilla-maintainers@lists.alioth.debian.org>

Package: libcurl3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 546
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: curl
Version: 7.22.0-3ubuntu4
Replaces: libcurl2 (<< 1:7.11.2-2), libcurl4
Depends: libc6 (>= 2.15), libgssapi-krb5-2 (>= 1.10+dfsg~), libidn11 (>= 1.13), libldap-2.4-2 (>= 2.4.7), librtmp0 (>= 2.3), libssl1.0.0 (>= 1.0.0), zlib1g (>= 1:1.1.4), ca-certificates
Pre-Depends: multiarch-support
Conflicts: libcurl4
Description: Multi-protocol file transfer library (OpenSSL)
 libcurl is designed to be a solid, usable, reliable and portable
 multi-protocol file transfer library.
 .
 SSL support is provided by OpenSSL.
 .
 This is the shared version of libcurl.
Homepage: http://curl.haxx.se
Original-Maintainer: Ramakrishnan Muthukrishnan <rkrishnan@debian.org>

Package: libxdamage1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 52
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxdamage
Version: 1:1.1.3-2build1
Depends: libc6 (>= 2.2.5), libx11-6 (>= 2:1.4.99.1)
Pre-Depends: multiarch-support
Description: X11 damaged region extension library
 libXdamage provides an X Window System client interface to the DAMAGE
 extension to the X protocol.
 .
 The Damage extension provides for notification of when on-screen regions have
 been 'damaged' (altered).
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXdamage
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: keyboard-configuration
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 2172
Maintainer: Ubuntu Installer Team <ubuntu-installer@lists.ubuntu.com>
Architecture: all
Source: console-setup
Version: 1.70ubuntu5
Replaces: console-setup (<< 1.47), console-setup-mini (<< 1.47)
Depends: debconf (>= 1.5.34), upstart-job, liblocale-gettext-perl
Conflicts: console-setup (<< 1.47), console-setup-mini (<< 1.47)
Conffiles:
 /etc/init/console-setup.conf 7fe93d1fb1311225f741b61ebff20942
Description: system-wide keyboard preferences
 This package maintains the keyboard preferences in
 /etc/default/keyboard.  Other packages can use the information
 provided by this package in order to configure the keyboard on the
 console or in X Window.
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: upstart
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 1040
Maintainer: James Hunt <james.hunt@ubuntu.com>
Architecture: amd64
Version: 1.5-0ubuntu7
Replaces: startup-tasks, system-services, sysvinit, upstart-compat-sysv, upstart-job
Provides: startup-tasks, system-services, upstart-compat-sysv, upstart-job
Depends: libc6 (>= 2.9), libdbus-1-3 (>= 1.2.16), libnih-dbus1 (>= 1.0.0), libnih1 (>= 1.0.0), libudev0 (>= 151), sysvinit-utils, sysv-rc, initscripts, mountall, ifupdown (>= 0.6.10ubuntu5)
Suggests: python, graphviz, bash-completion
Breaks: friendly-recovery (<< 0.2.13), libc6 (<< 2.12.1-0ubuntu12)
Conflicts: lxcguest, startup-tasks, system-services, sysvinit, upstart-compat-sysv, upstart-job
Conffiles:
 /etc/logrotate.d/upstart 070767086a27883ec119e1dde779a856
 /etc/bash_completion.d/upstart 080f7eee4a3f3e5f76197eaa581fb4da
 /etc/init/flush-early-job-log.conf 09e959647877c39f6490ad29b8a35a28
 /etc/init/tty3.conf 6608f08adf00a282358a1eeb9bdcf78e
 /etc/init/console.conf 8d79b0205f2daffb473604ce53e1dc83
 /etc/init/tty6.conf e8ad2f0411614f9c8dc9c4e364763549
 /etc/init/tty1.conf f42f2298f711147ecf177054294861a7
 /etc/init/upstart-socket-bridge.conf 5f3eaca09ee1f03d5d0686ea99f8c051
 /etc/init/wait-for-state.conf 7a4d89f072e4ba9de84599627e53e011
 /etc/init/control-alt-delete.conf 16e6603524084b63b0f0ca04eb56757e
 /etc/init/shutdown.conf 559659602cefe7e8d3c1e76820f5ae5d
 /etc/init/rc-sysinit.conf a50c045d9390a6e6c43c18b19cd72fe5
 /etc/init/rc.conf 1b492dd211353c22963ee701a7881cdd
 /etc/init/rcS.conf 3c1a7f7685cc4bdeba2e5624ceb75581
 /etc/init/container-detect.conf 6bae6257355ad7322e7263e567817465
 /etc/init/tty2.conf 0d9326fdda081ac96d92bbc57ff773e4
 /etc/init/tty4.conf 2c78cd865d848bb2674104905151dbe2
 /etc/init/tty5.conf 6d5794f72a1098b008e53e326a6bb5a0
 /etc/init/upstart-udev-bridge.conf 2c24bb70877476b5e7016ccf6de745a4
 /etc/init/failsafe.conf 0b88eeccf6c8fd456e886aa7a76e3291
 /etc/dbus-1/system.d/Upstart.conf 64be74cddb0c74b7d98202b40389784c
Description: event-based init daemon
 upstart is a replacement for the /sbin/init daemon which handles
 starting of tasks and services during boot, stopping them during
 shutdown and supervising them while the system is running.
Homepage: http://upstart.ubuntu.com/

Package: libmysqlclient18
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 3449
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: mysql-5.5
Version: 5.5.28-0ubuntu0.12.04.3
Depends: mysql-common (>= 5.5.28-0ubuntu0.12.04.3), libc6 (>= 2.14), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Description: MySQL database client library
 MySQL is a fast, stable and true multi-user, multi-threaded SQL database
 server. SQL (Structured Query Language) is the most popular database query
 language in the world. The main goals of MySQL are speed, robustness and
 ease of use.
 .
 This package includes the client library.
Homepage: http://dev.mysql.com/
Original-Maintainer: Debian MySQL Maintainers <pkg-mysql-maint@lists.alioth.debian.org>

Package: mlocate
Status: install ok installed
Priority: standard
Section: utils
Installed-Size: 224
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.23.1-1ubuntu2
Depends: libc6 (>= 2.4), adduser
Conflicts: findutils (<= 4.2.31-1), slocate (<= 3.1-1.1)
Conffiles:
 /etc/updatedb.conf c5094a717466f255c102bcc0a1103ab8
 /etc/cron.daily/mlocate dacff83a18b83a8762c82db7c778139c
Description: quickly find files on the filesystem based on their name
 mlocate is a new implementation of locate, a tool to find files
 anywhere in the filesystem based on their name, using a fixed pattern
 or a regular expression. Unlike other tools like find(1), locate uses
 a previously created database to perform the search, allowing queries
 to execute much faster. This database is updated periodically from
 cron.
 .
 Several implementations of locate exist: the original implementation
 from GNU's findutils, slocate, and mlocate. The advantages of mlocate
 are:
 .
  * it indexes all the filesystem, but results of a search will only
    include files that the user running locate has access to. It does
    this by updating the database as root, but making it unreadable for
    normal users, who can only access it via the locate binary. slocate
    does this as well, but not the original locate.
 .
  * instead of re-reading all the contents of all directories each time
    the database is updated, mlocate keeps timestamp information in its
    database and can know if the contents of a directory changed without
    reading them again. This makes updates much faster and less demanding
    on the hard drive. This feature is only found in mlocate.
 .
 Installing mlocate will change the /usr/bin/locate binary to point to
 mlocate via the alternatives mechanism. After installation, you may
 wish to run /etc/cron.daily/mlocate by hand to create the database,
 otherwise mlocate won't work until that script is run from cron itself
 (since mlocate does not use the same database file as standard locate).
 Also, you may wish to remove the "locate" package in order not to have
 two different database files updated regularly on your system.
Homepage: http://carolina.mff.cuni.cz/~trmac/blog/mlocate
Original-Maintainer: Tollef Fog Heen <tfheen@debian.org>

Package: ureadahead
Status: install ok installed
Priority: required
Section: admin
Installed-Size: 124
Maintainer: Scott James Remnant <scott@ubuntu.com>
Architecture: amd64
Version: 0.100.0-12
Replaces: readahead
Provides: readahead
Depends: e2fslibs (>= 1.41.99), libblkid1 (>= 2.16), libc6 (>= 2.7), libnih1 (>= 1.0.0), upstart (>= 0.6.0)
Conflicts: readahead
Conffiles:
 /etc/init/ureadahead-other.conf bd9285c6f7626d50bf183a36645f97fb
 /etc/init/ureadahead.conf d9e4b079e8778361dd1a8cce7377028d
Description: Read required files in advance
 über-readahead is used during boot to read files in advance of when
 they are needed such that they are already in the page cache,
 improving boot performance.
 .
 Its data files are regenerated on the first boot after install, and
 either monthly thereafter or when packages with init scripts or
 configs are installed or updated.
 .
 ureadahead requires a kernel patch included in the Ubuntu kernel.

Package: command-not-found-data
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 2911
Maintainer: Michael Vogt <michael.vogt@ubuntu.com>
Architecture: amd64
Source: command-not-found
Version: 0.2.46ubuntu6
Description: Set of data files for command-not-found.
 This package provides the required data used by the command-not-found
 application.
Original-Maintainer: Zygmunt Krynicki <zkrynicki@gmail.com>

Package: ftp
Status: install ok installed
Priority: standard
Section: net
Installed-Size: 176
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: netkit-ftp
Version: 0.17-25
Replaces: netstd
Depends: libc6 (>= 2.11), libreadline6 (>= 6.0), netbase
Description: classical file transfer client
 This is the user interface to the ARPANET standard File Transfer Protocol.
 The program allows a user to transfer files to and from a remote network
 site.
Original-Maintainer: Alberto Gonzalez Iniesta <agi@inittab.org>

Package: libpipeline1
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 88
Maintainer: Colin Watson <cjwatson@debian.org>
Architecture: amd64
Source: libpipeline
Version: 1.2.1-1
Depends: libc6 (>= 2.15)
Pre-Depends: multiarch-support
Description: pipeline manipulation library
 This is a C library for setting up and running pipelines of processes,
 without needing to involve shell command-line parsing which is often
 error-prone and insecure.
Homepage: http://libpipeline.nongnu.org/

Package: libcwidget3
Status: install ok installed
Priority: important
Section: libs
Installed-Size: 1072
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: cwidget
Version: 0.5.16-3.1ubuntu1
Depends: libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libncursesw5 (>= 5.6+20070908), libsigc++-2.0-0c2a (>= 2.0.2), libstdc++6 (>= 4.6)
Suggests: libcwidget-dev
Description: high-level terminal interface library for C++ (runtime files)
 libcwidget is a modern user interface library modeled on GTK+ and Qt,
 but using curses as its display layer and with widgets that are
 tailored to a terminal environment.
 .
 This package contains the files that are required to run programs
 compiled against libcwidget.
Homepage: http://cwidget.alioth.debian.org
Original-Maintainer: Daniel Burrows <dburrows@debian.org>

Package: bash-completion
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: shells
Installed-Size: 640
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:1.3-1ubuntu8
Replaces: bash, cryptsetup (<< 2:1.1.2-2), xen-tools (<= 4.1-1)
Depends: bash (>= 3.2)
Pre-Depends: dpkg (>= 1.15.7.2)
Conflicts: xen-tools (<= 4.1-1)
Conffiles:
 /etc/bash_completion.d/helpers/perl 979503470d51a6ec2a90a52f6bec12d3
 /etc/bash_completion.d/abook 1e44bd9d60692284b3f47c33ed3bd7e2
 /etc/bash_completion.d/ant b4628a7d4e06f8a3f73ffae0a7f68d58
 /etc/bash_completion.d/apache2ctl 6818cfc6a98849aeef18870f36cdf799
 /etc/bash_completion.d/apt 5c2724dd300a7b9cade1dd40266cabac
 /etc/bash_completion.d/apt-build e33d4e979843ccc3db2668daff582d8e
 /etc/bash_completion.d/aptitude 9ba76f9cb3f0836bc9e8a5d646314cca
 /etc/bash_completion.d/aspell 89470ae145088a2ba19b02f513191bae
 /etc/bash_completion.d/autoconf 05b8498983b3fbafb6c09d8cc18184bd
 /etc/bash_completion.d/automake 8eeb6e2677670055ca546da26e5123af
 /etc/bash_completion.d/autorpm e9b209cb4ec9a601c7ddea36081cfa69
 /etc/bash_completion.d/bash-builtins f89acc2f871285a347eb5e27c8c31b4a
 /etc/bash_completion.d/bind-utils 35c00f0be8a0d18e450e295b6f1985a5
 /etc/bash_completion.d/bitkeeper 38c166cdfa094fc231f0238b84f84da9
 /etc/bash_completion.d/bittorrent 025ebd47d269ec303b15e7342c057c23
 /etc/bash_completion.d/bluez 2489b9e67d6020332bb5a3c120429a39
 /etc/bash_completion.d/brctl d591c2105cd8f0732ab2f5a6fc41683e
 /etc/bash_completion.d/bzip2 364d9a45863a5b33c50f4cf718bef6ed
 /etc/bash_completion.d/cardctl c12969f7f8649a49b3191c58876d5e7e
 /etc/bash_completion.d/cfengine d76954fe8c5fc7376ec41405bc89f07f
 /etc/bash_completion.d/chkconfig 51904b0794d794b8895af5ea50d590ff
 /etc/bash_completion.d/chsh 7584877fad58f0d1096347c8f14f195b
 /etc/bash_completion.d/cksfv 55d0a9afbe5091def040e3695729df13
 /etc/bash_completion.d/clisp 1947b703bbe4f956ac1e4176bde13c81
 /etc/bash_completion.d/configure 0a0be84625c22e4b060dd489f38eaa04
 /etc/bash_completion.d/coreutils 4b218c5cdff6595303d81f60e6b26318
 /etc/bash_completion.d/cowsay e2cb71bdd6090d485e6dca7987ab1c24
 /etc/bash_completion.d/cpan2dist 5cc77c3fb29ce43b18e1bc6a6cb7af60
 /etc/bash_completion.d/cpio 42c0e4308158741c54dd31ed70c0cd0b
 /etc/bash_completion.d/crontab 7ddb6746146cc321f4a79f579d5fcb9e
 /etc/bash_completion.d/cups 942fd229d9487c02ea63ceaa4b66bbf3
 /etc/bash_completion.d/cryptsetup 1952ecad921df74b3b0dad4fe326e3ec
 /etc/bash_completion.d/cvs 56caa9c63ffe68bf7d8bfa5f30ef34dc
 /etc/bash_completion.d/cvsps 8dda984e0622ca70d95fa48ae035cd65
 /etc/bash_completion.d/dd 18eab48b74e17c284abbf0c883df09c1
 /etc/bash_completion.d/dhclient 2ac5b1adbadfc88f8f8000ba515f1fb8
 /etc/bash_completion.d/dict 6c65b8711c3597d8162a59ff270be789
 /etc/bash_completion.d/dpkg 1aa0beacacafce263ae1619015a38393
 /etc/bash_completion.d/dselect 76a646a2ec9dc0d849b696f941a37f0c
 /etc/bash_completion.d/dsniff 0900b561af924ee10497df43669524da
 /etc/bash_completion.d/dvd+rw-tools a243996cf5d9401dc2026c4ac47ff871
 /etc/bash_completion.d/e2fsprogs e51787a7503db0c39d460c9907fd86bd
 /etc/bash_completion.d/findutils 35fff21b1ffcd2e9dcac91fcf6b6fc60
 /etc/bash_completion.d/freeciv 7e3549ec737e9eef01305ad941d5e8b6
 /etc/bash_completion.d/freerdp 2a184b82dfd51fdad68dfb02e6a45b27
 /etc/bash_completion.d/fuse 7b04f3bad8338777ce1275568ed6df89
 /etc/bash_completion.d/gcc 9dce77e24a5942f5eb99bf33b4456128
 /etc/bash_completion.d/gcl 6deb8def42a894d89056631176101157
 /etc/bash_completion.d/gdb 7bd1af00dd8c752cda7c5e80a8958e5a
 /etc/bash_completion.d/genisoimage c198708cbce31e7fbe91843a146a267c
 /etc/bash_completion.d/getent 59e5e2d20537a788d009a36950d7c5f9
 /etc/bash_completion.d/gkrellm 94ae16a0ac4beb36f35b31f3675f120a
 /etc/bash_completion.d/gnatmake 344b90917df28f9b37c2fe73e3693251
 /etc/bash_completion.d/gpg 710b143c5c328a6f8a8d0643e2e38d82
 /etc/bash_completion.d/gpg2 e294c931ade780851012d85e9468194e
 /etc/bash_completion.d/gzip 8e017bb71136d210e1d504d15d72c019
 /etc/bash_completion.d/heimdal 933642c72f8402ff118aaf4a4e3f4704
 /etc/bash_completion.d/hping2 83aba979509b0bd1f44d4ccafdd3e785
 /etc/bash_completion.d/iconv 9a6f0cbe569bc0343ccd6ad786f1c40c
 /etc/bash_completion.d/iftop 24e2efb1c6bc1487933579199ae66313
 /etc/bash_completion.d/ifupdown fddc2c0669787febad563ba9051daa1b
 /etc/bash_completion.d/imagemagick f28676f7e88923f8674283968e7f78b4
 /etc/bash_completion.d/info a8ca0db34927eb9ce195d307bc16db8c
 /etc/bash_completion.d/iptables d58815c7c3cf4c3ddae9f568c03c7338
 /etc/bash_completion.d/ipmitool 6b4afa2cab3926995c1091e5dc9b82d6
 /etc/bash_completion.d/iproute2 75c501ea010410863b1eb83c2851bbc2
 /etc/bash_completion.d/ipsec 9a217a943e24ccd2511e895f98e4f49c
 /etc/bash_completion.d/ipv6calc 9e9f42ebd506687f603f946e9601ef59
 /etc/bash_completion.d/isql 09ac2472b0b4dd7f88ef3a877ccf712c
 /etc/bash_completion.d/jar 368bd20678a95bdb61cc34a101474aa9
 /etc/bash_completion.d/java 72862fd288a1644a825943e406c9631d
 /etc/bash_completion.d/k3b 73455f34015a1605b7be09127708eb44
 /etc/bash_completion.d/kldload 5785f50220f80ba910b6226ba1620f90
 /etc/bash_completion.d/larch 849baab2cd67a892e0f778498934a488
 /etc/bash_completion.d/ldapvi e246017ca5b4490211557b112ae2c3e6
 /etc/bash_completion.d/lftp bb6a731e15eeb2329a1875a4383f66b6
 /etc/bash_completion.d/lilo 7d1bf7c211fb68b2e1420a00d2abbd3e
 /etc/bash_completion.d/links b088aab3b32955b586772529420f960c
 /etc/bash_completion.d/lintian 7e5a3f172df9c1a6819a034a7b4f0bf0
 /etc/bash_completion.d/lisp ab95120ef6b2da6c964b36b3124e5eb2
 /etc/bash_completion.d/lrzip d6f6541a386fbfeeca48bbca20b514bf
 /etc/bash_completion.d/lsof d3fdaa21d973603e8cf82d0f63828f5c
 /etc/bash_completion.d/lvm 8ea6826e9d4aa7b4958242aa2f927fe8
 /etc/bash_completion.d/lzma 86fb58a915c24485f812c4db28612484
 /etc/bash_completion.d/lzop a7efdad9c12acd24b6a25e999cd9a342
 /etc/bash_completion.d/mailman 5b1f51e2707f4932e942959d6477ea0a
 /etc/bash_completion.d/make 376a868e1126979fd9f1ded14da30b21
 /etc/bash_completion.d/man dbb2a74efbbab32201412b2305f6ed72
 /etc/bash_completion.d/mc 8fa4861a2d60df574ca8d367fef9dd1e
 /etc/bash_completion.d/mcrypt d152291b7a9e2ea55291eb62cecb5432
 /etc/bash_completion.d/mdadm 04e7b4138f8fb12f8fb1388453ee6cda
 /etc/bash_completion.d/medusa 89819bc41f01af0bfcd0ac6b7ab4d965
 /etc/bash_completion.d/minicom a27aba65f3f7d7f3eb5f60fb9b72f687
 /etc/bash_completion.d/mkinitrd 511c80f4c3add796d9a842ea4bc5a6f8
 /etc/bash_completion.d/module-init-tools f9d952866cf13ad453c0a3420bfa7bd5
 /etc/bash_completion.d/monodevelop 6bb73625e32b9b1cbf02572c1e32638d
 /etc/bash_completion.d/mount 42e9c5075ecd9b9decb35d93ef263956
 /etc/bash_completion.d/mplayer 312cd63058a30138fc8acd1bcf469847
 /etc/bash_completion.d/msynctool 8da1c41c7b76348ca0d3ccacb5508276
 /etc/bash_completion.d/munin-node 0f7b9278eafe5b822a18c1bc7cc2e026
 /etc/bash_completion.d/mutt d0c1d91d56a9468e0ba26487fbb3caec
 /etc/bash_completion.d/mysqladmin c5102d137f83e12fb3e54fb500e4ee05
 /etc/bash_completion.d/ncftp 282ed142aa6c466787ef2a9b6bc5ea1d
 /etc/bash_completion.d/net-tools 9ac7ec0de44dac4f0d7680f9c439e20f
 /etc/bash_completion.d/nmap b62580b091e76979b1fbe77409378146
 /etc/bash_completion.d/ntpdate 1f364448f83dc300125abf976c646804
 /etc/bash_completion.d/openldap 05ed297c3e60ab129ca5b3b0b6da16d1
 /etc/bash_completion.d/openssl c1957186ce0bd22a07e3ea72dfd51b52
 /etc/bash_completion.d/open-iscsi 67a412aee21aea10447a4aa7e0412f30
 /etc/bash_completion.d/p4 2014944ca4cbdc98d42075a8dabfa808
 /etc/bash_completion.d/perl 9975832f1bbda823765b401f354a45c4
 /etc/bash_completion.d/pine be44f975727d988108de9b14d230fdea
 /etc/bash_completion.d/pkg-config 5abe7ec65b273b73af1b34167b8f37d7
 /etc/bash_completion.d/pkg_install 443021265fb23f6b044a6c492d16a4c6
 /etc/bash_completion.d/pkgtools 10e7a82314ac571211d4d79fdbbbc9e2
 /etc/bash_completion.d/pm-utils 05520e3afdc8da4bfa16fe7a8857e8b1
 /etc/bash_completion.d/portupgrade 623d1e9ec863907a081bd2c130af208d
 /etc/bash_completion.d/postfix 7b4851d040186d2c5a0c0986a94125ad
 /etc/bash_completion.d/postgresql f216029e97b1f147261eaa6fba11a616
 /etc/bash_completion.d/povray 899b7f4c9bf715f94aad162951948e5a
 /etc/bash_completion.d/procps 28a0dd552723c8cd75fb6dbd1daa4588
 /etc/bash_completion.d/python cffe820bf62e3023c8a639c7c1086967
 /etc/bash_completion.d/qdbus 4f7253cd179e6dca0d5b3a02acb22fcd
 /etc/bash_completion.d/qemu 51f46006f62185ca212c5adadb53b645
 /etc/bash_completion.d/quota-tools 0f5f5792374c4cece82fcafa735eade4
 /etc/bash_completion.d/rcs 81d5693f48d59e81593ea23f07d3cdfd
 /etc/bash_completion.d/rdesktop fbe9fc2a4b64416e481682454e6b5026
 /etc/bash_completion.d/reportbug 7abfcec9ae3220bcdd3243ced670a3a7
 /etc/bash_completion.d/resolvconf b412e4117565a8e7512a62fb922341bd
 /etc/bash_completion.d/rfkill 3ff043d804f9c835ca5634eef2e1e05a
 /etc/bash_completion.d/ri a49e726b6b4e6ddea3dbf3cb5a065b38
 /etc/bash_completion.d/rpcdebug bb6df5163fc69a59b0f2b70731791151
 /etc/bash_completion.d/rpm 9724ab7d2532c5ada2ac8114e5f86271
 /etc/bash_completion.d/rpmcheck 0ab94f66670383a1d6e2b17cede93da1
 /etc/bash_completion.d/rrdtool 89fb1182ae89ff388da0a81708fd1730
 /etc/bash_completion.d/rsync 207a3debf8b04ece25f433464f41d4a7
 /etc/bash_completion.d/rtcwake 1c18579214ddad45c152b2bf0f2606d9
 /etc/bash_completion.d/samba 454dd79745abf622cf9f9632809801fb
 /etc/bash_completion.d/sbcl 904c1624cd8734c068df7bd2fd5637f4
 /etc/bash_completion.d/screen a40c0f211eb24fd713fce26e531ef494
 /etc/bash_completion.d/service 84cc1cb614e107c0b4adda82e920fe8a
 /etc/bash_completion.d/sh ed7b56efb38bf3fab429fc7336395f25
 /etc/bash_completion.d/shadow f4ad6e6db21703b802e6be3902a63b99
 /etc/bash_completion.d/sitecopy 8df8ca8e48b2709ef8903a29053be502
 /etc/bash_completion.d/smartctl 429d9da789b4a1c44df1582c1bfe61c3
 /etc/bash_completion.d/snownews 341782db2f3c3beb29df8c3bccc8a448
 /etc/bash_completion.d/sqlite3 a84124d7e065ff320ec0eb318a1f57e9
 /etc/bash_completion.d/ssh c40b858d9ae1aee952726de8310b3006
 /etc/bash_completion.d/sshfs 15270fec82f8e38e14a6d3934285c9ae
 /etc/bash_completion.d/strace c9b9cc700f57cc389e77ec0e1a7ae4c6
 /etc/bash_completion.d/svk 31036779d9a22486a21555f300cc9599
 /etc/bash_completion.d/sysbench dc4bd68eba09611cd73c8312d2643662
 /etc/bash_completion.d/sysctl b4f4ecb48c6c376516e4db95604d80c6
 /etc/bash_completion.d/sysv-rc fbee1b2640b8ebb788f9ace2d55c9eaa
 /etc/bash_completion.d/tar 0398cfa972d4e3d79b2feaec593cb0d4
 /etc/bash_completion.d/tcpdump f1a23e7f97835cd1080041cc003cbe85
 /etc/bash_completion.d/unace 4b9109ef5e7a6ef23a3ed5fbe3ee76e9
 /etc/bash_completion.d/unrar 3201b9f268bebf90ca65b6b023ad8bdd
 /etc/bash_completion.d/update-alternatives 8392673cafa74115939ce0c63fa96196
 /etc/bash_completion.d/util-linux df55b75ec5fe7e373a274cfd9bd154be
 /etc/bash_completion.d/vncviewer 8749311e95e0ad0d83ed7cb6c30e4dd7
 /etc/bash_completion.d/vpnc 42de647be45138e58a0e690a62004cb3
 /etc/bash_completion.d/wireless-tools d173f7040b4328f3760182b79ac85583
 /etc/bash_completion.d/wodim 122c7555893abbe683a2d0c821381e08
 /etc/bash_completion.d/wol 4bc57f737a82d858e7e789558879eb3f
 /etc/bash_completion.d/wtf 5e9ac8752ed0f9a2a83a871f3f5ef90a
 /etc/bash_completion.d/wvdial 51dd13b53e3c99a16c91f6dc755b62c4
 /etc/bash_completion.d/xhost cb91e50845f9a40b9564cd0b33d47e1b
 /etc/bash_completion.d/xm d6302e950ad39937383eb9e47388ed02
 /etc/bash_completion.d/xmllint 13693cc741f88387b91ae08f0d0d8e82
 /etc/bash_completion.d/xmlwf a839a6d4bc18b70158dac41299cfc140
 /etc/bash_completion.d/xmms 74d90bb6a5d092ec481932030ef2f084
 /etc/bash_completion.d/xmodmap 6b51dd0c12d27cce4bd3810dab2681b7
 /etc/bash_completion.d/xrandr 8929e292cb9b86dfc9aa53e5c5c7e35f
 /etc/bash_completion.d/xrdb ebf26366fc89a4246e8992f7d681bac3
 /etc/bash_completion.d/xsltproc e552d2d52c96bf984c53413b10d7254e
 /etc/bash_completion.d/xz b0b9f15041c567d72ade3af9a11cb062
 /etc/bash_completion.d/yp-tools ffda231db1e4e3314f8cd5989cfc0421
 /etc/bash_completion.d/yum-arch a357ac184cafcda37152d8e95aa109a3
 /etc/bash_completion 5d4c5fb388b9e2f5ed14d01a9558bb53
 /etc/profile.d/bash_completion.sh c9f21609bdb02142c934d46b476210b7
Description: programmable completion for the bash shell
 bash completion extends bash's standard completion behavior to achieve
 complex command lines with just a few keystrokes.  This project was
 conceived to produce programmable completion routines for the most
 common Linux/UNIX commands, reducing the amount of typing sysadmins
 and programmers need to do on a daily basis.
Homepage: http://bash-completion.alioth.debian.org
Original-Maintainer: Bash Completion Maintainers <bash-completion-devel@lists.alioth.debian.org>

Package: libgeronimo-jpa-2.0-spec-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 184
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: geronimo-jpa-2.0-spec
Version: 1.1-2
Depends: aspectj, libgeronimo-osgi-support-java
Suggests: libgeronimo-jpa-2.0-spec-java-doc (= 1.1-2)
Description: Geronimo JSR-317 Java Persistence (JPA) 2.0 Spec API
 The Java Persistence API is the Java API for the management of persistence
 and object/relational mapping for Java EE and Java SE environments.
 .
 The goal of this specification is to provide an object/relational mapping
 facility for the Java application developer using a Java domain model
 to manage a relational database.
 .
 Persistence in this context covers three areas:
  - The API itself, defined in the javax.persistence package.
  - The Java Persistence Query Language (JPQL).
  - Object/relational metadata.
 .
 The Java Persistence 2.0 specification addresses improvements in the areas of
 domain modeling, object/relational mapping, EntityManager and Query
 interfaces, and the Java Persistence query language. It adds an API for
 criteria queries, a metamodel API, and support for validation.
 .
 This package contains only API of JSR-317 spec. Apache OpenJPA and
 EclipseLink are implementations of this spec.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libsasl2-modules
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 228
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: cyrus-sasl2
Version: 2.1.25.dfsg1-3ubuntu0.1
Depends: libsasl2-2 (= 2.1.25.dfsg1-3ubuntu0.1), libc6 (>= 2.14), libssl1.0.0 (>= 1.0.0)
Suggests: libsasl2-modules-otp, libsasl2-modules-ldap, libsasl2-modules-sql, libsasl2-modules-gssapi-mit | libsasl2-modules-gssapi-heimdal
Description: Cyrus SASL - pluggable authentication modules
 This is the Cyrus SASL API implementation, version 2.1. See package
 libsasl2-2 and RFC 2222 for more information.
 .
 This package provides the following SASL modules: LOGIN, PLAIN, ANONYMOUS,
 NTLM, CRAM-MD5, and DIGEST-MD5 (with DES support).
Homepage: http://www.cyrusimap.org/
Original-Maintainer: Debian Cyrus SASL Team <pkg-cyrus-sasl2-debian-devel@lists.alioth.debian.org>

Package: libsasl2-2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 191
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: cyrus-sasl2
Version: 2.1.25.dfsg1-3ubuntu0.1
Replaces: libsasl2
Depends: libc6 (>= 2.15), libdb5.1
Pre-Depends: multiarch-support
Recommends: libsasl2-modules (= 2.1.25.dfsg1-3ubuntu0.1)
Breaks: postfix (<= 2.8.3-1), slapd (<= 2.4.25-3)
Description: Cyrus SASL - authentication abstraction library
 This is the Cyrus SASL API implementation, version 2.1.
 .
 SASL is the Simple Authentication and Security Layer, a method for
 adding authentication support to connection-based protocols. To use
 SASL, a protocol includes a command for identifying and
 authenticating a user to a server and for optionally negotiating
 protection of subsequent protocol interactions. If its use is
 negotiated, a security layer is inserted between the protocol and the
 connection. See RFC 2222 for more information.
 .
 Any of: ANONYMOUS, CRAM-MD5, DIGEST-MD5, GSSAPI (MIT or Heimdal
 Kerberos 5), NTLM, OTP, PLAIN, or LOGIN can be used. If you intend to
 use this package on a server that provides SASL authentication, then
 you must install some of the libsasl2-modules* packages.
Homepage: http://www.cyrusimap.org/
Original-Maintainer: Debian Cyrus SASL Team <pkg-cyrus-sasl2-debian-devel@lists.alioth.debian.org>

Package: passwd
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 2084
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: shadow
Version: 1:4.1.4.2+svn3283-3ubuntu5.1
Replaces: manpages-tr (<< 1.0.5), manpages-zh (<< 1.5.1-1)
Depends: libc6 (>= 2.15), libpam0g (>= 0.99.7.1), libselinux1 (>= 1.32), upstart-job, libpam-modules, debianutils (>= 2.15.2)
Conffiles:
 /etc/init/passwd.conf ea81baf06e4c358225ce22b786ad9e6a
 /etc/default/useradd cc9f9a7713ab62a32cd38363d958f396
 /etc/pam.d/passwd eaf2ad85b5ccd06cceb19a3e75f40c63
 /etc/pam.d/newusers 1454e29bfa9f2a10836563e76936cea5
 /etc/pam.d/chpasswd 9900720564cb4ee98b7da29e2d183cb2
 /etc/pam.d/chfn 4d466e00a348ba426130664d795e8afa
 /etc/pam.d/chsh a6e9b589e90009334ffd030d819290a6
 /etc/cron.daily/passwd db990990933b6f56322725223f13c2bc
Description: change and administer password and group data
 This package includes passwd, chsh, chfn, and many other programs to
 maintain password and group data.
 .
 Shadow passwords are supported.  See /usr/share/doc/passwd/README.Debian
Homepage: http://pkg-shadow.alioth.debian.org/
Original-Maintainer: Shadow package maintainers <pkg-shadow-devel@lists.alioth.debian.org>

Package: bsdmainutils
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: utils
Installed-Size: 540
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 8.2.3ubuntu1
Depends: libc6 (>= 2.14), libtinfo5, bsdutils (>= 3.0-0), debianutils (>= 1.8)
Suggests: cpp, wamerican | wordlist, whois, vacation
Breaks: bsdutils (<< 1:2.13-11)
Conffiles:
 /etc/calendar/default f499e79b0d2d685aa5ae7e1013940b96
 /etc/cron.daily/bsdmainutils f58739ed756eb2efa7b73f377976a5e4
Description: collection of more utilities from FreeBSD
 This package contains lots of small programs many people expect to find when
 they use a BSD-style Unix system.
 .
 It provides banner (as printerbanner), calendar, col, colcrt, colrm, column,
 from (as bsd-from), hexdump (or hd), look, lorder, ncal (or cal), ul, and
 write (as bsd-write).
 .
 This package used to contain whois and vacation, which are now distributed in
 their own packages. Also here was tsort, which is now in the "coreutils"
 package.
Original-Maintainer: Debian Bsdmainutils Team <pkg-bsdmainutils@teams.debian.net>

Package: libgdk-pixbuf2.0-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: libs
Installed-Size: 56
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: gdk-pixbuf
Version: 2.26.1-1
Replaces: libgdk-pixbuf2.0-0 (<< 2.24.0-2)
Breaks: libgdk-pixbuf2.0-0 (<< 2.24.0-2)
Description: GDK Pixbuf library - data files
 This package contains the common files and translations for the GDK
 Pixbuf library.
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
Homepage: http://www.gtk.org/

Package: libplexus-bsh-factory-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 80
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-bsh-factory
Version: 1.0~alpha7-3
Depends: libplexus-container-default-java, bsh
Description: Plexus Beanshell Factory
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
 .
 This package provides a factory for instantiating BeanShell with Plexus.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/

Package: hostname
Essential: yes
Status: install ok installed
Priority: required
Section: admin
Installed-Size: 116
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.06ubuntu1
Replaces: nis (<< 3.17-30)
Pre-Depends: libc6 (>= 2.4), upstart-job
Conflicts: nis (<< 3.17-30)
Conffiles:
 /etc/init/hostname.conf 6cfe98f58ae3bf5fed6558696bbcc488
Description: utility to set/show the host name or domain name
 This package provides commands which can be used to display the system's
 DNS name, and to display or set its hostname or NIS domain name.
Original-Maintainer: Debian Hostname Team <hostname-devel@lists.alioth.debian.org>

Package: linux-headers-3.2.0-35
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 54940
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: all
Source: linux
Version: 3.2.0-35.55
Provides: linux-headers, linux-headers-3
Depends: coreutils | fileutils (>= 4.0)
Description: Header files related to Linux kernel version 3.2.0
 This package provides kernel header files for version 3.2.0, for sites
 that want the latest kernel headers. Please read
 /usr/share/doc/linux-headers-3.2.0-35/debian.README.gz for details

Package: xkb-data
Status: install ok installed
Priority: extra
Section: x11
Installed-Size: 3017
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: all
Source: xkeyboard-config
Version: 2.5-1ubuntu1.3
Breaks: libx11-6 (<< 2:1.4.3)
Description: X Keyboard Extension (XKB) configuration data
 This package contains configuration data used by the X Keyboard
 Extension (XKB), which allows selection of keyboard layouts when
 using a graphical interface.
 .
 Every X11 vendor provides its own XKB data files, so keyboard layout
 designers have to send their layouts to several places.  The
 xkeyboard-config project has been launched at FreeDesktop in order
 to provide a central repository that could be used by all vendors.
Homepage: http://www.freedesktop.org/Software/XKeyboardConfig
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: fakeroot
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 313
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.18.2-1
Depends: libc6 (>= 2.7)
Description: tool for simulating superuser privileges
 fakeroot provides a fake "root environment" by means of LD_PRELOAD and
 SysV IPC (or TCP) trickery. It puts wrappers around getuid(), chown(),
 stat(), and other file-manipulation functions, so that unprivileged
 users can (for instance) populate .deb archives with root-owned files;
 various build tools use fakeroot for this by default.
Original-Maintainer: Clint Adams <clint@debian.org>

Package: libacl1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 76
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: acl
Version: 2.2.51-5ubuntu1
Depends: libattr1 (>= 2.4.46-3), libc6 (>= 2.4)
Pre-Depends: multiarch-support
Conflicts: acl (<< 2.0.0), libacl1-kerberos4kth
Description: Access control list shared library
 This package contains the libacl.so dynamic library containing
 the POSIX 1003.1e draft standard 17 functions for manipulating
 access control lists.
Homepage: http://savannah.nongnu.org/projects/acl/
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: libpthread-stubs0-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libdevel
Installed-Size: 40
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libpthread-stubs
Version: 0.3-3
Depends: libpthread-stubs0 (= 0.3-3)
Description: pthread stubs not provided by native libc, development files
 This library provides weak aliases for pthread functions not provided
 in libc or otherwise available by default.  Libraries like libxcb rely
 on pthread stubs to use pthreads optionally, becoming thread-safe when
 linked to libpthread, while avoiding any performance hit when running
 single-threaded. libpthread-stubs supports this behavior even on
 platforms which do not supply all the necessary pthread stubs.
 .
 On platforms which already supply all the necessary pthread stubs, this
 package ships only the pkg-config file pthread-stubs.pc, to allow
 libraries to unconditionally express a dependency on pthread-stubs and
 still obtain correct behavior.
Original-Maintainer: XCB Developers <xcb@lists.freedesktop.org>

Package: screen
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 1052
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.0.3-14ubuntu8
Depends: libc6 (>= 2.4), libncursesw5 (>= 5.6+20070908), libpam0g (>= 0.99.7.1), dpkg (>= 1.15.4) | install-info, upstart-job
Suggests: byobu
Conffiles:
 /etc/screenrc 12c245238eb8b653625bba27dc81df6a
 /etc/init/screen-cleanup.conf 441f4a1c5b41d7f23427be5aa6ccbbcc
Description: terminal multiplexor with VT100/ANSI terminal emulation
 screen is a terminal multiplexor that runs several separate "screens" on a
 single physical character-based terminal.  Each virtual terminal emulates a
 DEC VT100 plus several ANSI X3.64 and ISO 2022 functions.  Screen sessions
 can be detached and resumed later on a different terminal.
 .
 Screen also supports a whole slew of other features.  Some of these are:
 configurable input and output translation, serial port support, configurable
 logging, multi-user support, and utf8 charset support.
Homepage: http://savannah.gnu.org/projects/screen
Original-Maintainer: Jan Christoph Nordholz <hesso@pool.math.tu-berlin.de>

Package: libpam-runtime
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 296
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: pam
Version: 1.1.3-7ubuntu2
Replaces: libpam0g-dev, libpam0g-util
Depends: debconf (>= 1.5.19), libpam-modules (>= 1.0.1-6)
Conflicts: libpam0g-util
Conffiles:
 /etc/pam.conf 87fc76f18e98ee7d3848f6b81b3391e5
 /etc/pam.d/other 31aa7f2181889ffb00b87df4126d1701
Description: Runtime support for the PAM library
 Contains configuration files and  directories required for
 authentication  to work on Debian systems.  This package is required
 on almost all installations.
Homepage: http://pam.sourceforge.net/
Original-Maintainer: Steve Langasek <vorlon@debian.org>

Package: geoip-database
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 6881
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 20111220-1
Recommends: libgeoip1
Breaks: libgeoip1 (<< 1.4.5.dfsg)
Description: IP lookup command line tools that use the GeoIP library (country database)
 GeoIP is a C library that enables the user to find the country that any
 IP address or hostname originates from. It uses a file based database.
 .
 This database simply contains IP blocks as keys, and countries as values and
 it should be more complete and accurate than using reverse DNS lookups.
 .
 This package contains the free GeoLiteCountry database.
Original-Maintainer: Patrick Matthäi <pmatthaei@debian.org>
Homepage: http://www.maxmind.com/

Package: libjpeg8
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 26
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libjpeg8-empty
Version: 8c-2ubuntu7
Depends: libjpeg-turbo8 (>= 1.1.90+svn722-1ubuntu6)
Description: Independent JPEG Group's JPEG runtime library (dependency package)
 libjpeg8 dependency package, depending on libjpeg-turbo8.

Package: libgeronimo-osgi-support-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 48
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: geronimo-osgi-support
Version: 1.0-2
Depends: libaspectj-java, libosgi-core-java, libosgi-compendium-java
Suggests: libgeronimo-osgi-support-java-doc (= 1.0-2)
Description: Java libraries providing OSGi lookup support for Geronimo projects
 These Java libraries allow the use of OSGi framework with Geronimo existing
 projects. They allow lookup and registration of components.
 .
 - geronimo-osgi-locator.jar: Allow performing class and components lookups
   with OSGi support.
   .
 - geronimo-osgi-registry.jar: Facilitate the use of Geronimo specs providers
   (components typically plugged in to the JRE through META-INF/services
   resources) like geronimo-validation-1.0-spec (Geronimo JSR-303 Bean
   Validation Spec API).
   .
   The service created by this library will maintain a registry of factory
   class that can be used by the spec bundles to locate factory classes that
   reside in other bundles.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://geronimo.apache.org/

Package: xauth
Status: install ok installed
Priority: optional
Section: x11
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:1.0.6-1
Depends: libc6 (>= 2.11), libx11-6, libxau6, libxext6, libxmuu1
Description: X authentication utility
 xauth is a small utility to read and manipulate Xauthority files, which
 are used by servers and clients alike to control authentication and access
 to X sessions.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: ufw
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 678
Maintainer: Jamie Strandboge <jamie@ubuntu.com>
Architecture: all
Version: 0.31.1-1
Depends: debconf, python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), debconf (>= 0.5) | debconf-2.0, upstart-job, iptables, ucf
Suggests: rsyslog
Conffiles:
 /etc/bash_completion.d/ufw 50de7ccdcddb779093156f133d9c0a5e
 /etc/logrotate.d/ufw 37513e22d976e5129fd0eb67de47bbe9
 /etc/rsyslog.d/20-ufw.conf 322b0e04163744367d1cba9608891bfe
 /etc/ufw/sysctl.conf 7723079fc108eda8f57eddab3079c70a
 /etc/default/ufw c0ad23294ca6d694f98d8ba060ab8391
 /etc/init/ufw.conf b85f80257c81675ef38e9db139fb0921
Description: program for managing a Netfilter firewall
 The Uncomplicated FireWall is a front-end for iptables, to make managing a
 Netfilter firewall easier. It provides a command line interface with syntax
 similar to OpenBSD's Packet Filter. It is particularly well-suited as a
 host-based firewall.
Homepage: https://launchpad.net/ufw
Python-Version: 2.7

Package: libslang2
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 1530
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: slang2
Version: 2.2.4-3ubuntu1
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Recommends: libpng12-0
Description: S-Lang programming library - runtime version
 S-Lang is a C programmer's library that includes routines for the rapid
 development of sophisticated, user friendly, multi-platform applications.
 .
 This package contains only the shared library libslang.so.* and copyright
 information. It is only necessary for programs that use this library (such
 as jed and slrn). If you plan on doing development with S-Lang, you will
 need the companion -dev package as well.
Original-Maintainer: Alastair McKinstry <mckinstry@debian.org>

Package: initscripts
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 223
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: sysvinit
Version: 2.88dsf-13.10ubuntu11.1
Replaces: libc0.1, libc0.3, libc6, libc6.1
Depends: libc6 (>= 2.4), mount (>= 2.11x-1), debianutils (>= 4), lsb-base (>= 3.2-14), sysvinit-utils (>= 2.86.ds1-64), sysv-rc | file-rc, coreutils (>= 5.93), passwd, upstart, mountall (>= 2.28)
Recommends: psmisc, e2fsprogs
Breaks: hostname (<< 2.95ubuntu1~boot2), rsyslog (<< 4.2.0-2ubuntu3~boot1), selinux-policy-default (<= 2:0.2.20100524-9), udev (<< 146-2~boot6), upstart (<< 0.6.3-2~boot4)
Conflicts: libdevmapper1.02.1 (<< 2:1.02.24-1)
Conffiles:
 /etc/init.d/bootlogd 267ceea04f703171e6c62f506fda3305
 /etc/init.d/stop-bootlogd 4544c7e1a2d0c713d29424d02faad237
 /etc/init.d/stop-bootlogd-single 648d8624e708151500c5e299a6005afe
 /etc/init.d/halt 6ae1b3b1b8198567a5e32116077f12a2
 /etc/init.d/killprocs 5e404d35091fab6c4889302736ed4602
 /etc/init.d/ondemand cc2a79a545967eec1170dc2bb44468e0
 /etc/init.d/rc.local 2964c1446c6453cdde4213eede97ac38
 /etc/init.d/reboot 1b9db1ef7bfd79b128ef85d5065721a6
 /etc/init.d/sendsigs 3b575caa7457cbe6cf096881064b834b
 /etc/init.d/single dc13cb373c5c098a8fb95424701373e3
 /etc/init.d/umountfs 9b65e42431636b29ab429e1e7471b575
 /etc/init.d/umountnfs.sh 5f3600170b867d5408ad5b4ae6f8aae4
 /etc/init.d/umountroot 3be838222127557f1e03d6c17f4d6eb7
 /etc/init.d/urandom 96d5bd37396a40ab5fe7071139f780fc
 /etc/default/bootlogd 70a108da715299a6e33470eb450669fb
 /etc/default/devpts fc857c5ac5fb84d80720ed4d1c624f6e
 /etc/default/halt 18d9844cf8ca8608e2a559a4555e593a
Description: scripts for initializing and shutting down the system
 The scripts in this package initialize a standard Debian
 system at boot time and shut it down at halt or reboot time.
Homepage: http://savannah.nongnu.org/projects/sysvinit
Original-Maintainer: Debian sysvinit maintainers <pkg-sysvinit-devel@lists.alioth.debian.org>

Package: libblkid1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 249
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: util-linux
Version: 2.20.1-1ubuntu3
Depends: libc6 (>= 2.14), libuuid1 (>= 2.16)
Pre-Depends: multiarch-support
Conffiles:
 /etc/blkid.conf 7f4c49e01e0a23d2f4b20eeb32e95abb
Description: block device id library
 The blkid library which allows system programs like fsck and
 mount to quickly and easily find block devices by filesystem UUID and
 LABEL.  This allows system administrators to avoid specifying
 filesystems by hard-coded device names, but via a logical naming
 system instead.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libdatrie1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 73
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libdatrie
Version: 0.2.5-3
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: Double-array trie library
 This package provides shared libraries needed to run programs that use the
 datrie library. It is usually automatically installed.
Original-Maintainer: Theppitak Karoonboonyanan <thep@debian.org>
Homepage: http://linux.thai.net/projects/libthai

Package: libss2
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 109
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: e2fsprogs
Version: 1.42-1ubuntu2
Replaces: e2fsprogs (<< 1.34-1)
Depends: libcomerr2, libc6 (>= 2.11)
Pre-Depends: multiarch-support
Description: command-line interface parsing library
 libss provides a simple command-line interface parser which will
 accept input from the user, parse the command into an argv argument
 vector, and then dispatch it to a handler function.
 .
 It was originally inspired by the Multics SubSystem library.
Homepage: http://e2fsprogs.sourceforge.net
Original-Maintainer: Theodore Y. Ts'o <tytso@mit.edu>

Package: liblwp-protocol-https-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 64
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.02-1
Replaces: libwww-perl (<< 6.02)
Depends: perl, libwww-perl (>= 6.02), libnet-http-perl, libio-socket-ssl-perl, ca-certificates
Suggests: libcrypt-ssleay-perl
Breaks: libwww-perl (<< 6.02)
Description: https driver for LWP::UserAgent
 The LWP::Protocol::https module provide support for using https schemed URLs
 with LWP. LWP::Protocol::https is a plug-in to the LWP protocol handling, so
 you don't use it directly. Once the module is installed LWP is able to access
 sites using HTTP over SSL/TLS.
 .
 If hostname verification is requested by LWP::UserAgent's ssl_opts, and
 neither SSL_ca_file nor SSL_ca_path is set, then SSL_ca_file is implied to be
 the one provided by ca-certificates.
 .
 This module used to be bundled with the libwww-perl, but it was unbundled in
 v6.02 in order to be able to declare its dependencies properly for the CPAN
 tool-chain. Applications that need https support can just declare their
 dependency on LWP::Protocol::https and will no longer need to know what
 underlying modules to install.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/LWP-Protocol-https/

Package: libpam-modules-bin
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 202
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pam
Version: 1.1.3-7ubuntu2
Replaces: libpam-modules (<< 1.1.3-2)
Depends: libc6 (>= 2.14), libpam0g (>= 0.99.7.1), libselinux1 (>= 1.32)
Description: Pluggable Authentication Modules for PAM - helper binaries
 This package contains helper binaries used by the standard set of PAM
 modules in the libpam-modules package.
Homepage: http://pam.sourceforge.net/
Original-Maintainer: Steve Langasek <vorlon@debian.org>

Package: command-not-found
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 85
Maintainer: Michael Vogt <michael.vogt@ubuntu.com>
Architecture: all
Version: 0.2.46ubuntu6
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-apt, command-not-found-data, python-gdbm, lsb-release
Conffiles:
 /etc/zsh_command_not_found efe722bf2776c3763a32daebae42baca
Description: Suggest installation of packages in interactive bash sessions
 This package will install a handler for command_not_found that looks up
 programs not currently installed but available from the repositories.
Original-Maintainer: Zygmunt Krynicki <zkrynicki@gmail.com>

Package: libavahi-common-data
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 116
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: avahi
Version: 0.6.30-5ubuntu2
Description: Avahi common data files
 Avahi is a fully LGPL framework for Multicast DNS Service Discovery.
 It allows programs to publish and discover services and hosts
 running on a local network with no specific configuration. For
 example you can plug into a network and instantly find printers to
 print to, files to look at and people to talk to.
 .
 This package contains common data files for avahi.
Homepage: http://avahi.org/
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: findutils
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 832
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.4.2-4ubuntu1
Depends: dpkg (>= 1.15.4) | install-info
Pre-Depends: libc6 (>= 2.7)
Suggests: mlocate | locate
Description: utilities for finding files--find, xargs
 GNU findutils provides utilities to find files meeting specified
 criteria and perform various actions on the files which are found.
 This package contains 'find' and 'xargs'; however, 'locate' has
 been split off into a separate package.
Homepage: http://savannah.gnu.org/projects/findutils/
Original-Maintainer: Andreas Metzler <ametzler@debian.org>

Package: libbsd0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 125
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libbsd
Version: 0.3.0-2
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: utility functions from BSD systems - shared library
 This library provides some functions commonly available on BSD systems
 but not on others like GNU systems.
Original-Maintainer: Debian GNU/kFreeBSD <debian-bsd@lists.debian.org>
Homepage: http://libbsd.freedesktop.org/

Package: libxft2
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 135
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: xft
Version: 2.2.0-3ubuntu2
Depends: libc6 (>= 2.14), libfontconfig1 (>= 2.8.0), libfreetype6 (>= 2.3.5), libx11-6, libxrender1
Pre-Depends: multiarch-support
Description: FreeType-based font drawing library for X
 Xft provides a client-side font API for X applications, making the FreeType
 font rasterizer available to X clients.  Fontconfig is used for font
 specification resolution.  Where available, the RENDER extension handles
 glyph drawing; otherwise, the core X protocol is used.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libmaven-reporting-impl-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 82
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: maven-reporting-impl
Version: 2.1-1
Depends: libcommons-validator-java, libdoxia-java, libdoxia-sitetools-java, libmaven2-core-java, libplexus-utils-java
Suggests: libmaven-reporting-impl-java-doc
Description: Maven Reporting API Implementation
 Maven is a software project management and comprehension tool. Based on the
 concept of a project object model (POM), Maven can manage a project's build,
 reporting and documentation from a central piece of information.
 .
 Maven's primary goal is to allow a developer to comprehend the complete
 state of a development effort in the shortest period of time. In order to
 attain this goal there are several areas of concern that Maven attempts
 to deal with:
 .
    * Making the build process easy
    * Providing a uniform build system
    * Providing quality project information
    * Providing guidelines for best practices development
    * Allowing transparent migration to new features
 .
 This package implements the Maven Reporting API.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://maven.apache.org/shared/maven-reporting-impl/

Package: xz-utils
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 388
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 5.1.1alpha+20110809-3
Replaces: xz-lzma (<< 4.999.9beta+20091004-1)
Depends: libc6 (>= 2.7), liblzma5 (>= 5.1.1alpha+20110809)
Suggests: xz-lzma
Breaks: xz-lzma (<< 4.999.9beta+20091004-1)
Description: XZ-format compression utilities
 XZ is the successor to the Lempel-Ziv/Markov-chain Algorithm
 compression format, which provides memory-hungry but powerful
 compression (often better than bzip2) and fast, easy decompression.
 .
 This package provides the command line tools for working with XZ
 compression, including xz, unxz, xzcat, xzgrep, and so on. They can
 also handle the older LZMA format, and if invoked via appropriate
 symlinks will emulate the behavior of the commands in the lzma
 package.
 .
 The XZ format is similar to the older LZMA format but includes some
 improvements for general use:
 .
  * 'file' magic for detecting XZ files;
  * crc64 data integrity check;
  * limited random-access reading support;
  * improved support for multithreading (not used in xz-utils);
  * support for flushing the encoder.
Original-Maintainer: Jonathan Nieder <jrnieder@gmail.com>
Homepage: http://tukaani.org/xz/

Package: smbios-utils
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 581
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libsmbios
Version: 2.2.28-0ubuntu2
Replaces: libsmbios-bin
Provides: libsmbios-bin
Depends: libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libsmbios2, libstdc++6 (>= 4.4.0), python-libsmbios, python
Suggests: libsmbios-doc
Conflicts: libsmbios-bin
Conffiles:
 /etc/yum/pluginconf.d/dellsysid.conf f8427d8f3d9e638b33b4141534105408
 /etc/libsmbios/logging.conf 0585bed6f19311340dbb8d488a3d29d0
Description: Provide access to (SM)BIOS information -- utility binaries
 libsmbios aims towards providing access to as much BIOS information as
 possible. This package includes libsmbios' sample binaries/utilities.
Original-Maintainer: Jose Luis Tallon <jltallon@adv-solutions.net>

Package: dosfstools
Status: install ok installed
Priority: optional
Section: otherosfs
Installed-Size: 192
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.0.12-1ubuntu1
Depends: libc6 (>= 2.7)
Description: utilities for making and checking MS-DOS FAT filesystems
 The dosfstools package includes the mkdosfs (aka mkfs.dos and mkfs.vfat) and
 dosfsck (aka fsck.msdos and fsck.vfat) utilities, which respectively make and
 check MS-DOS FAT filesystems on hard drives or on floppies.
 .
 This version uses the enhanced boot sector/superblock format of DOS 3.3+ as
 well as provides a default dummy boot sector code.
Homepage: http://www.daniel-baumann.ch/software/dosfstools/
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>

Package: libxau-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libdevel
Installed-Size: 88
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxau
Version: 1:1.0.6-4
Depends: libxau6 (= 1:1.0.6-4), x11proto-core-dev
Description: X11 authorisation library (development headers)
 This package provides the main interface to the X11 authorisation handling,
 which controls authorisation for X connections, both client-side and
 server-side.
 .
 This package contains the development headers for the library found in libxau6.
 Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXau
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libexcalibur-logkit-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: excalibur-logkit
Version: 2.0-9
Replaces: liblogkit-java
Conflicts: liblogkit-java
Description: Lightweight and fast designed logging toolkit for Java
 Excalibur Logkit (previously avalon logkit) is a lightweight, fast, securely
 designed logging toolkit. It is designed to integrate into existing
 applications. Logkit is more lightweight than Log4j.
 .
 This package contains the library jar.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://excalibur.apache.org/

Package: devscripts
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 1500
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.11.6ubuntu1.4
Replaces: ubuntu-dev-tools (<< 0.124~)
Depends: dpkg-dev (>= 1.15.4.1), perl, python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.3.4)
Recommends: at, curl | wget, dctrl-tools, dput | dupload, fakeroot, gnupg, libjson-perl, libparse-debcontrol-perl, liburi-perl, libwww-perl, lintian, man-db, patch, patchutils, python-debian (>= 0.1.15), python-magic, sensible-utils, strace, unzip, wdiff, xz-utils
Suggests: bsd-mailx | mailx, build-essential, cvs-buildpackage, debian-keyring, devscripts-el, equivs, gnuplot, libauthen-sasl-perl, libcrypt-ssleay-perl, libfile-desktopentry-perl, libnet-smtp-ssl-perl, libsoap-lite-perl, libterm-size-perl, libtimedate-perl, libyaml-syck-perl, mutt, ssh-client, svn-buildpackage, w3m
Breaks: ubuntu-dev-tools (<< 0.124~)
Conffiles:
 /etc/bash_completion.d/devscripts.pkgnames fbfcaf86f5222a2bd45088338d203570
 /etc/bash_completion.d/devscripts.chdist ce1326f1aedca35a2d0b4ca8296e3cef
 /etc/cowpoke.conf 41ed5ff5e43fcf5fe7933989adc07d89
Description: scripts to make the life of a Debian Package maintainer easier
 Contains the following scripts, dependencies/recommendations shown in
 brackets afterwards:
 .
  - annotate-output: run a command and prepend time and stream (O for stdout,
    E for stderr) for every line of output
  - archpath: print tla/Bazaar package names [tla | bazaar]
  - bts: a command-line tool for manipulating the BTS [www-browser,
    libauthen-sasl-perl, libnet-smtp-ssl-perl, libsoap-lite-perl, libwww-perl,
    bsd-mailx | mailx]
  - build-rdeps: Searches for all packages that build-depend on a
    given package [dctrl-tools]
  - chdist: tool to easily play with several distributions [dctrl-tools]
  - checkbashisms: check whether a /bin/sh script contains any common
    bash-specific contructs
  - cowpoke: upload a Debian source package to a cowbuilder host and build it,
    optionally also signing and uploading the result to an incoming queue
    [ssh-client]
  - cvs-debi, cvs-debc: wrappers around debi and debc respectively (see below)
    which allow them to be called from the CVS working directory.
    [cvs-buildpackage]
  - cvs-debrelease: wrapper around debrelease which allows it to be called
    from the CVS working directory. [cvs-buildpackage, dupload | dput,
    ssh-client]
  - cvs-debuild: A wrapper for cvs-buildpackage to use debuild as its package
    building program. [cvs-buildpackage, fakeroot, lintian, gnupg]
  - dcmd: run a given command replacing the name of a .changes or .dsc file
    with each of the files referenced therein
  - dcontrol: remotely query package and source control files for all Debian
    distributions. [liburl-perl, libwww-perl]
  - dd-list: given a list of packages, pretty-print it ordered by maintainer
  - debc: display the contents of just-built .debs
  - debchange/dch: automagically add entries to debian/changelog files
    [libparse-debcontrol-perl, libsoap-lite-perl]
  - debcheckout: checkout the development repository of a Debian package
  - debclean: purge a Debian source tree [fakeroot]
  - debcommit: commit changes to cvs, darcs, svn, svk, tla, bzr, git, or hg,
    basing commit message on changelog
    [cvs | darcs | subversion | svk | tla | bzr | git-core | mercurial]
  - debdiff: compare two versions of a Debian package to check for
    added and removed files [wdiff, patchutils]
  - debi: install a just-built package
  - debpkg: dpkg wrapper to be able to manage/test packages without su
  - debrelease: wrapper around dupload or dput [dupload | dput, ssh-client]
  - debsign, debrsign: sign a .changes/.dsc pair without needing any of
    the rest of the package to be present; can sign the pair remotely
    or fetch the pair from a remote machine for signing [gnupg,
    debian-keyring, ssh-client]
  - debsnap: grab packages from http://snapshot.debian.org [libwww-perl,
    libjson-perl]
  - debuild: wrapper to build a package without having to su or worry
    about how to invoke dpkg to build using fakeroot.  Also deals
    with common environment problems, umask etc. [fakeroot,
    lintian, gnupg]
  - deb-reversion: increases a binary package version number and repacks the
    archive
  - dep3changelog: generate a changelog entry from a DEP3-style patch header
  - desktop2menu: produce a skeleton menu file from a freedesktop.org
    desktop file [libfile-desktopentry-perl]
  - dget: downloads Debian source and binary packages [wget | curl]
  - dpkg-depcheck, dpkg-genbuilddeps: determine the packages used during
    the build of a Debian package; useful for determining the Build-Depends
    control field needed [build-essential, strace]
  - diff2patches: extract patches from a .diff.gz file placing them  under
    debian/ or, if present, debian/patches [patchutils]
  - dscextract: extract a single file from a Debian source package [patchutils]
  - dscverify: verify the integrity of a Debian package from the
    .changes or .dsc files [gnupg, debian-keyring, libdigest-md5-perl]
  - edit-patch: add/edit a patch for a source package and commit the changes
    [quilt | dpatch | cdbs]
  - getbuildlog: download package build logs from Debian auto-builders [wget]
  - grep-excuses: grep the update_excuses.html file for your packages
    [libterm-size-perl, wget, w3m]
  - licensecheck: attempt to determine the license of source files
  - list-unreleased: searches for unreleased packages
  - manpage-alert: locate binaries without corresponding manpages [man-db]
  - mass-bug: mass-file bug reports [bsd-mailx | mailx]
  - mergechanges: merge .changes files from a package built on different
    architectures
  - mk-build-deps: Given a package name and/or control file, generate a binary
    package which may be installed to satisfy the build-dependencies of the
    given packages. [equivs]
  - namecheck: Check project names are not already taken.
  - nmudiff: mail a diff of the current package against the previous version
    to the BTS to assist in tracking NMUs [patchutils, mutt]
  - plotchangelog: view a nice plot of the data in a changelog file
    [libtimedate-perl, gnuplot]
  - pts-subscribe: subscribe to the PTS for a limited period of time
    [bsd-mailx | mailx, at]
  - rc-alert: list installed packages which have release-critical bugs [wget]
  - rmadison: remotely query the Debian archive database about packages
    [wget | curl, liburi-perl]
  - suspicious-source: output a list of files which are not common source
    files [python-magic]
  - svnpath: print svn repository paths [subversion]
  - tagpending: runs from a Debian source tree and tags bugs that are to
    be closed in the latest changelog as pending. [libsoap-lite-perl]
  - transition-check: Check a list of source packages for involvement in
    transitions for which uploads to unstable are currently blocked
    [libwww-perl, libyaml-syck-perl]
  - uscan: scan upstream sites for new releases of packages
    [libcrypt-ssleay-perl, libwww-perl, unzip, xz-utils]
  - uupdate: integrate upstream changes into a source package [patch]
  - what-patch: determine what patch system, if any, a source package is using
    [patchutils]
  - whodepends: check which maintainers' packages depend on a package
  - who-uploads: determine the most recent uploaders of a package to the Debian
    archive [gnupg, debian-keyring, wget]
  - wnpp-alert: list installed packages which are orphaned or up for
    adoption [wget]
  - wnpp-check: check whether there is an open request for packaging or
    intention to package bug for a package [wget]
  - wrap-and-sort: wrap long lines and sort items in packaging files
    [python-debian]
 .
 Also included are a set of example mail filters for filtering mail
 from Debian mailing lists using exim, procmail, etc.
Original-Maintainer: Devscripts Devel Team <pkg-devscripts@teams.debian.net>

Package: libx11-6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 1476
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libx11
Version: 2:1.4.99.1-0ubuntu2
Depends: libc6 (>= 2.15), libxcb1 (>= 1.2), libx11-data
Pre-Depends: multiarch-support
Description: X11 client-side library
 This package provides a client interface to the X Window System, otherwise
 known as 'Xlib'.  It provides a complete API for the basic functions of the
 window system.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libX11
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libjasper1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 356
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: jasper
Version: 1.900.1-13
Replaces: libjasper-1.700-2
Depends: libc6 (>= 2.7), libjpeg8 (>= 8c)
Pre-Depends: multiarch-support
Suggests: libjasper-runtime
Conflicts: libjasper-1.700-2
Description: JasPer JPEG-2000 runtime library
 JasPer is a collection of software (i.e., a library and application programs)
 for the coding and manipulation of images.  This software can handle image
 data in a variety of formats.  One such format supported by JasPer is the
 JPEG-2000 format defined in ISO/IEC 15444-1:2000.
 .
 This package contains the shared library.
Original-Maintainer: Roland Stigge <stigge@antcom.de>

Package: grub-gfxpayload-lists
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 47
Maintainer: Colin Watson <cjwatson@ubuntu.com>
Architecture: amd64
Version: 0.6
Depends: grub-pc (>= 1.99~20101210-1ubuntu2)
Description: GRUB gfxpayload blacklist
 The 'set gfxpayload=keep' facility in GRUB provides smooth graphical
 handover to the Linux kernel.  Unfortunately, this does not work on all
 systems, resulting in a black or corrupt display.  This package provides a
 blacklist of PCI IDs which fail.
 .
 We maintain this separately from GRUB because it is likely to be updated on
 a different schedule.

Package: git-man
Status: install ok installed
Priority: optional
Section: doc
Installed-Size: 1093
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: git
Version: 1:1.7.9.5-1
Replaces: cogito (<< 0.16rc2-0), git (<< 1:1.7.4~rc1), git-core (<< 1:1.7.0.4-1.)
Breaks: git (<< 1:1.7.4~rc1)
Description: fast, scalable, distributed revision control system (manual pages)
 Git is popular version control system designed to handle very large
 projects with speed and efficiency; it is used for many high profile
 open source projects, most notably the Linux kernel.
 .
 Git falls in the category of distributed source code management tools.
 Every Git working directory is a full-fledged repository with full
 revision tracking capabilities, not dependent on network access or a
 central server.
 .
 This package provides reference documentation for use by the 'man'
 utility and the 'git help' command.
Original-Maintainer: Gerrit Pape <pape@smarden.org>
Homepage: http://git-scm.com/

Package: e2fsprogs
Essential: yes
Status: install ok installed
Priority: required
Section: admin
Installed-Size: 2326
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.42-1ubuntu2
Replaces: hurd (<= 20040301-1), libblkid1 (<< 1.38+1.39-WIP-2005.12.10-2), libuuid1 (<< 1.38+1.39-WIP-2005.12.10-2)
Pre-Depends: e2fslibs (= 1.42-1ubuntu2), libblkid1 (>= 2.17.2), libc6 (>= 2.14), libcomerr2 (>= 1.42~WIP-2011-10-05-1), libss2 (>= 1.34-1), libuuid1 (>= 2.16), util-linux (>= 2.15~rc1-1)
Suggests: gpart, parted, e2fsck-static
Conflicts: dump (<< 0.4b4-4), initscripts (<< 2.85-4), quota (<< 1.55-8.1), sysvinit (<< 2.85-4)
Conffiles:
 /etc/mke2fs.conf e2cdbf0620e93949af5857eb4739f949
Description: ext2/ext3/ext4 file system utilities
 The ext2, ext3 and ext4 file systems are successors of the original ext
 ("extended") file system. They are the main file system types used for
 hard disks on Debian and other Linux systems.
 .
 This package contains programs for creating, checking, and maintaining
 ext2/3/4-based file systems.
Homepage: http://e2fsprogs.sourceforge.net
Original-Maintainer: Theodore Y. Ts'o <tytso@mit.edu>

Package: libsigc++-2.0-0c2a
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 83
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libsigc++-2.0
Version: 2.2.10-0ubuntu2
Replaces: libsigc++-1.9-0, libsigc++-2.0-0, libsigc++-2.0-0c2
Depends: libc6 (>= 2.2.5), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6)
Pre-Depends: multiarch-support
Conflicts: libsigc++-1.9-0, libsigc++-2.0-0, libsigc++-2.0-0c2
Description: type-safe Signal Framework for C++ - runtime
 This library implements a full callback system for use in widget
 libraries, abstract interfaces, and general programming. It provides
 the ability to connect an abstract callback to a class method,
 function, or function object, and contains adaptor classes for the
 connection of dissimilar callbacks.
 .
 These are the runtime files for libsigc++, needed only if you wish to
 run software which depends on it.
Original-Maintainer: Daniel Burrows <dburrows@debian.org>

Package: openssh-server
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: net
Installed-Size: 807
Maintainer: Colin Watson <cjwatson@ubuntu.com>
Architecture: amd64
Source: openssh
Version: 1:5.9p1-5ubuntu1
Replaces: openssh-client (<< 1:3.8.1p1-11), ssh, ssh-krb5
Provides: ssh-server
Depends: libc6 (>= 2.15), libcomerr2 (>= 1.01), libgssapi-krb5-2 (>= 1.10+dfsg~), libkrb5-3 (>= 1.6.dfsg.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 1.32), libssl1.0.0 (>= 1.0.0), libwrap0 (>= 7.6-4~), zlib1g (>= 1:1.1.4), debconf (>= 1.2.0) | debconf-2.0, openssh-client (= 1:5.9p1-5ubuntu1), upstart-job, libpam-runtime (>= 0.76-14), libpam-modules (>= 0.72-9), adduser (>= 3.9), dpkg (>= 1.9.0), lsb-base (>= 3.2-13), procps
Recommends: xauth, ssh-import-id
Suggests: ssh-askpass, rssh, molly-guard, openssh-blacklist, openssh-blacklist-extra, ufw, monkeysphere
Conflicts: rsh-client (<< 0.16.1-1), sftp, ssh (<< 1:3.8.1p1-9), ssh-krb5 (<< 1:4.3p2-7), ssh-nonfree (<< 2), ssh-socks, ssh2
Conffiles:
 /etc/network/if-up.d/openssh-server d6e8fb0f6192bc4cb91c4a1bc50d096b
 /etc/default/ssh 500e3cf069fe9a7b9936108eb9d9c035
 /etc/pam.d/sshd 5ad89e19556206e750f3b096fbe9c6b3
 /etc/init/ssh.conf 2c7eae0c0ef56b191dad89310fa36b8e
 /etc/ufw/applications.d/openssh-server 486b78d54b93cc9fdc950c1d52ff479e
 /etc/init.d/ssh 72f87136ef9b97c7dba5fe2b75e13a59
Description: secure shell (SSH) server, for secure access from remote machines
 This is the portable version of OpenSSH, a free implementation of
 the Secure Shell protocol as specified by the IETF secsh working
 group.
 .
 Ssh (Secure Shell) is a program for logging into a remote machine
 and for executing commands on a remote machine.
 It provides secure encrypted communications between two untrusted
 hosts over an insecure network. X11 connections and arbitrary TCP/IP
 ports can also be forwarded over the secure channel.
 It can be used to provide applications with a secure communication
 channel.
 .
 This package provides the sshd server.
 .
 In some countries it may be illegal to use any encryption at all
 without a special permit.
 .
 sshd replaces the insecure rshd program, which is obsolete for most
 purposes.
Homepage: http://www.openssh.org/
Original-Maintainer: Debian OpenSSH Maintainers <debian-ssh@lists.debian.org>

Package: libatk1.0-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 222
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: atk1.0
Version: 2.4.0-0ubuntu1
Depends: libc6 (>= 2.2.5), libglib2.0-0 (>= 2.16.0), libatk1.0-data (= 2.4.0-0ubuntu1)
Pre-Depends: multiarch-support
Description: ATK accessibility toolkit
 ATK is a toolkit providing accessibility interfaces for applications or
 other toolkits. By implementing these interfaces, those other toolkits or
 applications can be used with tools such as screen readers, magnifiers, and
 other alternative input devices.
 .
 This is the runtime part of ATK, needed to run applications built with it.
Homepage: http://www.gtk.org/
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libcommons-daemon-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 414
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-daemon
Version: 1.0.8-1
Recommends: jsvc
Suggests: java-virtual-machine
Description: library to launch Java applications as daemons
 The Daemon package from Apache Commons can be used to implement Java
 applications which can be launched as daemons. For example the
 program will be notified about a shutdown so that it can perform
 cleanup tasks before its process of execution is destroyed by the
 operation system.
 .
 This package contains the java library. You will also need the actual
 binary for your architecture which is provided by the jsvc package.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/daemon/

Package: gcj-4.6-jre-lib
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 11209
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: gcj-4.6
Version: 4.6.3-1ubuntu2
Depends: gcj-4.6-base (>= 4.6.1-9), libgcj12 (>= 4.6.1-9)
Description: Java runtime library for use with gcj (jar files)
 This is the jar file that goes along with the gcj front end to gcc.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libgcj-common
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 248
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: gcc-defaults (1.112ubuntu5)
Version: 1:4.6.3-1ubuntu5
Replaces: java-gcj-compat (<< 1.0.65-8), java-gcj-compat-dev (<< 1.0.80-2)
Depends: python
Conflicts: classpath (<= 0.04-4)
Conffiles:
 /etc/java/security/security.d/1000-gnu.java.security.provider.Gnu d41d8cd98f00b204e9800998ecf8427e
 /etc/java/security/security.d/1001-gnu.javax.crypto.jce.GnuCrypto d41d8cd98f00b204e9800998ecf8427e
 /etc/java/security/security.d/1002-gnu.javax.crypto.jce.GnuSasl d41d8cd98f00b204e9800998ecf8427e
 /etc/java/security/security.d/1003-gnu.javax.net.ssl.provider.Jessie d41d8cd98f00b204e9800998ecf8427e
 /etc/java/security/security.d/1004-gnu.javax.security.auth.callback.GnuCallbacks d41d8cd98f00b204e9800998ecf8427e
 /etc/java/security/classpath.security cc0489fc4b7e4ce3a3032141476e6381
 /etc/java/cacerts-gcj 9803c0772cbd0a2253c02ea35b916b66
Description: Java runtime library (common files)
 This package contains files shared by classpath and libgcj libraries.
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: openjdk-6-jre-headless
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: java
Installed-Size: 74861
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openjdk-6
Version: 6b24-1.11.5-0ubuntu1~12.04.1
Replaces: openjdk-6-jdk (<< 6b20-1.9.1-0ubuntu2), openjdk-6-jre (<< 6b23~pre1), openjdk-6-jre-lib (<< 6b23~pre10)
Provides: java-runtime-headless, java2-runtime-headless, java5-runtime-headless, java6-runtime-headless
Depends: openjdk-6-jre-lib (>= 6b24-1.11.5-0ubuntu1~12.04.1), ca-certificates-java, tzdata-java, java-common (>= 0.28), libcups2, libjpeg8, libnss3-1d (>= 3.12.9+ckbi-1.82-0ubuntu4), libpcsclite1, libc6 (>= 2.14), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.1.1), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Recommends: icedtea-6-jre-cacao (= 6b24-1.11.5-0ubuntu1~12.04.1), icedtea-6-jre-jamvm (= 6b24-1.11.5-0ubuntu1~12.04.1)
Suggests: libnss-mdns, sun-java6-fonts, ttf-dejavu-extra, fonts-ipafont-gothic, fonts-ipafont-mincho, ttf-wqy-microhei | ttf-wqy-zenhei, ttf-indic-fonts-core, ttf-telugu-fonts, ttf-oriya-fonts, ttf-kannada-fonts, ttf-bengali-fonts
Conflicts: default-jre-headless (<< 1.6-43~), icedtea-netx (<< 1.1.1-2~), openjdk-6-dbg (<< 6b17~pre3-1), openjdk-6-demo (<< 6b17~pre3-1), openjdk-6-doc (<< 6b17~pre3-1), openjdk-6-jdk (<< 6b17~pre3-1), openjdk-6-jre (<< 6b17~pre3-1), openjdk-6-jre-lib (<< 6b17~pre3-1), openjdk-6-jre-zero (<< 6b17~pre3-1), openjdk-6-source (<< 6b17~pre3-1)
Conffiles:
 /etc/java-6-openjdk/fontconfig.properties 925126b088a4850f3ae18651d4ef7c41
 /etc/java-6-openjdk/security/java.policy 0b20655c90b7420c62083c1443e536df
 /etc/java-6-openjdk/security/nss.cfg 29cf69843bcfaa33f10222d39b198d73
 /etc/java-6-openjdk/security/java.security 7f7d96e3a2c5aacad4ba2e66fc79852c
 /etc/java-6-openjdk/logging.properties 2ebf6417293beb2566a950abc02b07e8
 /etc/java-6-openjdk/content-types.properties ab9822ef63ffab6c4ecdc78d0802af28
 /etc/java-6-openjdk/flavormap.properties bd3358f8302e986722d445af2b1b0a25
 /etc/java-6-openjdk/psfontj2d.properties abcd0373622e1c9cb6974bfb34cc4e90
 /etc/java-6-openjdk/management/snmp.acl 71a7de7dbe2977f6ece75c904d430b62
 /etc/java-6-openjdk/management/management.properties 81a43119ab15099c1d70e2d683fc8c0a
 /etc/java-6-openjdk/management/jmxremote.password 7b46c291e7073c31d3ce0adae2f7554f
 /etc/java-6-openjdk/management/jmxremote.access f63bea1f4a31317f6f061d83215594df
 /etc/java-6-openjdk/sound.properties 9ff2fcee52a281d643d591f9696a800b
 /etc/java-6-openjdk/net.properties 19854300cbe8fc2d955111b0b31d0652
 /etc/java-6-openjdk/psfont.properties.ja 8048b217d4423a9226ec8e5c7ef811bb
 /etc/java-6-openjdk/swing.properties 235f7a79068085d8ef02e2b5134a294a
 /etc/java-6-openjdk/calendars.properties 53af14d97565d1c7e1525e2e9a930f36
 /etc/java-6-openjdk/accessibility.properties cb5ef274bab0096317e5053916bd8bb8
 /etc/java-6-openjdk/tz.properties 711fb698d093b25fd521371696bbe015
 /etc/java-6-openjdk/images/cursors/cursors.properties a70639354df03f1fbb3053a021fb880b
 /etc/java-6-openjdk/jvm-amd64.cfg db4031e10650dc1e6b0e19731040aa9f
Description: OpenJDK Java runtime, using Hotspot JIT (headless)
 Minimal Java runtime - needed for executing non GUI Java programs.
 Using Hotspot JIT.
 The packages are built using the IcedTea build support and patches
 from the IcedTea project.
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>
Homepage: http://openjdk.java.net/

Package: liblzma5
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 303
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: xz-utils
Version: 5.1.1alpha+20110809-3
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: XZ-format compression library
 XZ is the successor to the Lempel-Ziv/Markov-chain Algorithm
 compression format, which provides memory-hungry but powerful
 compression (often better than bzip2) and fast, easy decompression.
 .
 The native format of liblzma is XZ; it also supports raw (headerless)
 streams and the older LZMA format used by lzma. (For 7-Zip's related
 format, use the p7zip package instead.)
Original-Maintainer: Jonathan Nieder <jrnieder@gmail.com>
Homepage: http://tukaani.org/xz/

Package: ttf-dejavu-extra
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: fonts
Installed-Size: 6438
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ttf-dejavu
Version: 2.33-2ubuntu1
Replaces: ttf-dejavu (<< 2.20-1)
Depends: ttf-dejavu-core
Conflicts: ttf-dejavu (<< 2.20-1)
Description: Vera font family derivate with additional characters
 DejaVu provides an expanded version of the Vera font family aiming for
 quality and broader Unicode coverage while retaining the original Vera
 style. DejaVu currently works towards conformance with the Multilingual
 European Standards (MES-1 and MES-2) for Unicode coverage. The DejaVu
 fonts provide serif, sans and monospaced variants.
 .
 This package includes additional variants, such as oblique, italic,
 bold-oblique, bold-italic and the condensed forms.
 .
 DejaVu fonts are intended for use on low-resolution devices (mainly
 computer screens) but can be used in printing as well.
Homepage: http://dejavu-fonts.org/
Original-Maintainer: Debian Fonts Task Force <pkg-fonts-devel@lists.alioth.debian.org>

Package: libjsoup-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 338
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: jsoup
Version: 1.6.1-2
Suggests: libjsoup-java-doc
Description: Java HTML parser that makes sense of real-world HTML soup
 Jsoup is a Java library for working with real-world HTML. It provides a very
 convenient API for extracting and manipulating data, using the best of DOM,
 CSS, and jquery-like methods.
 .
 jsoup implements the WHATWG HTML specification (http://whatwg.org/html), and
 parses HTML to the same DOM as modern browsers do.
 .
   * parse HTML from a URL, file, or string
   * find and extract data, using DOM traversal or CSS selectors
   * manipulate the HTML elements, attributes, and text
   * clean user-submitted content against a safe white-list, to prevent XSS
   * output tidy HTML
 .
 jsoup is designed to deal with all varieties of HTML found in the wild; from
 pristine and validating, to invalid tag-soup; jsoup will create a sensible
 parse tree.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jsoup.org/

Package: tmux
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 516
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.6-1ubuntu1
Depends: libc6 (>= 2.14), libevent-2.0-5 (>= 2.0.16-stable), libtinfo5
Pre-Depends: dpkg (>= 1.15.7.2)
Description: terminal multiplexer
 tmux enables a number of terminals (or windows) to be accessed and
 controlled from a single terminal like screen. tmux runs as a
 server-client system. A server is created automatically when necessary
 and holds a number of sessions, each of which may have a number of
 windows linked to it. Any number of clients may connect to a session,
 or the server may be controlled by issuing commands with tmux.
 Communication takes place through a socket, by default placed in /tmp.
 Moreover tmux provides a consistent and well-documented command
 interface, with the same syntax whether used interactively, as a key
 binding, or from the shell. It offers a choice of vim or Emacs key
 layouts.
Homepage: http://tmux.sourceforge.net/
Original-Maintainer: Karl Ferdinand Ebert <kfebert@gmail.com>

Package: libnih1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 144
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libnih
Version: 1.0.3-4ubuntu9
Pre-Depends: multiarch-support, libc6 (>> 2.15), libc6 (<< 2.16)
Description: NIH Utility Library
 libnih is a light-weight "standard library" of C functions to ease the
 development of other libraries and applications, especially those
 normally found in /lib.
 .
 This package contains the shared library.
Homepage: https://launchpad.net/libnih
Original-Maintainer: Scott James Remnant <scott@netsplit.com>

Package: libcglib-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 830
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: cglib
Version: 2.2.2+dfsg-1
Replaces: libcglib2.1-java
Provides: libcglib2.1-java
Depends: libasm3-java
Conflicts: libcglib2.1-java
Description: code generation library for Java
 cglib is a powerful, high performance and quality code generation
 library. It is used to extend Java classes and implement interfaces at
 run-time.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://cglib.sourceforge.net

Package: libplexus-utils-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 283
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-utils
Version: 1:1.5.15-4
Depends: libxalan2-java, libplexus-interpolation-java
Suggests: libplexus-utils-java-doc
Description: utilities for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
     * Component lifecycles
     * Component instantiation strategies
     * Nested containers
     * Component configuration
     * Auto-wiring
     * Component dependencies, and
     * Various dependency injection techniques including constructor injection,
       setter injection, and private field injection.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/

Package: junit4
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 308
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 4.8.2-2
Depends: default-jre-headless | java5-runtime-headless, libhamcrest-java
Description: JUnit regression test framework for Java
 JUnit is a simple framework to write repeatable tests. It is an
 instance of the xUnit architecture for unit testing frameworks.
 .
 JUnit 4 uses Java 5 features such as generics and annotations.  If
 you need compatibility with previous Java versions, you should use
 the junit package (version 3) instead.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.junit.org/

Package: libcroco3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 334
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libcroco
Version: 0.6.5-1
Depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.16.0), libxml2 (>= 2.7.4)
Pre-Depends: multiarch-support
Description: Cascading Style Sheet (CSS) parsing and manipulation toolkit
 Services provided by Libcroco
  * A parser module that provides
    o A SAC like API. SAC stands for Simple API for CSS. SAC is an event driven
      API wich resembles SAX in the xml world.
    o A CSSOM like API. CSSOM stands for Cascading Style Sheet Object Model.
 .
    The libcroco parser implements the CSS Level 2 specification, the CSS
    forward compatibility rules and the CSS cascading rules.
 .
  * A CSS2 selection engine
    Given an xml element node (that obviously comes from an xml document) and
    a stylesheet cascade, the Libcroco selection engine can evaluate the css
    selectors of the cascade and return the style properties associated to
    the xml element node.
 .
    Note that the xml manipulation toolkit used by the libcroco selection
    engine at the moment is libxml2.
 .
 This package contains the shared libraries.
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libavahi-common3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 116
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: avahi
Version: 0.6.30-5ubuntu2
Depends: libc6 (>= 2.4), libavahi-common-data
Pre-Depends: multiarch-support
Description: Avahi common library
 Avahi is a fully LGPL framework for Multicast DNS Service Discovery.
 It allows programs to publish and discover services and hosts
 running on a local network with no specific configuration. For
 example you can plug into a network and instantly find printers to
 print to, files to look at and people to talk to.
 .
 This package contains the Avahi common library, which is a set of common
 functions used by many of Avahis components and client applications.
Homepage: http://avahi.org/
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: cpp
Status: install ok installed
Multi-Arch: allowed
Priority: optional
Section: interpreters
Installed-Size: 84
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-defaults (1.112ubuntu5)
Version: 4:4.6.3-1ubuntu5
Depends: cpp-4.6 (>= 4.6.3-1~)
Suggests: cpp-doc
Conflicts: cpp-doc (<< 1:2.95.3)
Description: GNU C preprocessor (cpp)
 The GNU C preprocessor is a macro processor that is used automatically
 by the GNU C compiler to transform programs before actual compilation.
 .
 This package has been separated from gcc for the benefit of those who
 require the preprocessor but not the compiler.
 .
 This is a dependency package providing the default GNU C preprocessor.
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libgnutls26
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 1052
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gnutls26
Version: 2.12.14-5ubuntu3.1
Replaces: gnutls0, gnutls0.4, gnutls3
Depends: libc6 (>= 2.14), libgcrypt11 (>= 1.4.5), libp11-kit0 (>= 0.11), libtasn1-3 (>= 1.6-0), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Suggests: gnutls-bin
Breaks: ccbuild (<= 2.0.1-1), csync2 (<= 1.34-2.2), freewheeling (<= 0.6-1.1), gkrellm (<= 2.3.4-1), libsoup2.4-1 (= 2.31.2-1), libsoup2.4-1 (<= 2.30.1-1), macopix-gtk2 (<= 1.7.4-3), pokerth (<= 0.8.3-3+b1), pokerth-server (<= 0.8.3-3+b1), sipsak (<= 0.9.6-2.1), slrn (<= 1.0.0~pre18-1.1), slrnpull (<= 1.0.0~pre18-1.1), snowdrop (<= 0.02b-9), ssmtp (<= 2.64-4), tf5 (<= 5.0beta8-4), wput (<= 0.6.2-2), zoneminder (<= 1.24.4-1)
Conflicts: gnutls0, gnutls0.4
Description: GNU TLS library - runtime library
 GnuTLS is a portable library which implements the Transport Layer
 Security (TLS 1.0, 1.1, 1.2) and Secure Sockets Layer (SSL) 3.0 protocols.
 .
 GnuTLS features support for:
  - TLS extensions: server name indication, max record size, opaque PRF
    input, etc.
  - authentication using the SRP protocol.
  - authentication using both X.509 certificates and OpenPGP keys.
  - TLS Pre-Shared-Keys (PSK) extension.
  - Inner Application (TLS/IA) extension.
  - X.509 and OpenPGP certificate handling.
  - X.509 Proxy Certificates (RFC 3820).
  - all the strong encryption algorithms (including SHA-256/384/512 and
    Camellia (RFC 4132)).
 .
 This package contains the runtime libraries.
Homepage: http://www.gnutls.org/
Original-Maintainer: Debian GnuTLS Maintainers <pkg-gnutls-maint@lists.alioth.debian.org>

Package: libgpm2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 78
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gpm
Version: 1.20.4-4
Depends: libc6 (>= 2.7)
Pre-Depends: multiarch-support
Suggests: gpm
Description: General Purpose Mouse - shared library
 This package provides a library that handles mouse requests
 and delivers them to applications. See the description for the 'gpm'
 package for more information.
Original-Maintainer: Peter Samuelson <peter@p12n.org>
Homepage: http://unix.schottelius.org/gpm/

Package: libdb5.1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 1536
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: db
Version: 5.1.25-11build1
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: Berkeley v5.1 Database Libraries [runtime]
 This is the runtime package for programs that use the v5.1 Berkeley
 database library.
Original-Maintainer: Debian Berkeley DB Group <pkg-db-devel@lists.alioth.debian.org>
Homepage: http://www.oracle.com/technology/software/products/berkeley-db/index.html

Package: libaether-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 739
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: aether
Version: 1.13.1-2
Depends: junit4, libasync-http-client-java, libplexus-classworlds2-java (>= 2.4), libplexus-containers1.5-java (>= 1.5.5), libplexus-utils2-java (>= 2.0.5), libsisu-ioc-java (>= 2.3.0), libslf4j-java, libwagon-java
Description: Library to handle Java artifact repositories
 Aether is a library for interacting with Java artifact repositories.
 .
 This involves the specification of local repository formats, remote repository
 formats, workspaces, transports, and artifact resolution.
 .
 Aether is a dependency of Maven but Aether don't depends on anything Maven
 specific. For instance, with Aether you can specify your dependency metadata
 in a properties files or in a database.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://aether.sonatype.org/

Package: libxalan2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 3547
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.7.1-7
Depends: libjaxp1.3-java, libxerces2-java (>= 2.8.0)
Suggests: libxalan2-java-doc, libbsf-java, libxsltc-java
Description: XSL Transformations (XSLT) processor in Java
 Xalan-Java is an XSLT processor for transforming XML documents into HTML,
 text, or other XML document types. It implements the W3C Recommendations for
 XSL Transformations (XSLT) and the XML Path Language (XPath). It can be used
 from the command line, in an applet or a servlet, or as a module in other
 programs.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://xml.apache.org/xalan-j/

Package: insserv
Status: install ok installed
Priority: required
Section: misc
Installed-Size: 221
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.14.0-2.1ubuntu2
Depends: libc6 (>= 2.14)
Suggests: bootchart
Breaks: sysv-rc (<< 2.87dsf-3)
Conffiles:
 /etc/insserv.conf d548110b8916421c5dd31fdf2bd3531e
 /etc/bash_completion.d/insserv 32975fe14795d6fce1408d5fd22747fd
Description: Tool to organize boot sequence using LSB init.d script dependencies
 The insserv program is used to update the order of symlinks in
 /etc/rc?.d/ with sysv-rc based on dependencies specified in the
 scripts themselves using LSB init.d script headers.
 .
 This allow each package maintainer to specify their init.d script
 relation to other scripts and make it possible to detect and reject
 script dependency loops as well as making sure all scripts start in
 their intended order.
 .
 The program insserv in this package should be used with care and
 together with the sysv-rc package, as using it incorrectly can lead
 to an unbootable system.
Homepage: http://savannah.nongnu.org/projects/sysvinit
Debian-Vcs-Browser: http://svn.debian.org/wsvn/initscripts-ng/trunk/src/insserv/
Debian-Vcs-Svn: svn://svn.debian.org/initscripts-ng/trunk/src/insserv
Original-Maintainer: Petter Reinholdtsen <pere@debian.org>

Package: gzip
Essential: yes
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 219
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.4-1ubuntu2
Depends: dpkg (>= 1.15.4) | install-info
Pre-Depends: libc6 (>= 2.14)
Suggests: less
Description: GNU compression utilities
 This package provides the standard GNU file compression utilities, which
 are also the default compression tools for Debian.  They typically operate
 on files with names ending in '.gz', but can also decompress files ending
 in '.Z' created with 'compress'.
Original-Maintainer: Bdale Garbee <bdale@gag.com>

Package: libwww-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 370
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.03-1
Depends: perl, ca-certificates, libencode-locale-perl, libfile-listing-perl, libhtml-parser-perl, libhtml-tagset-perl, libhtml-tree-perl, libhttp-cookies-perl, libhttp-date-perl, libhttp-message-perl, libhttp-negotiate-perl, liblwp-mediatypes-perl, liblwp-protocol-https-perl, libnet-http-perl, liburi-perl, libwww-robotrules-perl, netbase
Recommends: libhtml-form-perl, libhtml-format-perl, libhttp-daemon-perl, libmailtools-perl
Suggests: libauthen-ntlm-perl
Breaks: fusioninventory-agent (<< 2.1.8-2), gsutil (<< 3.1-1), libfrontier-rpc-perl (<< 0.07b4-6), libhttp-daemon-ssl-perl (<< 1.04-3), libhttp-proxy-perl (<< 0.24-2), libhttp-request-ascgi-perl (<< 1.2-2), libhttp-request-params-perl (<< 1.01-6), libjson-rpc-perl (<< 0.96-3), libpoe-perl (<< 2:1.2990-2), librpc-xml-perl (<< 0.74-2), libsoap-lite-perl (<< 0.7.12-3), libwww-mechanize-formfiller-perl (<< 0.10-2), libwww-mechanize-perl (<< 1.66-2), satutils (<= 0.6), tidy-proxy (<< 0.97-4)
Description: simple and consistent interface to the world-wide web
 libwww-perl (also known as LWP) is a collection of Perl modules that provide
 a simple and consistent programming interface (API) to the World-Wide Web.
 The main focus of the library is to provide classes and functions that allow
 you to write WWW clients. It also contains general purpose modules, as well
 as a simple HTTP/1.1-compatible server implementation.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/libwww-perl/

Package: dpkg
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 5931
Origin: debian
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Bugs: debbugs://bugs.debian.org
Architecture: amd64
Version: 1.16.1.2ubuntu7
Pre-Depends: libbz2-1.0, libc6 (>= 2.14), libselinux1 (>= 1.32), zlib1g (>= 1:1.1.4), coreutils (>= 5.93-1), tar (>= 1.23), xz-utils
Suggests: apt
Breaks: apt (<< 0.7.7), aptitude (<< 0.4.7-1), dpkg-dev (<< 1.15.8), libdpkg-perl (<< 1.15.8), pinfo (<< 0.6.9-3.1), tkinfo (<< 2.8-3.1)
Conffiles:
 /etc/dpkg/dpkg.cfg f4413ffb515f8f753624ae3bb365b81b
 /etc/dpkg/dpkg.cfg.d/multiarch e018c53338191b34f943e2b38e160d1a
 /etc/logrotate.d/dpkg 782ea5ae536f67ff51dc8c3e2eeb4cf9
 /etc/alternatives/README 69c4ba7f08363e998e0f2e244a04f881
 /etc/cron.daily/dpkg b6b8dc21210ea50db7cc4636f521758f
Description: Debian package management system
 This package provides the low-level infrastructure for handling the
 installation and removal of Debian software packages.
 .
 For Debian package development tools, install dpkg-dev.
Homepage: http://wiki.debian.org/Teams/Dpkg
Original-Maintainer: Dpkg Developers <debian-dpkg@lists.debian.org>

Package: grub-pc
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: admin
Installed-Size: 463
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: grub2
Version: 1.99-21ubuntu3.7
Replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub2 (<< 1.99-21ubuntu3.7)
Depends: debconf (>= 0.5) | debconf-2.0, grub-common, grub2-common (= 1.99-21ubuntu3.7), grub-pc-bin (= 1.99-21ubuntu3.7), ucf, grub-gfxpayload-lists
Conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy
Conffiles:
 /etc/kernel/postinst.d/zz-update-grub fe8ac9419007a7ca8e13525a35e3c09a
 /etc/kernel/postrm.d/zz-update-grub fe8ac9419007a7ca8e13525a35e3c09a
Description: GRand Unified Bootloader, version 2 (PC/BIOS version)
 GRUB is a portable, powerful bootloader.  This version of GRUB is based on a
 cleaner design than its predecessors, and provides the following new features:
 .
  - Scripting in grub.cfg using BASH-like syntax.
  - Support for modern partition maps such as GPT.
  - Modular generation of grub.cfg via update-grub.  Packages providing GRUB
    add-ons can plug in their own script rules and trigger updates by invoking
    update-grub2.
  - VESA-based graphical mode with background image support and complete 24-bit
    color set.
  - Support for extended charsets.  Users can write UTF-8 text to their menu
    entries.
 .
 This package contains a version of GRUB that has been built for use with
 traditional PC/BIOS architecture.
Homepage: http://www.gnu.org/software/grub/
Original-Maintainer: GRUB Maintainers <pkg-grub-devel@lists.alioth.debian.org>

Package: python-chardet
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 578
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: chardet
Version: 2.0.1-2build1
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Description: universal character encoding detector
 Chardet takes a sequence of bytes in an unknown character encoding, and
 attempts to determine the encoding.
 .
 Supported encodings:
  * ASCII, UTF-8, UTF-16 (2 variants), UTF-32 (4 variants)
  * Big5, GB2312, EUC-TW, HZ-GB-2312, ISO-2022-CN (Traditional and Simplified
    Chinese)
  * EUC-JP, SHIFT_JIS, ISO-2022-JP (Japanese)
  * EUC-KR, ISO-2022-KR (Korean)
  * KOI8-R, MacCyrillic, IBM855, IBM866, ISO-8859-5, windows-1251 (Cyrillic)
  * ISO-8859-2, windows-1250 (Hungarian)
  * ISO-8859-5, windows-1251 (Bulgarian)
  * windows-1252 (English)
  * ISO-8859-7, windows-1253 (Greek)
  * ISO-8859-8, windows-1255 (Visual and Logical Hebrew)
  * TIS-620 (Thai)
 .
 This library is a port of the auto-detection code in Mozilla.
Original-Maintainer: Piotr Ożarowski <piotr@debian.org>
Homepage: http://chardet.feedparser.org/

Package: libnet-ssleay-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 604
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.42-1build1
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.4), libssl1.0.0 (>= 1.0.0)
Suggests: libmime-base64-perl
Description: Perl module for Secure Sockets Layer (SSL)
 Net::SSLeay.pm is a perl module that allows you to call Secure Sockets
 Layer (SSL) functions of the SSLeay library directly from your perl
 scripts. It is useful if you want to program robots that access secure web
 servers or if you want to build your own applications over SSL encrypted
 tunnels. If you just want to view web pages on https servers, you do not
 need this - your web browser already knows to do that.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Net-SSLeay/

Package: libpcre3
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 441
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pcre3
Version: 8.12-4
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Breaks: approx (<< 4.4-1~), cduce (<< 0.5.3-2~), cmigrep (<< 1.5-7~), galax (<< 1.1-7~), libpcre-ocaml (<< 6.0.1~), liquidsoap (<< 0.9.2-3~), ocsigen (<< 1.3.3-1~)
Conflicts: libpcre3-dev (<= 4.3-3)
Description: Perl 5 Compatible Regular Expression Library - runtime files
 This is a library of functions to support regular expressions whose syntax
 and semantics are as close as possible to those of the Perl 5 language.
 .
 This package contains the runtime libraries.
Original-Maintainer: Mark Baker <mark@mnb.org.uk>

Package: openjdk-6-jre
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: java
Installed-Size: 697
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openjdk-6
Version: 6b24-1.11.5-0ubuntu1~12.04.1
Replaces: openjdk-6-jdk (<< 6b20-1.10~pre2-0ubuntu1), openjdk-6-jre-headless (<< 6b16~pre3)
Provides: java-runtime, java2-runtime, java5-runtime, java6-runtime
Depends: openjdk-6-jre-headless (>= 6b24-1.11.5-0ubuntu1~12.04.1), libasound2 (>= 1.0.23), libc6 (>= 2.15), libgif4 (>= 4.1.4), libjpeg8 (>= 8c), libpng12-0 (>= 1.2.13-4), libpulse0 (>= 1:0.99.1), libx11-6, libxext6, libxi6, libxrender1, libxtst6, libatk-wrapper-java-jni (>= 0.30.4-0ubuntu2)
Recommends: ttf-dejavu-extra, icedtea-netx
Suggests: icedtea-plugin
Conflicts: icedtea-gcjwebplugin (<< 1.0-1ubuntu4), openjdk-6-dbg (<< 6b17~pre3-1), openjdk-6-demo (<< 6b17~pre3-1), openjdk-6-doc (<< 6b17~pre3-1), openjdk-6-jdk (<< 6b17~pre3-1), openjdk-6-jre-headless (<< 6b17~pre3-1), openjdk-6-jre-lib (<< 6b17~pre3-1), openjdk-6-jre-zero (<< 6b17~pre3-1), openjdk-6-source (<< 6b17~pre3-1)
Description: OpenJDK Java runtime, using Hotspot JIT
 Full Java runtime environment - needed for executing Java GUI and Webstart
 programs. Using Hotspot JIT.
 The packages are built using the IcedTea build support and patches
 from the IcedTea project.
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>
Homepage: http://openjdk.java.net/

Package: aptitude
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 7064
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.6.6-1ubuntu1.1
Depends: libapt-pkg4.12 (>= 0.8.16~exp12ubuntu10.3), libboost-iostreams1.46.1 (>= 1.46.1-1), libc6 (>= 2.14), libcwidget3, libept1.4.12, libgcc1 (>= 1:4.1.1), libncursesw5 (>= 5.6+20070908), libsigc++-2.0-0c2a (>= 2.0.2), libsqlite3-0 (>= 3.6.5), libstdc++6 (>= 4.6), libtinfo5, libxapian22
Recommends: sensible-utils, apt-xapian-index, libparse-debianchangelog-perl
Suggests: aptitude-doc-en | aptitude-doc, tasksel, debtags
Conflicts: ia32-apt-get (<< 22)
Conffiles:
 /etc/logrotate.d/aptitude fb66bc5dc8c13edbcb83cea15ff86959
 /etc/cron.daily/aptitude f934222d5eb13cb132e2751bdb023318
 /etc/apt/apt.conf.d/05aptitude 85b39c8f9413a8f29ddcce844d026929
Description: terminal-based package manager (terminal interface only)
 aptitude is a package manager with a number of useful features,
 including: a mutt-like syntax for matching packages in a flexible
 manner, dselect-like persistence of user actions, the ability to
 retrieve and display the Debian changelog of most packages, and a
 command-line mode similar to that of apt-get.
 .
 aptitude is also Y2K-compliant, non-fattening, naturally cleansing,
 and housebroken.
 .
 This package contains a version of aptitude compiled with only the
 classic terminal-based interface (using curses).  For an experimental
 graphical interface, see the package aptitude-gtk.
Homepage: http://aptitude.alioth.debian.org/
Original-Maintainer: Aptitude Development Team <aptitude-devel@lists.alioth.debian.org>

Package: openjdk-6-jre-lib
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: java
Installed-Size: 7764
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: openjdk-6
Version: 6b24-1.11.5-0ubuntu1~12.04.1
Depends: openjdk-6-jre-headless (>= 6b17)
Breaks: openjdk-6-jre-headless (<< 6b23~pre9-1~)
Conflicts: openjdk-6-jre (<< 6b17~pre3-1), openjdk-6-jre-headless (<< 6b17~pre3-1)
Description: OpenJDK Java runtime (architecture independent libraries)
 OpenJDK Java runtime, using Hotspot JIT.
 The packages are built using the IcedTea build support and patches
 from the IcedTea project.
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>
Homepage: http://openjdk.java.net/

Package: iso-codes
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 13099
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.31-1
Suggests: isoquery
Description: ISO language, territory, currency, script codes and their translations
 This package provides the ISO 639 and ISO 639-3 language code lists,
 the ISO 4217 currency code list, the ISO 3166 territory code list,
 the ISO 3166-2 sub-territory list, and the ISO 15924 script code
 list as XML files.
 .
 More importantly, it also provides their translations to be used by
 other programs.
Original-Maintainer: Tobias Quathamer <toddy@debian.org>
Homepage: http://pkg-isocodes.alioth.debian.org/

Package: libosgi-core-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 269
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: osgi-core
Version: 4.3.0-1
Suggests: libosgi-core-java-doc
Description: Java OSGi API - Core module
 OSGi, for Open Services Gateway initiative framework, is a module system and
 service platform for the Java programming language.
 .
 This package contains OSGi Core for Release 4.
 Two main provided packages are org.osgi.service and
 org.osgi.framework.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.osgi.org/Specifications/HomePage

Package: libncursesw5
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 527
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ncurses
Version: 5.9-4
Depends: libtinfo5 (= 5.9-4), libc6 (>= 2.4)
Pre-Depends: multiarch-support
Recommends: libgpm2
Description: shared libraries for terminal handling (wide character support)
 The ncurses library routines are a terminal-independent method of
 updating character screens with reasonable optimization.
 .
 This package contains the shared libraries necessary to run programs
 compiled with ncursesw, which includes support for wide characters.
Original-Maintainer: Craig Small <csmall@debian.org>
Homepage: http://invisible-island.net/ncurses/

Package: python-simplejson
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 353
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: simplejson
Version: 2.3.2-1
Provides: python2.7-simplejson
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.2.5)
Recommends: libjs-jquery
Description: simple, fast, extensible JSON encoder/decoder for Python
 simplejson is a simple, fast, complete, correct and extensible JSON
 <http://json.org> encoder and decoder.
 .
 The encoder may be subclassed to provide serialization in any kind of
 situation, without any special support by the objects to be serialized
 (somewhat like pickle).
 .
 The decoder can handle incoming JSON strings of any specified encoding
 (UTF-8 by default).
 .
 simplejson is the externally maintained development version of the json
 library included with Python 2.6 and Python 3.0, but maintains backwards
 compatibility with Python 2.5.
Original-Maintainer: Debian Python Modules Team <python-modules-team@lists.alioth.debian.org>
Homepage: http://undefined.org/python/#simplejson

Package: liblocale-gettext-perl
Status: install ok installed
Priority: required
Section: perl
Installed-Size: 92
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.05-7build1
Depends: libc6 (>= 2.2.5)
Pre-Depends: perl-base (>= 5.14.2-3), perlapi-5.14.2
Description: module using libc functions for internationalization in Perl
 The gettext module permits access from perl to the gettext() family of
 functions for retrieving message strings from databases constructed
 to internationalize software.
 .
 It provides gettext(), dgettext(), dcgettext(), textdomain(),
 bindtextdomain(), bind_textdomain_codeset(), ngettext(), dcngettext()
 and dngettext().
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/gettext/gettext.pm

Package: ubuntu-keyring
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: misc
Installed-Size: 46
Maintainer: Michael Vogt <michael.vogt@canonical.com>
Architecture: all
Version: 2011.11.21.1
Recommends: gpgv
Description: GnuPG keys of the Ubuntu archive
 The Ubuntu project digitally signs its Release files. This package
 contains the archive keys used for that.

Package: python-xapian
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 1341
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: xapian-bindings
Version: 1.2.8-1
Provides: python2.7-xapian
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.1.1), libxapian22 (>= 1.2.8)
Suggests: xapian-doc
Description: Xapian search engine interface for Python
 This package provides Xapian Python bindings for all the packaged versions
 of Python.
 .
 The Xapian search engine library is a highly adaptable toolkit which allows
 developers to easily add advanced indexing and search facilities to their own
 applications.  It implements the probabilistic model of information retrieval,
 and provides facilities for performing ranked free-text searches, relevance
 feedback, phrase searching, boolean searching, stemming, and simultaneous
 update and searching.  It is highly scalable, and is capable of working with
 collections containing hundreds of millions of documents.
 .
 The Xapian Python bindings provide an interface to the Xapian library from the
 Python programming language, allowing both indexing and retrieval operations.
Original-Maintainer: Olly Betts <olly@survex.com>
Homepage: http://xapian.org/

Package: python-pam
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 79
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.4.2-12.2ubuntu4
Replaces: python2.3-pam, python2.4-pam
Provides: python2.7-pam
Depends: python2.7, python (>= 2.7), python (<< 2.8), libc6 (>= 2.4), libpam0g (>= 0.99.7.1)
Suggests: python-pam-dbg
Conflicts: python2.3-pam, python2.4-pam
Description: A Python interface to the PAM library
 This module makes the PAM (Pluggable Authentication Modules) functions
 available in Python. With this module you can write Python applications
 that implement authentication services using PAM.
Original-Maintainer: Dima Barsky <dima@debian.org>
Python-Version: 2.7

Package: build-essential
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 37
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 11.5ubuntu2.1
Depends: libc6-dev | libc-dev, gcc (>= 4:4.4.3), g++ (>= 4:4.4.3), make, dpkg-dev (>= 1.13.5)
Description: Informational list of build-essential packages
 If you do not plan to build Debian packages, you don't need this
 package.  Starting with dpkg (>= 1.14.18) this package is required
 for building Debian packages.
 .
 This package contains an informational list of packages which are
 considered essential for building Debian packages.  This package also
 depends on the packages on that list, to make it easy to have the
 build-essential packages installed.
 .
 If you have this package installed, you only need to install whatever
 a package specifies as its build-time dependencies to build the
 package.  Conversely, if you are determining what your package needs
 to build-depend on, you can always leave out the packages this
 package depends on.
 .
 This package is NOT the definition of what packages are
 build-essential; the real definition is in the Debian Policy Manual.
 This package contains merely an informational list, which is all
 most people need.   However, if this package and the manual disagree,
 the manual is correct.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: libencode-locale-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 57
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.02-2
Depends: perl
Description: utility to determine the locale encoding
 In many applications it's wise to let Perl use Unicode for the strings it
 processes. Most of the interfaces Perl has to the outside world are still byte
 based. Programs therefore need to decode byte strings that enter the program
 from the outside and encode them again on the way out.
 .
 The POSIX locale system is used to specify both the language conventions
 requested by the user and the preferred character set to consume and output.
 The Encode::Locale module looks up the charset and encoding (called a CODESET
 in the locale jargon) and arranges for the Encode module to know this encoding
 under the name "locale". It means bytes obtained from the environment can be
 converted to Unicode strings by calling Encode::encode(locale => $bytes) and
 converted back again with Encode::decode(locale => $string).
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Encode-Locale/

Package: python-twisted-core
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 5517
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: twisted
Version: 11.1.0-1ubuntu2
Replaces: python-twisted (<< 2.1.0-4), python2.3-twisted (<< 2.1.0-4), python2.3-twisted-core, python2.4-twisted (<< 2.1.0-4), python2.4-twisted-core
Provides: python2.7-twisted-core
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-twisted-bin (>= 11.1.0-1ubuntu2), python-zope.interface (>= 3.5)
Recommends: python-openssl, python-pam, python-serial
Suggests: python-tk, python-gtk2, python-glade2, python-qt3, python-wxgtk2.8
Conflicts: python-twisted (<< 2.1.0-4), python2.3-twisted (<< 2.1.0-4), python2.3-twisted-core, python2.4-twisted (<< 2.1.0-4), python2.4-twisted-core
Description: Event-based framework for internet applications
 It includes a web server, a telnet server, a multiplayer RPG engine, a
 generic client and server for remote object access, and APIs for creating
 new protocols.
Original-Maintainer: Matthias Klose <doko@debian.org>
Python-Version: 2.7

Package: velocity
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 975
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.7-4
Depends: ant, libcommons-collections3-java, libcommons-lang-java, libcommons-logging-java, libexcalibur-logkit-java, libjdom1-java (>= 1.1.2), liblog4j1.2-java (>= 1.2.16), libservlet2.5-java, libwerken.xpath-java
Recommends: liboro-java
Suggests: velocity-doc
Conffiles:
 /etc/velocity/velocity.properties 42baa300d9f050dca77bc682cfcc0272
Description: Java-based template engine for web application
 Velocity is a Java-based template engine. It permits anyone to use
 the simple yet powerful template language to reference objects
 defined in Java code.
 When Velocity is used for web development, Web designers can work in
 parallel with Java programmers to develop web sites according to the
 Model-View-Controller (MVC) model, meaning that web page designers
 can focus solely on creating a site that looks good, and programmers
 can focus solely on writing top-notch code. Velocity separates Java
 code from the web pages, making the web site more maintainable over
 the long run and providing a viable alternative to Java Server Pages
 (JSPs) or PHP.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://velocity.apache.org/

Package: info
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: doc
Installed-Size: 370
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: texinfo
Version: 4.13a.dfsg.1-8ubuntu2
Replaces: texinfo (<< 4.7-2)
Provides: info-browser
Depends: libc6 (>= 2.15), libtinfo5, install-info
Suggests: texinfo-doc-nonfree
Description: Standalone GNU Info documentation browser
 The Info file format is an easily-parsable representation for online
 documents. This program allows you to view Info documents, like the
 ones stored in /usr/share/info.
 .
 Much of the software in Debian comes with its online documentation in
 the form of Info files, so it is most likely you will want to install it.
Original-Maintainer: Debian TeX maintainers <debian-tex-maint@lists.debian.org>

Package: libheimntlm0-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 94
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libc6 (>= 2.4), libhcrypto4-heimdal (>= 1.4.0+git20110226), libkrb5-26-heimdal (>= 1.4.0+git20110226), libroken18-heimdal (>= 1.4.0+git20110226)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - NTLM support library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: x11proto-core-dev
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 1404
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: x11proto-core
Version: 7.0.22-1
Depends: xorg-sgml-doctools (>= 1:1.5)
Description: X11 core wire protocol and auxiliary headers
 This package provides development headers describing the wire protocol
 for the core X11 protocol, and also provides a number of utility headers,
 used to abstract OS-specific functions.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This package is built from the X.org xproto proto module.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: crda
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: net
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.1.2-1ubuntu1
Replaces: wireless-crda (<< 1.15), wireless-regdb (= 2011.04.28-1ubuntu1), wireless-regdb (= 2011.04.28-1ubuntu2)
Depends: libc6 (>= 2.4), libnl-3-200 (>= 3.2.3), libnl-genl-3-200 (>= 3.2.3), libssl1.0.0 (>= 1.0.0), wireless-regdb
Recommends: iw
Breaks: wireless-crda (<< 1.15), wireless-regdb (= 2011.04.28-1ubuntu1), wireless-regdb (= 2011.04.28-1ubuntu2)
Conffiles:
 /etc/default/crda d1f1468521b60cdfc0b9d22d5a74975a
Description: wireless Central Regulatory Domain Agent
 This package provides a Central Regulatory Domain Agent (CRDA) to be used by
 the Linux kernel cf80211 wireless subsystem to query and apply the regulatory
 domain settings wireless devices may operate within for a given location.
 .
 CRDA queries operational frequency regulations stored within the regulatory
 database provided by the wireless-regdb package.
Homepage: http://wireless.kernel.org/en/developers/Regulatory/#CRDA
Original-Maintainer: Ben Hutchings <ben@decadent.org.uk>

Package: python-magic
Status: install ok installed
Priority: extra
Section: python
Installed-Size: 86
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: file
Version: 5.09-2
Provides: python2.7-magic
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libmagic1 (= 5.09-2)
Suggests: python-magic-dbg
Description: File type determination library using "magic" numbers (Python bindings)
 This library can be used to classify files according to magic number tests. It
 implements the core functionality of the file command.
 .
 This package contains the Python bindings.
Original-Maintainer: Daniel Baumann <daniel.baumann@progress-technologies.net>
Homepage: http://www.darwinsys.com/file/

Package: dmsetup
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 157
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: lvm2 (2.02.66-4ubuntu7.1)
Version: 2:1.02.48-4ubuntu7.1
Depends: libc6 (>= 2.14), libdevmapper1.02.1 (>= 2:1.02.47), libudev0 (>= 147), initramfs-tools, util-linux (>> 2.16), udev (>> 141-2)
Breaks: udev (<< 138-1)
Conflicts: devicekit-disks (<< 009)
Description: The Linux Kernel Device Mapper userspace library
 The Linux Kernel Device Mapper is the LVM (Linux Logical Volume Management)
 Team's implementation of a minimalistic kernel-space driver that handles
 volume management, while keeping knowledge of the underlying device layout
 in user-space.  This makes it useful for not only LVM, but EVMS, software
 raid, and other drivers that create "virtual" block devices.
 .
 This package contains a utility for modifying device mappings.
Homepage: http://sources.redhat.com/lvm2/
Original-Maintainer: Debian LVM Team <pkg-lvm-maintainers@lists.alioth.debian.org>

Package: eject
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 152
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.1.5+deb1+cvs20081104-9
Depends: libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.20)
Suggests: cdtool, setcd
Description: ejects CDs and operates CD-Changers under Linux
 This little program will eject CD-ROMs (assuming your drive supports
 the CDROMEJECT ioctl). It also allows setting the autoeject feature.
 .
 On supported ATAPI/IDE multi-disc CD-ROM changers, it allows changing
 the active disc.
 .
 You can also use eject to properly disconnect external mass-storage
 devices like digital cameras or portable music players.
Original-Maintainer: Frank Lichtenheld <djpig@debian.org>
Homepage: http://www.pobox.com/~tranter/eject.html

Package: libcap-ng0
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 50
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libcap-ng
Version: 0.6.6-1ubuntu1
Depends: libc6 (>= 2.4)
Description: An alternate POSIX capabilities library
 This library implements the user-space interfaces to the POSIX
 1003.1e capabilities available in Linux kernels.  These capabilities are
 a partitioning of the all powerful root privilege into a set of distinct
 privileges.
 .
 The libcap-ng library is intended to make programming with POSIX
 capabilities much easier than the traditional libcap library.
 .
 This package contains header files and libraries for libcap-ng.
Original-Maintainer: Pierre Chifflier <pollux@debian.org>
Homepage: http://people.redhat.com/sgrubb/libcap-ng

Package: irqbalance
Status: install ok installed
Priority: extra
Section: utils
Installed-Size: 93
Maintainer: Ubuntu Developers <ubuntu-devel@lists.ubuntu.com>
Architecture: amd64
Version: 0.56-1ubuntu4
Depends: libc6 (>= 2.4), libcap-ng0, libglib2.0-0 (>= 2.12.0), debconf (>= 0.5) | debconf-2.0, upstart-job, lsb-base (>= 3.1)
Conffiles:
 /etc/init/irqbalance.conf c6931c198d2902e0899d3077debbf672
Description: Daemon to balance interrupts for SMP systems
 Daemon to balance interrupts across multiple CPUs, which can lead to
 better performance and IO balance on SMP systems. This package is
 especially useful on systems with multi-core processors, as interrupts
 will typically only be serviced by the first core.
 .
 Note: irqbalance is not useful if you don't have more than one core
       or socket.
Homepage: http://irqbalance.org/
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: gir1.2-glib-2.0
Status: install ok installed
Priority: optional
Section: introspection
Installed-Size: 575
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gobject-introspection
Version: 1.32.0-1
Depends: libgirepository-1.0-1 (>= 1.31.20), libglib2.0-0 (>= 2.31.22)
Breaks: gnome-shell (<< 3.0.2-6), python-gobject (<< 2.90)
Conflicts: gir1.0-glib-2.0, gobject-introspection-glib-2.0
Description: Introspection data for GLib, GObject, Gio and GModule
 GObject Introspection is a project for providing machine readable
 introspection data of the API of C libraries. This introspection
 data can be used in several different use cases, for example
 automatic code generation for bindings, API verification and documentation
 generation.
 .
 GObject Introspection contains tools to generate and handle the
 introspection data.
 .
 This package contains the introspection data for the GLib, GObject,
 GModule and Gio libraries.
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
Homepage: http://live.gnome.org/GObjectIntrospection

Package: linux-image-server
Status: install ok installed
Priority: optional
Section: kernel
Installed-Size: 31
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux-meta
Version: 3.2.0.35.40
Depends: linux-image-3.2.0-35-generic, linux-firmware
Description: Linux kernel image on Server Equipment.
 This package will always depend on the latest kernel image available
 for Server Equipment.

Package: gcc
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 41
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-defaults (1.112ubuntu5)
Version: 4:4.6.3-1ubuntu5
Provides: c-compiler
Depends: cpp (>= 4:4.6.3-1ubuntu5), gcc-4.6 (>= 4.6.3-1~)
Recommends: libc6-dev | libc-dev
Suggests: gcc-multilib, make, manpages-dev, autoconf, automake1.9, libtool, flex, bison, gdb, gcc-doc
Conflicts: gcc-doc (<< 1:2.95.3)
Description: GNU C compiler
 This is the GNU C compiler, a fairly portable optimizing compiler for C.
 .
 This is a dependency package providing the default GNU C compiler.
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: busybox-initramfs
Status: install ok installed
Priority: optional
Section: shells
Installed-Size: 363
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: busybox
Version: 1:1.18.5-1ubuntu4.1
Replaces: busybox-cvs-initramfs
Depends: libc6 (>= 2.11)
Conflicts: busybox-cvs-initramfs
Description: Standalone shell setup for initramfs
 BusyBox combines tiny versions of many common UNIX utilities into a single
 small executable. It provides minimalist replacements for the most common
 utilities you would usually find on your desktop system (i.e., ls, cp, mv,
 mount, tar, etc.). The utilities in BusyBox generally have fewer options than
 their full-featured GNU cousins; however, the options that are included
 provide the expected functionality and behave very much like their GNU
 counterparts.
 .
 busybox-initramfs provides a simple stand alone shell that provides
 only the basic utilities needed for the initramfs.
Homepage: http://www.busybox.net
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: libio-socket-ssl-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 153
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.53-1
Depends: perl, libnet-ssleay-perl, netbase
Recommends: libio-socket-inet6-perl, libnet-libidn-perl | liburi-perl (>= 1.50)
Description: Perl module implementing object oriented interface to SSL sockets
 This module is a true drop-in replacement for IO::Socket::INET that
 uses SSL to encrypt data before it is transferred to a remote server
 or client.  IO::Socket::SSL supports all the extra features that one
 needs to write a full-featured SSL client or server application:
 multiple SSL contexts, cipher selection, certificate verification, and
 SSL version selection.  As an extra bonus, it works perfectly with
 mod_perl.
 .
 IO::Socket::SSL uses IPv6 if libio-socket-inet6-perl is installed.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/IO-Socket-SSL/

Package: libwagon-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 558
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: wagon
Version: 1.0.0-2ubuntu2
Depends: junit (>= 3.8.2), junit4, libcommons-codec-java, libcommons-httpclient-java, libcommons-io-java, libcommons-logging-java, libcommons-net2-java, libeasymock-java, libjetty-java, libjsch-java, libjsoup-java, libmaven-scm-java, libplexus-container-default-java, libplexus-interactivity-api-java, libplexus-utils-java
Suggests: libwagon-java-doc
Description: tools to manage Maven artifacts and deployment
 The Wagon project defines a simple API for transferring resources
 (artifacts) to and from repositories. The word repository is used in this
 context as it is commonly used in Maven and means a storage of artifacts.
 .
 It is also used to deploy the Maven generated site to a server.
 .
 This package contains the following Jars:
 .
  wagon-file
    Implementation of Wagon provider for File system access.
  wagon-ftp
    Implementation of Wagon provider for FTP access.
  wagon-http
    Implementation of Wagon provider for HTTP access.
  wagon-http-lightweight
    Implementation of Wagon provider for HTTP access. It uses standard
    JDK classes as lower lever layer.
    It enables Maven to use remote repositories stored in HTTP servers.
    It doesn't allow deployment.
  wagon-http-shared
    This package is a shared Library for the wagon-http, and
    wagon-http-lightweight wagon providers
  wagon-scm
    Implementation of Wagon provider for Source Control access.
    Gets and puts artifacts using a Source Control Management system.
  wagon-ssh
    Implementation of Wagon provider for SCP and SFTP access.
    It enables Maven to deploy artifacts and sites to SSH servers. It
    uses JSch (Java Secure Channel) as lower level layer.
  wagon-ssh-common
    Implementation of Wagon provider for SCP and SFTP access. It
    enables Maven to deploy artifacts and sites to SSH servers.
    Getting files from SSH servers is not fully tested.
  wagon-ssh-external
    Implementation of Wagon provider for SSH servers access. It
    enables Maven to deploy artifacts and sites to SSH servers.
    It uses an external SSH program that has to be already installed
    in the system. Getting files from SSH servers is not fully tested.
  wagon-webdav-jackrabbit
    Implementation of Wagon provider for WebDAV access.
    It uses the Apache JackRabbit library for WebDAV access.
Homepage: http://maven.apache.org/wagon/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: python-crypto
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 1193
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.4.1-1ubuntu0.1
Replaces: python2.3-crypto, python2.4-crypto
Provides: python2.7-crypto
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.14), libgmp10
Suggests: python-crypto-dbg, python-crypto-doc
Conflicts: python2.3-crypto, python2.4-crypto
Description: cryptographic algorithms and protocols for Python
 A collection of cryptographic algorithms and protocols, implemented
 for use from Python. Among the contents of the package:
 .
  * Hash functions: HMAC, MD2, MD4, MD5, RIPEMD160, SHA, SHA256.
  * Block encryption algorithms: AES, ARC2, Blowfish, CAST, DES, Triple-DES.
  * Stream encryption algorithms: ARC4, simple XOR.
  * Public-key algorithms: RSA, DSA, ElGamal, qNEW.
  * Protocols: All-or-nothing transforms, chaffing/winnowing.
  * Miscellaneous: RFC1751 module for converting 128-key keys
    into a set of English words, primality testing, random number gereration.
Homepage: http://www.pycrypto.org/
Original-Maintainer: Sebastian Ramacher <s.ramacher@gmx.at>

Package: diffstat
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 88
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.54-1
Depends: libc6 (>= 2.4)
Description: produces graph of changes introduced by a diff file
 This program is a simple filter that reads the output of the 'diff' program,
 and produces a histogram of the total number of lines that were changed.
 It is useful for scanning a patch file to see which files were changed.
Original-Maintainer: Francois Marier <francois@debian.org>
Homepage: http://invisible-island.net/diffstat/

Package: libx11-dev
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libdevel
Installed-Size: 2573
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libx11
Version: 2:1.4.99.1-0ubuntu2
Depends: libx11-6 (= 2:1.4.99.1-0ubuntu2), libxau-dev (>= 1:1.0.0-1), libxdmcp-dev (>= 1:1.0.0-1), x11proto-core-dev (>= 6.8.99.8-1), x11proto-input-dev, x11proto-kb-dev, xtrans-dev, libxcb1-dev
Recommends: libx11-doc
Description: X11 client-side library (development headers)
 This package provides a client interface to the X Window System, otherwise
 known as 'Xlib'.  It provides a complete API for the basic functions of the
 window system.
 .
 This package contains the development headers for the library found in
 libx11-6. Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libX11
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: iputils-ping
Status: install ok installed
Priority: important
Section: net
Installed-Size: 140
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: iputils
Version: 3:20101006-1ubuntu1
Replaces: netbase (<< 4.00)
Provides: ping
Depends: libc6 (>= 2.4), libssl1.0.0 (>= 1.0.0)
Conflicts: ping, suidmanager (<< 0.50)
Description: Tools to test the reachability of network hosts
 The ping command sends ICMP ECHO_REQUEST packets to a host in order to
 test if the host is reachable via the network.
 .
 This package includes a ping6 utility which supports IPv6 network
 connections.
Original-Maintainer: Noah Meyerhans <noahm@debian.org>

Package: ttf-dejavu-core
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: fonts
Installed-Size: 2806
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ttf-dejavu
Version: 2.33-2ubuntu1
Replaces: ttf-dejavu (<< 2.20-1)
Conflicts: ttf-dejavu (<< 2.20-1)
Description: Vera font family derivate with additional characters
 DejaVu provides an expanded version of the Vera font family aiming for
 quality and broader Unicode coverage while retaining the original Vera
 style. DejaVu currently works towards conformance with the Multilingual
 European Standards (MES-1 and MES-2) for Unicode coverage. The DejaVu
 fonts provide serif, sans and monospaced variants.
 .
 This package only contains the sans, sans-bold, serif, serif-bold,
 mono and mono-bold variants. For additional variants, see the
 ttf-dejavu-extra package.
 .
 DejaVu fonts are intended for use on low-resolution devices (mainly
 computer screens) but can be used in printing as well.
Homepage: http://dejavu-fonts.org/
Original-Maintainer: Debian Fonts Task Force <pkg-fonts-devel@lists.alioth.debian.org>

Package: libcommons-dbcp-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 224
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.4-1ubuntu1
Depends: default-jre-headless | java2-runtime-headless, libcommons-pool-java, libcommons-collections3-java
Suggests: libgeronimo-jta-1.0.1b-spec-java
Description: Database Connection Pooling Services
 The DBCP package provides database connection pooling services. The
 following features are supported
 .
  * DataSource and Driver interfaces to the pool.
  * Support for arbitrary sources of the underlying Connections.
  * Integration with arbitrary org.apache.commons.pool.ObjectPool
    implementations.
  * Support for Connection validation, expiration, etc.
  * Support for PreparedStatement pooling.
  * XML configuration.
 .
 This is a part of the Apache Commons Project.
Homepage: http://commons.apache.org/dbcp/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libheimbase1-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 129
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - Base library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
 .
 This package contains the base library.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: iputils-tracepath
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 102
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: iputils
Version: 3:20101006-1ubuntu1
Replaces: netbase (<< 4.00)
Depends: libc6 (>= 2.4)
Suggests: traceroute
Conflicts: suidmanager (<< 0.50)
Description: Tools to trace the network path to a remote host
 The tracepath utility is similar to the traceroute utility, but also
 attempts to discover the MTU of the path.
 .
 This package also includes tracepath6 and traceroute6 utilities, which
 may be used on IPv6 networks.
Original-Maintainer: Noah Meyerhans <noahm@debian.org>

Package: authbind
Status: install ok installed
Priority: extra
Section: utils
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.2.0build3
Depends: libc6 (>= 2.3.4)
Description: Allows non-root programs to bind() to low ports
 This package allows a package to be started as non-root but
 still bind to low ports, without any changes to the application.
Original-Maintainer: Ian Jackson <ian@davenant.greenend.org.uk>

Package: xtrans-dev
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 404
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: xtrans
Version: 1.2.6-2
Description: X transport library (development files)
 xtrans includes a number of routines to make X implementations
 transport-independent; at time of writing, it includes support for UNIX
 sockets, IPv4, IPv6, and DECnet.
 .
 xtrans is not actually a library in itself; it includes .c files which are
 then used in the compilation of X servers, libraries, et al.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libxtrans
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libgssapi3-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 323
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libasn1-8-heimdal (>= 1.4.0+git20110226), libc6 (>= 2.14), libcomerr2 (>= 1.01), libhcrypto4-heimdal (>= 1.4.0+git20110226), libheimntlm0-heimdal (>= 1.4.0+git20110226), libkrb5-26-heimdal (>= 1.4.0+git20110403), libroken18-heimdal (>= 1.4.0+git20110226)
Pre-Depends: multiarch-support
Conflicts: libgssapi3
Description: Heimdal Kerberos - GSSAPI support library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
 .
 This package contains the library for GSSAPI support.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: libasn1-8-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 797
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libc6 (>= 2.14), libcomerr2 (>= 1.01), libroken18-heimdal (>= 1.4.0+git20110226)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - ASN.1 library
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
 .
 This package contains the ASN.1 parser required for Heimdal.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: libbz2-1.0
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 113
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bzip2
Version: 1.0.6-1
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: high-quality block-sorting file compressor library - runtime
 This package contains libbzip2 which is used by the bzip2 compressor.
 .
 bzip2 is a freely available, patent free, high-quality data compressor.
 It typically compresses files to within 10% to 15% of the best available
 techniques, whilst being around twice as fast at compression and six
 times faster at decompression.
 .
 bzip2 compresses files using the Burrows-Wheeler block-sorting text
 compression algorithm, and Huffman coding. Compression is generally
 considerably better than that achieved by more conventional
 LZ77/LZ78-based compressors, and approaches the performance of the PPM
 family of statistical compressors.
 .
 The archive file format of bzip2 (.bz2) is incompatible with that of its
 predecessor, bzip (.bz).
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://www.bzip.org/

Package: git
Status: install ok installed
Priority: optional
Section: vcs
Installed-Size: 13684
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:1.7.9.5-1
Replaces: cogito (<< 0.16rc2-0), git-core (<< 1:1.7.0.4-1.), gitweb (<< 1:1.7.4~rc1)
Provides: git-completion, git-core
Depends: libc6 (>= 2.14), libcurl3-gnutls (>= 7.16.2-1), libexpat1 (>= 1.95.8), zlib1g (>= 1:1.2.0), perl-modules, liberror-perl, git-man (>> 1:1.7.9.5), git-man (<< 1:1.7.9.5-.)
Recommends: patch, less, rsync, ssh-client
Suggests: git-daemon-run | git-daemon-sysvinit, git-doc, git-el, git-arch, git-cvs, git-svn, git-email, git-gui, gitk, gitweb
Breaks: cogito (<= 0.18.2+), git-buildpackage (<< 0.4.38), git-core (<< 1:1.7.0.4-1.), gitosis (<< 0.2+20090917-7), gitpkg (<< 0.15), gitweb (<< 1:1.7.4~rc1), guilt (<< 0.33), qgit (<< 1.5.5), stgit (<< 0.15), stgit-contrib (<< 0.15)
Conflicts: git-core (<< 1:1.5.2~rc3-2.)
Conffiles:
 /etc/bash_completion.d/git 8150253dd1e98e926da1dee7ee2253c6
Description: fast, scalable, distributed revision control system
 Git is popular version control system designed to handle very large
 projects with speed and efficiency; it is used for many high profile
 open source projects, most notably the Linux kernel.
 .
 Git falls in the category of distributed source code management tools.
 Every Git working directory is a full-fledged repository with full
 revision tracking capabilities, not dependent on network access or a
 central server.
 .
 This package provides the git main components with minimal dependencies.
 Additional functionality, e.g. a graphical user interface and revision
 tree visualizer, tools for interoperating with other VCS's, or a web
 interface, is provided as separate git* packages.
Original-Maintainer: Gerrit Pape <pape@smarden.org>
Homepage: http://git-scm.com/

Package: perl
Status: install ok installed
Priority: standard
Section: perl
Installed-Size: 17077
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 5.14.2-6ubuntu2.2
Replaces: libarchive-tar-perl (<= 1.38-2), libcompress-raw-bzip2-perl, libcompress-raw-zlib-perl, libcompress-zlib-perl, libdevel-dprof-perl, libdigest-md5-perl, libdigest-sha-perl, libencode-perl, libio-compress-base-perl, libio-compress-bzip2-perl, libio-compress-perl, libio-compress-zlib-perl, libmime-base64-perl, libmodule-corelist-perl (<< 2.14-2), libstorable-perl, libsys-syslog-perl, libthreads-perl, libthreads-shared-perl, libtime-hires-perl, libtime-piece-perl, perl-base (<< 5.10.1-12), perl-doc (<< 5.8.0-1), perl-modules (<< 5.8.1-1)
Provides: data-dumper, libcompress-raw-bzip2-perl, libcompress-raw-zlib-perl, libcompress-zlib-perl, libdevel-dprof-perl, libdigest-md5-perl, libdigest-sha-perl, libencode-perl, libio-compress-base-perl, libio-compress-bzip2-perl, libio-compress-perl, libio-compress-zlib-perl, libmime-base64-perl, libstorable-perl, libsys-syslog-perl, libthreads-perl, libthreads-shared-perl, libtime-hires-perl, libtime-piece-perl, perl5
Depends: perl-base (= 5.14.2-6ubuntu2.2), perl-modules (>= 5.14.2-6ubuntu2.2), libbz2-1.0, libc6 (>= 2.14), libdb5.1, libgdbm3 (>= 1.8.3), zlib1g (>= 1:1.2.3.3.dfsg)
Recommends: netbase
Suggests: perl-doc, libterm-readline-gnu-perl | libterm-readline-perl-perl, make
Breaks: libcompress-raw-bzip2-perl (<< 2.033), libcompress-raw-zlib-perl (<< 2.033), libcompress-zlib-perl (<< 2.033), libdevel-dprof-perl (<< 20110228.00), libdigest-md5-perl (<< 2.51), libdigest-sha-perl (<< 5.61), libencode-perl (<< 2.42.01), libio-compress-base-perl (<< 2.033), libio-compress-bzip2-perl (<< 2.033), libio-compress-perl (<< 2.033), libio-compress-zlib-perl (<< 2.033), libmime-base64-perl (<< 3.13), libstorable-perl (<< 2.27), libsys-syslog-perl (<< 0.27), libthreads-perl (<< 1.83), libthreads-shared-perl (<< 1.37), libtime-hires-perl (<< 1.9721.01), libtime-piece-perl (<< 1.20.01), mrtg (<< 2.16.3-3.1), perl-doc (<< 5.14.2-1)
Conflicts: doc-base (<< 0.10.3), libjson-pp-perl (<< 2.27200-2), libxml-sax-perl (<< 0.99+dfsg-1ubuntu0.1), mono-gac (<< 2.10.8.1-1)
Description: Larry Wall's Practical Extraction and Report Language
 An interpreted scripting language, known among some as "Unix's Swiss
 Army Chainsaw".
 .
 Perl is optimised for scanning arbitrary text files and system
 administration.  It has built-in extended regular expression matching
 and replacement, a data-flow mechanism to improve security with
 setuid scripts and is extensible via modules that can interface to C
 libraries.
Original-Maintainer: Niko Tyni <ntyni@debian.org>

Package: maven
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 1489
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.0.4-2
Replaces: maven2 (<< 2.2.1-11)
Depends: default-jre (>= 1:1.5) | default-jre-headless (>= 1:1.5) | java5-runtime | java5-runtime-headless, libaether-java, libcommons-cli-java, libcommons-codec-java, libcommons-httpclient-java, libcommons-logging-java, libguava-java, libplexus-cipher-java, libplexus-classworlds2-java (>= 2.4), libplexus-containers1.5-java, libplexus-interpolation-java, libplexus-sec-dispatcher-java, libplexus-utils2-java, libsisu-guice-java, libsisu-ioc-java, libwagon-java
Breaks: maven2 (<< 2.2.1-11)
Conffiles:
 /etc/maven/m2.conf 971e353814be2fadb5624301b759cc5a
 /etc/maven/settings.xml e42ed035a2d1d8e8d2db09659b0f8be9
 /etc/bash_completion.d/maven c410985b7dcc9e7489bd8d0c940e27e9
Description: Java software project management and comprehension tool
 Maven is a software project management and comprehension tool. Based on the
 concept of a project object model (POM), Maven can manage a project's build,
 reporting and documentation from a central piece of information.
 .
 Maven's primary goal is to allow a developer to comprehend the complete
 state of a development effort in the shortest period of time. In order to
 attain this goal there are several areas of concern that Maven attempts
 to deal with:
 .
    * Making the build process easy
    * Providing a uniform build system
    * Providing quality project information
    * Providing guidelines for best practices development
    * Allowing transparent migration to new features
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://maven.apache.org/

Package: friendly-recovery
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 67
Maintainer: Michael Vogt <michael.vogt@ubuntu.com>
Architecture: all
Version: 0.2.25
Depends: upstart-job, upstart, whiptail
Recommends: gettext-base, update-manager-core (>= 0.90.0)
Breaks: grub2 (<< 1.99-12ubuntu4), initramfs-tools (<< 0.99ubuntu4), upstart (<< 1.3-0ubuntu9)
Conffiles:
 /etc/init/friendly-recovery.conf e5ccadca648d429f076c31fabbd6bb81
Description: Make recovery more user-friendly
 Make the recovery mode more user-friendly by providing a menu
 with pluggable options.

Package: libhtml-parser-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 246
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.69-1build1
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.4), liburi-perl, libhtml-tagset-perl
Suggests: libdata-dump-perl
Enhances: libwww-perl
Description: collection of modules that parse HTML text documents
 HTML::Parser is a collection of modules useful for handling HTML documents.
 These modules used to be part of the libwww-perl distribution, but are now
 unbundled in order to facilitate a separate development track.
 .
 Objects of the HTML::Parser class will recognize markup and separate it from
 content data. As different kinds of markup are recognized, the corresponding
 event handler is invoked. The document to be parsed may also be supplied in
 arbitrary chunks, making on-the-fly parsing of network documents possible.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTML-Parser/

Package: python-wadllib
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 167
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.3.0-2
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-pkg-resources, python-lazr.uri
Description: Python library for navigating WADL files
 The Web Application Description Language (WADL) is an XML vocabulary for
 describing the capabilities of HTTP resources. wadllib can be used in
 conjunction with an HTTP library to navigate and manipulate those resources.
 .
 This package provides wadllib for Python 2.x.
Original-Maintainer: Stefano Rivera <stefanor@debian.org>
Homepage: https://launchpad.net/wadllib

Package: tomcat6-common
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 114
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: tomcat6
Version: 6.0.35-1ubuntu3.2
Depends: libtomcat6-java (>= 6.0.35-1ubuntu3.2), default-jre-headless | java7-runtime-headless | java7-runtime | java6-runtime-headless | java6-runtime | java5-runtime
Description: Servlet and JSP engine -- common files
 Apache Tomcat implements the Java Servlet and the JavaServer Pages (JSP)
 specifications from Sun Microsystems, and provides a "pure Java" HTTP web
 server environment for Java code to run.
 .
 This package contains common files needed by the tomcat6 and tomcat6-user
 packages (Tomcat 6 scripts and libraries).
Homepage: http://tomcat.apache.org
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libdrm-intel1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 177
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libdrm
Version: 2.4.32-1ubuntu1
Depends: libc6 (>= 2.14), libdrm2 (>= 2.4.3), libpciaccess0
Pre-Depends: multiarch-support
Description: Userspace interface to intel-specific kernel DRM services -- runtime
 This library implements the userspace interface to the intel-specific kernel
 DRM services.  DRM stands for "Direct Rendering Manager", which is the
 kernelspace portion of the "Direct Rendering Infrastructure" (DRI). The DRI is
 currently used on Linux to provide hardware-accelerated OpenGL drivers.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: wireless-tools
Status: install ok installed
Priority: extra
Section: net
Installed-Size: 324
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 30~pre9-5ubuntu2
Depends: libc6 (>= 2.15), libiw30 (>= 30~pre1)
Conffiles:
 /etc/network/if-pre-up.d/wireless-tools 90ae1e300f250b82577989492b0c3379
 /etc/network/if-post-down.d/wireless-tools 1f6530d0aee88247fe5001fe2f5f50d0
Description: Tools for manipulating Linux Wireless Extensions
 This package contains the Wireless tools, used to manipulate
 the Linux Wireless Extensions. The Wireless Extension is an interface
 allowing you to set Wireless LAN specific parameters and get the
 specific stats.
Homepage: http://www.hpl.hp.com/personal/Jean_Tourrilhes/Linux/Tools.html
Original-Maintainer: Guus Sliepen <guus@debian.org>

Package: libtinfo5
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 436
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ncurses
Version: 5.9-4
Replaces: libncurses5 (<< 5.9-3)
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: shared low-level terminfo library for terminal handling
 The ncurses library routines are a terminal-independent method of
 updating character screens with reasonable optimization.
 .
 This package contains the shared low-level terminfo library.
Original-Maintainer: Craig Small <csmall@debian.org>
Homepage: http://invisible-island.net/ncurses/

Package: python-apt-common
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 204
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: python-apt
Version: 0.8.3ubuntu7
Replaces: python-apt (<< 0.7.98+nmu1)
Depends: python | python3
Breaks: python-apt (<< 0.7.98+nmu1)
Enhances: python-apt, python3-apt
Description: Python interface to libapt-pkg (locales)
 The apt_pkg Python interface will provide full access to the internal
 libapt-pkg structures allowing Python programs to easily perform a
 variety of functions.
 .
 This package contains locales.
Original-Maintainer: APT Development Team <deity@lists.debian.org>

Package: libsaxon-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 611
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:6.5.5-8
Suggests: libjdom1-java, libsaxon-java-doc
Description: Saxon XSLT Processor
 The saxon package is a collection of tools for processing XML documents and
 implements the XSLT 1.0 recommendation, including XPath 1.0, in its entirety.
 .
 Saxon is known to work well for processing DocBook XML documents
 with the DocBook XSL Stylesheets. Related packages make the process
 straightforward.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://saxon.sourceforge.net/

Package: libio-pty-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 137
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:1.08-1build2
Provides: libio-tty-perl
Depends: libc6 (>= 2.4), perl (>= 5.14.2-3build1), perlapi-5.14.2
Description: Perl module for pseudo tty IO
 IO::Pty provides I/O handles to the master- and slave-side of a
 pseudo tty.
Original-Maintainer: Jörgen Hägg <jh@debian.org>

Package: libvorbis0a
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 227
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libvorbis
Version: 1.3.2-1ubuntu3
Replaces: libvorbis0
Depends: libc6 (>= 2.15), libogg0 (>= 1.1.0)
Pre-Depends: multiarch-support
Conflicts: libvorbis0
Description: The Vorbis General Audio Compression Codec (Decoder library)
 Ogg Vorbis is a fully open, non-proprietary, patent-and-royalty-free,
 general-purpose compressed audio format for audio and music at fixed
 and variable bitrates from 16 to 128 kbps/channel.
 .
 The Vorbis library is the primary Ogg Vorbis library.
Original-Maintainer: Debian Xiph.org Maintainers <pkg-xiph-maint@lists.alioth.debian.org>

Package: libsub-name-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 72
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.05-1build2
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.2.5)
Description: module for assigning a new name to referenced sub
 Sub::Name has only one function, which is also exported by default:
 .
 subname NAME, CODEREF
 .
 Assigns a new name to referenced sub. If package specification is
 omitted in the name, then the current package is used. The return
 value is the sub.
 .
 The name is only used for informative routines (caller, Carp, etc).
 You won't be able to actually invoke the sub by the given name. To
 allow that, you need to do glob-assignment yourself.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Sub-Name/

Package: linux-server
Status: install ok installed
Priority: optional
Section: kernel
Installed-Size: 31
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux-meta
Version: 3.2.0.35.40
Depends: linux-image-server (= 3.2.0.35.40)
Description: Complete Linux kernel on Server Equipment.
 This package will always depend on the latest complete Linux kernel available
 for Server Equipment.

Package: unzip
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 424
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 6.0-4ubuntu1
Replaces: unzip-crypt (<< 5.41)
Depends: libbz2-1.0, libc6 (>= 2.4)
Suggests: zip
Conflicts: unzip-crypt (<< 5.41)
Description: De-archiver for .zip files
 InfoZIP's unzip program. With the exception of multi-volume archives
 (ie, .ZIP files that are split across several disks using PKZIP's /& option),
 this can handle any file produced either by PKZIP, or the corresponding
 InfoZIP zip program.
 .
 This version supports encryption.
Homepage: http://www.info-zip.org/UnZip.html
Original-Maintainer: Santiago Vila <sanvila@debian.org>

Package: libpciaccess0
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 75
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libpciaccess
Version: 0.12.902-1
Depends: libc6 (>= 2.7), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Suggests: pciutils
Description: Generic PCI access library for X
 Provides functionality for X to access the PCI bus and devices
 in a platform-independant way.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libplexus-cipher-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 74
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-cipher
Version: 1.5-2
Depends: junit (>= 3.8.2), libplexus-container-default-java
Suggests: libplexus-cipher-java-doc
Description: Plexus Cipher Component used by Maven
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
 .
 This package provides a cipher component for Plexus.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: https://github.com/sonatype/plexus-cipher

Package: libavahi-client3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 135
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: avahi
Version: 0.6.30-5ubuntu2
Depends: libavahi-common3 (>= 0.6.22), libc6 (>= 2.4), libdbus-1-3 (>= 1.1.1)
Pre-Depends: multiarch-support
Description: Avahi client library
 Avahi is a fully LGPL framework for Multicast DNS Service Discovery.
 It allows programs to publish and discover services and hosts
 running on a local network with no specific configuration. For
 example you can plug into a network and instantly find printers to
 print to, files to look at and people to talk to.
 .
 This package contains the library for Avahi's C API which  allows you
 to integrate mDNS/DNS-SD functionality into your application.
Homepage: http://avahi.org/
Original-Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>

Package: libc-bin
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: libs
Installed-Size: 3479
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: eglibc
Version: 2.15-0ubuntu10.3
Replaces: libc0.1, libc0.3, libc6, libc6.1
Breaks: libc0.1 (<< 2.10), libc0.3 (<< 2.10), libc6 (<< 2.10), libc6.1 (<< 2.10)
Conffiles:
 /etc/ld.so.conf.d/libc.conf d4d833fd095fb7b90e1bb4a547f16de6
 /etc/default/nss d6d5d6f621fb3ead2548076ce81e309c
 /etc/bindresvport.blacklist d2d1b996add35b65f64a22e9c8413632
 /etc/gai.conf 629c0e2f8276b26c29b95f7ed53074d7
Description: Embedded GNU C Library: Binaries
 This package contains utility programs related to the GNU C Library.
 .
  * catchsegv: catch segmentation faults in programs
  * getconf: query system configuration variables
  * getent: get entries from administrative databases
  * iconv, iconvconfig: convert between character encodings
  * ldd, ldconfig: print/configure shared library dependencies
  * locale, localedef: show/generate locale definitions
  * rpcinfo: report RPC information
  * tzselect, zdump, zic: select/dump/compile time zones
Homepage: http://www.eglibc.org
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: linux-firmware
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 41266
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: all
Version: 1.79.1
Replaces: atmel-firmware, linux-restricted-common
Provides: atmel-firmware
Conflicts: atmel-firmware
Description: Firmware for Linux kernel drivers
 This package provides firmware used by Linux kernel drivers.

Package: libplexus-cli-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 79
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-cli
Version: 1.2-3
Depends: libcommons-cli-java, libplexus-container-default-java, libplexus-containers-java, libplexus-utils-java
Suggests: libplexus-cli-java-doc
Description: Easily create CLIs with Plexus components
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
 .
 This package provides a facility for creating CLIs with Plexus.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-components/plexus-cli/index.html

Package: linux-headers-3.2.0-35-generic
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 10995
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Architecture: amd64
Source: linux
Version: 3.2.0-35.55
Provides: linux-headers, linux-headers-3.0
Depends: linux-headers-3.2.0-35, libc6 (>= 2.14)
Description: Linux kernel headers for version 3.2.0 on 64 bit x86 SMP
 This package provides kernel header files for version 3.2.0 on
 64 bit x86 SMP.
 .
 This is for sites that want the latest kernel headers.  Please read
 /usr/share/doc/linux-headers-3.2.0-35/debian.README.gz for details.

Package: libcommons-jxpath-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 346
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.3-5
Suggests: libcommons-jxpath-java-doc
Description: manipulate javabean using XPath syntax
 This library provides the java developer the ability to manipulate
 javabeans with the XPath syntax. It also supports java collections,
 objects with dynamic properties (like Map, ServletContext, etc)
 and mechanism for adding support for additional models.
 .
 One of the most important feature of the component is the
 unification of reference syntax between DOM and java.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/jxpath/

Package: mime-support
Status: install ok installed
Priority: standard
Section: net
Installed-Size: 192
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.51-1ubuntu1
Recommends: file (>= 3.27-3)
Conflicts: a2ps (<< 4.10.4), metamail (<< 2.7-44)
Conffiles:
 /etc/mime.types 87d9979a76ee58b86b6183c4bfd9af94
 /etc/mailcap.order ba07e08a7fe3741d0b8339127963190e
Description: MIME files 'mime.types' & 'mailcap', and support programs
 As these files can be used by all MIME compliant programs, they
 have been moved into their own package that others can depend upon.
 .
 Other packages add themselves as viewers/editors/composers/etc by
 using the provided "update-mime" program.
 .
 In addition, the commands "see", "edit", "compose", and "print"
 will display, alter, create, and print (respectively) any file using
 a program determined from the entries in the mime.types and mailcap
 files.
Original-Maintainer: Brian White <bcwhite@pobox.com>

Package: ant-optional
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 745
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: ant
Version: 1.8.2-4build1
Replaces: libant1.6-java
Depends: ant (= 1.8.2-4build1)
Suggests: libbsf-java, liboro-java, libxalan2-java (>= 2.4.0-1), libjaxp1.3-java, junit, liblog4j1.2-java, libregexp-java, jython, antlr, libbcel-java (>= 5.0), libcommons-logging-java, libjdepend-java, libgnumail-java, libxml-commons-resolver1.1-java, libcommons-net-java, libjsch-java, javacc, ant-optional-gcj
Conflicts: libant1.6-java
Description: Java based build tool like make - optional libraries
 A system independent (i.e. not shell based) build tool that uses XML
 files as "Makefiles". This package contains the optional tasks libraries.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://ant.apache.org/

Package: libldap-2.4-2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 494
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openldap
Version: 2.4.28-1.1ubuntu4.2
Replaces: libldap-2.3-0, libldap2
Depends: libc6 (>= 2.14), libgcrypt11 (>= 1.4.5), libgnutls26 (>= 2.12.6.1-0), libgssapi3-heimdal (>= 1.4.0+git20110226), libsasl2-2 (>= 2.1.24)
Pre-Depends: multiarch-support
Conflicts: ldap-utils (<= 2.1.23-1)
Conffiles:
 /etc/ldap/ldap.conf 0b3f4d19d88498314478273ce10b0a70
Description: OpenLDAP libraries
 These are the run-time libraries for the OpenLDAP (Lightweight Directory
 Access Protocol) servers and clients.
Homepage: http://www.openldap.org/
Original-Maintainer: Debian OpenLDAP Maintainers <pkg-openldap-devel@lists.alioth.debian.org>

Package: libtomcat6-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 3439
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: tomcat6
Version: 6.0.35-1ubuntu3.2
Depends: libecj-java, libcommons-dbcp-java, libcommons-pool-java, libservlet2.5-java (>= 6.0.35-1ubuntu3.2)
Suggests: tomcat6 (>= 6.0.35-1ubuntu3.2)
Conflicts: tomcat6-common (<< 6.0.20-5)
Description: Servlet and JSP engine -- core libraries
 Apache Tomcat implements the Java Servlet and the JavaServer Pages (JSP)
 specifications from Sun Microsystems, and provides a "pure Java" HTTP web
 server environment for Java code to run.
 .
 This package contains the Tomcat core classes which can be used by other
 Java applications to embed Tomcat.
Homepage: http://tomcat.apache.org
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libkrb5-26-heimdal
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 643
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: heimdal
Version: 1.6~git20120311.dfsg.1-2
Depends: libasn1-8-heimdal (>= 1.4.0+git20110226), libc6 (>= 2.15), libcomerr2 (>= 1.41.11), libhcrypto4-heimdal (>= 1.4.0+git20110226), libheimbase1-heimdal (>= 1.6~git20120311), libhx509-5-heimdal (>= 1.4.0+git20110226), libroken18-heimdal (>= 1.4.0+git20110226), libsqlite3-0 (>= 3.5.9), libwind0-heimdal (>= 1.6~git20120311)
Pre-Depends: multiarch-support
Description: Heimdal Kerberos - libraries
 Heimdal is a free implementation of Kerberos 5 that aims to be
 compatible with MIT Kerberos.
 .
 This package contains the Kerberos 5 library.
Original-Maintainer: Brian May <bam@debian.org>
Homepage: http://www.h5l.org/

Package: libnss3
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 3082
Maintainer: Ubuntu Mozilla Team <ubuntu-mozillateam@lists.ubuntu.com>
Architecture: amd64
Source: nss
Version: 3.14.1-0ckbi1.93ubuntu.0.12.04.1
Replaces: libnss3-1d
Depends: libc6 (>= 2.7), libnspr4 (>= 4.8.6), libsqlite3-0 (>= 3.5.9), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Conflicts: libnss3-1d (<< 3.12.9~b2), sunbird
Description: Network Security Service libraries
 This is a set of libraries designed to support cross-platform development
 of security-enabled client and server applications. It can support SSLv2
 and  v4, TLS, PKCS #5, #7, #11, #12, S/MIME, X.509 v3 certificates and
 other security standards.
Homepage: http://www.mozilla.org/projects/security/pki/nss/
Original-Maintainer: Maintainers of Mozilla-related packages <pkg-mozilla-maintainers@lists.alioth.debian.org>

Package: xml-core
Status: install ok installed
Priority: optional
Section: text
Installed-Size: 260
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.13
Depends: sgml-base (>= 1.17), sed (>= 4.1.2-8)
Suggests: debhelper (>= 4.1.75)
Description: XML infrastructure and XML catalog file support
 This package creates the XML infrastructure directories and provides
 XML catalog file support in compliance with the current Debian XML
 Policy draft:
 .
   * infrastructure directories:
      - /etc/xml
      - /usr/share/xml/{declaration,entities,misc,schema}
      - /usr/local/share/xml/{declaration,entities,misc,schema}
 .
   * XML catalog schema: OASIS XML Catalog Committee Specification 1.0
 .
   * update-xmlcatalog(8): tool for maintaining the root XML catalog
     file and the package XML catalog files in the '/etc/xml' directory
     as well as local XML catalog files.
 .
   * dh_installxmlcatalogs(1): debhelper tool for installing local XML
     catalog files and registering XML entities in package XML catalog
     files and the root XML catalog file (requires debhelper package)
Original-Maintainer: Debian XML/SGML Group <debian-xml-sgml-pkgs@lists.alioth.debian.org>

Package: sysvinit-utils
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 260
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: sysvinit
Version: 2.88dsf-13.10ubuntu11.1
Replaces: last, sysvinit (<= 2.86.ds1-65)
Depends: libc6 (>= 2.15), libselinux1 (>= 1.32)
Recommends: upstart (>= 0.6.3-4)
Suggests: sash
Conflicts: chkconfig (<< 11.0-79.1-2), last, sysvconfig
Description: System-V-like utilities
 This package contains the important System-V-like utilities.
 .
 Specifically, this package includes:
 killall5, last, lastb, mesg, pidof, service, sulogin
Homepage: http://savannah.nongnu.org/projects/sysvinit
Original-Maintainer: Debian sysvinit maintainers <pkg-sysvinit-devel@lists.alioth.debian.org>

Package: cron
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 301
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 3.0pl1-120ubuntu4
Provides: cron-daemon
Depends: libc6 (>= 2.7), libpam0g (>= 0.99.7.1), libselinux1 (>= 1.32), upstart-job, debianutils (>= 1.7), adduser, lsb-base (>= 3.0-10), libpam-runtime (>= 1.0.1-11)
Pre-Depends: dpkg (>= 1.15.7.2)
Suggests: anacron (>= 2.0-1), logrotate, checksecurity, exim4 | postfix | mail-transport-agent
Breaks: dpkg (<< 1.15.4)
Conffiles:
 /etc/cron.weekly/.placeholder e5e12910bf011222160404d7bdb824f2
 /etc/init/cron.conf 1ed11393cd5e5e45d7d14c0e9d028fde
 /etc/cron.hourly/.placeholder e5e12910bf011222160404d7bdb824f2
 /etc/cron.monthly/.placeholder e5e12910bf011222160404d7bdb824f2
 /etc/default/cron 7bd39371e1c10e74dd3d37a58cc186f8
 /etc/pam.d/cron c0914a9d5dfaf3d5b09f83045e8bee93
 /etc/cron.daily/.placeholder e5e12910bf011222160404d7bdb824f2
 /etc/cron.daily/standard a28d268048a6d0ab2903751578028470
 /etc/cron.d/.placeholder e5e12910bf011222160404d7bdb824f2
 /etc/crontab 8f111d100ea459f68d333d63a8ef2205
Description: process scheduling daemon
 The cron daemon is a background process that runs particular programs at
 particular times (for example, every minute, day, week, or month), as
 specified in a crontab. By default, users may also create crontabs of
 their own so that processes are run on their behalf.
 .
 Output from the commands is usually mailed to the system administrator
 (or to the user in question); you should probably install a mail system
 as well so that you can receive these messages.
 .
 This cron package is configured by default to do some basic daily system
 maintenance tasks. Other packages, such as checksecurity, can provide further
 maintenance tasks.
Homepage: http://ftp.isc.org/isc/cron/
Original-Maintainer: Javier Fernandez-Sanguino Pen~a <jfs@debian.org>

Package: libmail-sendmail-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 100
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.79.16-1
Depends: perl (>= 5.6.0-16), libsys-hostname-long-perl
Description: Send email from a perl script
 Simple platform independent e-mail from your perl script. Only requires
 Perl 5, Sys::Hostname::Long, and a network connection.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Mail-Sendmail/

Package: multiarch-support
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: libs
Installed-Size: 201
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: eglibc
Version: 2.15-0ubuntu10.3
Depends: libc6 (>= 2.3.6-2)
Description: Transitional package to ensure multiarch compatibility
 This is a transitional package used to ensure multiarch support is present
 in ld.so before unpacking libraries to the multiarch directories.  It can
 be removed once nothing on the system depends on it.
Homepage: http://www.eglibc.org
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: libgcj-bc
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: java
Installed-Size: 37
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-defaults (1.112ubuntu5)
Version: 4.6.3-1ubuntu5
Depends: libgcj-common (>= 1:4.6.3-1ubuntu5), libgcj12 (>= 4.6.3-1~)
Pre-Depends: multiarch-support
Description: Link time only library for use with gcj
 A fake library that is used at link time only.  It ensures that
 binaries built with the BC-ABI link against a constant SONAME.
 This way, BC-ABI binaries continue to work if the SONAME underlying
 libgcj.so changes.
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: fontconfig-config
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: fonts
Installed-Size: 294
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: fontconfig
Version: 2.8.0-3ubuntu9.1
Replaces: fontconfig (<< 2.3.2-2)
Depends: ucf (>= 0.29), ttf-dejavu-core | ttf-bitstream-vera | ttf-freefont | gsfonts-x11
Conflicts: fontconfig (<< 2.3.2-2)
Conffiles:
 /etc/fonts/conf.d/README 296384642206e0c9952d5c73a5451eec
 /etc/fonts/conf.avail/10-sub-pixel-rgb.conf 60ef22ca1f56543131eddee764383b46
 /etc/fonts/conf.avail/11-lcd-filter-lcddefault.conf 34d7cffd14602241d09f23b0d1a39521
 /etc/fonts/conf.avail/10-hinting.conf 4d1fb88a99c516270526c8dca5764df8
 /etc/fonts/conf.avail/10-hinting-slight.conf 4d7df8529053d526a503b472ee42b2b3
 /etc/fonts/conf.avail/53-monospace-lcd-filter.conf a6737024098d0bdc74b70846d4b99fe9
 /etc/fonts/conf.avail/40-nonlatin.conf d12a86bf977f5714f90ec15a3d2cffd4
 /etc/fonts/conf.avail/10-sub-pixel-vrgb.conf a3198f34365f978c1fb5355a92e4ef94
 /etc/fonts/conf.avail/10-antialias.conf d77e6cfb9608490da012671c25213fe4
 /etc/fonts/conf.avail/10-no-sub-pixel.conf d06c13e792afb20a06528d23e6542459
 /etc/fonts/conf.avail/65-fonts-persian.conf 7df3a06989afcf1ecd9a8f44c9bf5d63
 /etc/fonts/conf.avail/90-synthetic.conf 7659edb861f44ff8e9f4e31567d24e47
 /etc/fonts/conf.avail/30-urw-aliases.conf c6c33cfde9f637e1d2b8cad9353df6dc
 /etc/fonts/conf.avail/10-autohint.conf 5fe723b1fde478085868af26461bcf58
 /etc/fonts/conf.avail/80-delicious.conf 1c0cbfdceb6bc7a55668c11f03b0710b
 /etc/fonts/conf.avail/70-yes-bitmaps.conf 91c414090c7d8bfe557785fe845cb6bd
 /etc/fonts/conf.avail/10-unhinted.conf 7bdecdf76d7bb22cd39e3b18bcbcc28d
 /etc/fonts/conf.avail/45-latin.conf 8d9a57e7891ecc9d6f0806a3e7c204a1
 /etc/fonts/conf.avail/20-unhint-small-vera.conf b975a96cc427cde633cbdedc4012aa22
 /etc/fonts/conf.avail/10-hinting-full.conf 65b0e8b7e1392797850856d8411d7272
 /etc/fonts/conf.avail/10-sub-pixel-bgr.conf cacb7572b778448d592501d03a7f96fd
 /etc/fonts/conf.avail/65-nonlatin.conf 03c4dfb9ed911a0cb0fb471ddbf63ba9
 /etc/fonts/conf.avail/49-sansserif.conf 22278b0b48e5864d9c7fcbc178da0db3
 /etc/fonts/conf.avail/60-latin.conf 2a898e836efee4347362e1e7f09cd0d6
 /etc/fonts/conf.avail/10-hinting-medium.conf b663214dd84d0f5c4e279b153e0b38f9
 /etc/fonts/conf.avail/25-unhint-nonlatin.conf 62953912e2a45ea9a1ef4d8a400b2894
 /etc/fonts/conf.avail/50-user.conf 0165add6524289f6eb0461ba0be73be2
 /etc/fonts/conf.avail/70-force-bitmaps.conf 6423e63e204d4ea4629cd3f58636fcdc
 /etc/fonts/conf.avail/69-unifont.conf 49a6cb52e1cf23e0f691807a3e8c105d
 /etc/fonts/conf.avail/20-fix-globaladvance.conf fbad2da072b8609477d89a59a167705a
 /etc/fonts/conf.avail/70-no-bitmaps.conf dccfa658875eea3b30514d7a8bc306bc
 /etc/fonts/conf.avail/65-khmer.conf ce66ea0c26f43091ab70092f3f7024d4
 /etc/fonts/conf.avail/10-sub-pixel-vbgr.conf d526b41cd9b4d5e09ab4044a39b4c038
 /etc/fonts/conf.avail/51-local.conf a2fa562c168c2c4cc0c2480bfdc0f8eb
 /etc/fonts/conf.avail/30-metric-aliases.conf 64accc211b62e4fb7da141d8c1c271b3
 /etc/fonts/fonts.dtd 9a099c7722190e00548c0d8375bdc24b
 /etc/fonts/fonts.conf 4c841acd3dd065819b23a0fc077d783c
Description: generic font configuration library - configuration
 Fontconfig is a font configuration and customization library, which
 does not depend on the X Window System. It is designed to locate
 fonts within the system and select them according to requirements
 specified by applications.
 .
 This package contains the configuration files and scripts for fontconfig.
Original-Maintainer: Keith Packard <keithp@debian.org>

Package: libedit2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 182
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libedit
Version: 2.11-20080614-3ubuntu2
Depends: libbsd0 (>= 0.0), libc6 (>= 2.14), libtinfo5
Pre-Depends: multiarch-support
Description: BSD editline and history libraries
 The editline library provides generic line editing and
 history functions.
 .
 It slightly resembles GNU readline
Homepage: http://ftp.netbsd.org/pub/NetBSD/NetBSD-current/src/lib/libedit/
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: python-oauth
Status: install ok installed
Priority: extra
Section: python
Installed-Size: 91
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.0.1-3build1
Provides: python2.7-oauth
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8)
Description: Python library implementing of the OAuth protocol
 python-oauth implements OAuth, which is an open protocol to allow API
 authentication in a simple and standard method from desktop and web
 applications.
Original-Maintainer: Debian Python Modules Team <python-modules-team@lists.alioth.debian.org>
Homepage: http://code.google.com/p/oauth

Package: libxtst6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 69
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxtst
Version: 2:1.2.0-4
Depends: libc6 (>= 2.4), libx11-6, libxext6, x11-common
Pre-Depends: multiarch-support
Description: X11 Testing -- Record extension library
 libXtst provides an X Window System client interface to the Record
 extension to the X protocol.
 .
 The Record extension allows X clients to synthesise input events, which
 is useful for automated testing.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXtst
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: nano
Status: install ok installed
Priority: important
Section: editors
Installed-Size: 604
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.2.6-1
Replaces: pico
Provides: editor
Depends: libc6 (>= 2.11), libncursesw5 (>= 5.7+20100313), dpkg (>= 1.15.4) | install-info
Suggests: spell
Breaks: alpine-pico (<= 2.00+dfsg-5)
Conflicts: pico
Conffiles:
 /etc/nanorc fc57b93c907fefbccf12317d40b4a204
Description: small, friendly text editor inspired by Pico
 GNU nano is an easy-to-use text editor originally designed as a replacement
 for Pico, the ncurses-based editor from the non-free mailer package Pine
 (itself now available under the Apache License as Alpine).
 .
 However, nano also implements many features missing in pico, including:
  - feature toggles;
  - interactive search and replace (with regular expression support);
  - go to line (and column) command;
  - auto-indentation and color syntax-highlighting;
  - filename tab-completion and support for multiple buffers;
  - full internationalization support.
Original-Maintainer: Jordi Mallach <jordi@debian.org>
Homepage: http://www.nano-editor.org/

Package: libipc-run-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 328
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.90-1
Depends: perl, libio-pty-perl (>= 1:1.08)
Description: Perl module for running processes
 IPC::Run allows you to run and interact with child processes using
 files, pipes, and pseudo-ttys.  Both system()-style and scripted
 usages are supported and may be mixed.  Likewise, functional and OO
 API styles are both supported and may be mixed.
 .
 Various redirection operators reminiscent of those seen on common
 Unix and DOS command lines are provided.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/IPC-Run/

Package: libemail-valid-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 78
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.185-1
Depends: perl, libmailtools-perl, libnet-dns-perl, libnet-domain-tld-perl (>= 1.65-2), netbase
Description: Perl module for checking the validity of Internet email addresses
 Email::Valid determines whether an email address is well-formed, and
 optionally, whether a mail host exists for the domain.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Email-Valid/

Package: libalgorithm-merge-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 80
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.08-2
Depends: perl, libalgorithm-diff-perl
Description: Perl module for three-way merge of textual data
 Algorithm::Merge provides three-way merge and diff functions, complementing
 the functionality offered by Algorithm::Diff (libalgorithm-diff-perl). Given
 three sets of items, known as the original, left and right, this module can
 take a three-way difference or merge them. Taking a difference provides an
 array reference that is very similar to the behaviour of Algorithm::Diff. One
 can also implement custom conflict resolution using the CONFLICT callback.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Algorithm-Merge/

Package: libisccc80
Status: install ok installed
Priority: optional
Section: libs
Installed-Size: 80
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: libbind0
Depends: libc6 (>= 2.14), libisc83
Conflicts: libbind0, libbind9-41
Description: Command Channel Library used by BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers the libisccc shared library used by BIND's daemons
 and clients, particularly rndc.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libice6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 137
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libice
Version: 2:1.0.7-2build1
Depends: libc6 (>= 2.14), x11-common
Pre-Depends: multiarch-support
Description: X11 Inter-Client Exchange library
 This package provides the main interface to the X11 Inter-Client Exchange
 library, which allows for communication of data between X clients.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libICE
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: pppoeconf
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.20ubuntu1
Depends: whiptail-provider | whiptail, ppp (>= 2.4.2+20040428-2) | pppoe (>= 3.0), ppp (>= 2.4.1.uus2-4), gettext-base (>= 0.13), sed (>= 3.95)
Recommends: locales
Suggests: xdialog
Description: configures PPPoE/ADSL connections
 User-friendly tool for initial configuration of a DSL (PPPoE) connection.
Original-Maintainer: Gregory Colpart <reg@debian.org>

Package: libjson0
Status: install ok installed
Multi-Arch: same
Priority: extra
Section: libs
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: json-c
Version: 0.9-1ubuntu1
Depends: libc6 (>= 2.8)
Pre-Depends: multiarch-support
Description: JSON manipulation library - shared library
 This library allows you to easily construct JSON objects in C,
 output them as JSON formatted strings and parse JSON formatted
 strings back into the C representation of JSON objects.
Homepage: http://oss.metaparadigm.com/json-c/
Original-Maintainer: fabien boucher <fabien.dot.boucher@gmail.com>

Package: landscape-common
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 1174
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: landscape-client
Version: 12.05-0ubuntu1.12.04
Replaces: landscape-client (<= 1.0.23-0ubuntu0.8.10)
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), debconf (>= 0.5) | debconf-2.0, libpam-modules (>= 1.0.1-9ubuntu3), libc6 (>= 2.2.5), python-gnupginterface, python-twisted-core, python-apt, ca-certificates, python-gdbm, lsb-release, lsb-base, adduser, bc, lshw
Description: The Landscape administration system client - Common files
 Landscape is a web-based tool for managing Ubuntu systems. This
 package is necessary if you want your machine to be managed in a
 Landscape account.
 .
 This package provides the core libraries.
Original-Maintainer: Landscape Team <landscape-team@canonical.com>
Python-Version: 2.7

Package: libplexus-i18n-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 74
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-i18n
Version: 1.0-beta-10-3
Depends: libplexus-containers-java, libplexus-utils-java
Suggests: libplexus-i18n-java-doc
Description: a component to support internationalization of applications using Plexus
 Plexus I18n is a set of Plexus-components supporting internationalization of
 Plexus-based applications.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/

Package: python-apt
Status: install ok installed
Priority: standard
Section: python
Installed-Size: 713
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.8.3ubuntu7
Provides: python2.7-apt
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libapt-inst1.4 (>= 0.8.16~exp12), libapt-pkg4.12 (>= 0.8.16~exp12ubuntu8), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.4.0), python-apt-common
Recommends: lsb-release, iso-codes, xz-lzma
Suggests: python-apt-dbg, python-gtk2, python-vte, python-apt-doc
Breaks: apt-forktracer (<< 0.3), apt-listchanges (<< 2.85), apt-p2p (<< 0.1.6), apt-xapian-index (<< 0.25), aptdaemon (<< 0.11+bzr343-1~), aptoncd (<< 0.1.98+bzr117), bcfg2 (<< 1.0.1), bzr-builddeb (<< 2.4), computer-janitor (<< 1.14.1-1+), debdelta (<< 0.41+), debpartial-mirror (<< 0.2.98), debsecan (<< 0.4.15), gdebi (<< 0.6.1), germinate (<< 1.21), gnome-codec-install (<< 0.4.5), mini-dinstall (<< 0.6.28), packagekit-backend-apt (<= 0.4.8-0ubuntu4), python-cdd (<< 0.0.10), python-dogtail (<< 0.6.1-3.1+), python-software-properties (<< 0.70.debian-1+), rebuildd (<< 0.3.9), software-center (<< 1.1.21debian2), tla-buildpackage (<< 0.9.14), ubuntu-dev-tools (<< 0.93debian1), unattended-upgrades (<< 0.42debian2), update-manager (<< 0.200.2-1), update-notifier (<< 0.99.3debian9), wajig (<< 2.0.46)
Description: Python interface to libapt-pkg
 The apt_pkg Python interface will provide full access to the internal
 libapt-pkg structures allowing Python programs to easily perform a
 variety of functions, such as:
 .
  - Access to the APT configuration system
  - Access to the APT package information database
  - Parsing of Debian package control files, and other files with a
    similar structure
 .
 The included 'aptsources' Python interface provides an abstraction of
 the sources.list configuration on the repository and the distro level.
Original-Maintainer: APT Development Team <deity@lists.debian.org>
Python-Version: 2.7

Package: libp11-kit0
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 115
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: p11-kit
Version: 0.12-2ubuntu1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: Library for loading and coordinating access to PKCS#11 modules - runtime
 Provides a way to load and enumerate PKCS#11 modules. Provides a standard
 configuration setup for installing PKCS#11 modules in such a way that
 they're discoverable.
 .
 Also solves problems with coordinating the use of PKCS#11 by different
 components or libraries living in the same process.
 .
 This package contains the shared library required for applications loading
 and accessing PKCS#11 modules.
Original-Maintainer: Debian GnuTLS Maintainers <pkg-gnutls-maint@lists.alioth.debian.org>
Homepage: http://p11-glue.freedesktop.org/p11-kit.html

Package: libeasymock-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 121
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: easymock
Version: 2.4+ds1-6
Suggests: libeasymock-java-doc
Description: Java library to generate Mock Objects for given interfaces
 EasyMock 2 is a library that provides an easy way to use Mock Objects for given
 interfaces. Mock Objects simulate parts of the behavior of domain code,
 and are able to check whether they are used as defined.
 Domain classes can be tested in isolation
 by simulating their collaborators with Mock Objects.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.easymock.org

Package: libparse-debianchangelog-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 232
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.2.0-1ubuntu1
Depends: perl, libtimedate-perl, libclass-accessor-perl, liblocale-gettext-perl, libio-string-perl
Suggests: libhtml-parser-perl, libhtml-template-perl, libxml-simple-perl
Description: parse Debian changelogs and output them in other formats
 Replacement for the very limited dpkg-parsechangelog. Accessible
 either via the parsechangelog command line script or as Perl module.
 .
 Currently supported output formats:
  * original dpkg-parsechangelog output format
  * similar format with multiple stanzas instead of one
  * XML
  * HTML (customizable via HTML::Template templates).
Original-Maintainer: Frank Lichtenheld <djpig@debian.org>

Package: libgtk2.0-bin
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 621
Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
Architecture: amd64
Source: gtk+2.0
Version: 2.24.10-0ubuntu6
Depends: libgtk2.0-0 (>= 2.24.10-0ubuntu6), libgtk2.0-common
Description: programs for the GTK+ graphical user interface library
 GTK+ is a multi-platform toolkit for creating graphical user
 interfaces. Offering a complete set of widgets, GTK+ is suitable
 for projects ranging from small one-off tools to complete application
 suites.
 .
 This package contains the utilities which are used by the libraries
 and other packages.
Homepage: http://www.gtk.org/
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libatk1.0-data
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 88
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: atk1.0
Version: 2.4.0-0ubuntu1
Description: Common files for the ATK accessibility toolkit
 ATK is a toolkit providing accessibility interfaces for applications or
 other toolkits. By implementing these interfaces, those other toolkits or
 applications can be used with tools such as screen readers, magnifiers, and
 other alternative input devices.
 .
 This contains the common files which the runtime libraries need.
Homepage: http://www.gtk.org/
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libnih-dbus1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 67
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libnih
Version: 1.0.3-4ubuntu9
Depends: libnih1 (= 1.0.3-4ubuntu9), libc6 (>= 2.3.4), libdbus-1-3 (>= 1.2.16)
Pre-Depends: multiarch-support
Description: NIH D-Bus Bindings Library
 libnih-dbus is a D-Bus bindings library that integrates with the main
 loop provided by libnih.
 .
 This package contains the shared library.
Homepage: https://launchpad.net/libnih
Original-Maintainer: Scott James Remnant <scott@netsplit.com>

Package: libnetbeans-cvsclient-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 443
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: netbeans-cvsclient
Version: 6.5-2
Description: NetBeans CVS Client library
 The CVS Client library is a pure Java implementation of a CVS client protocol.
 It allows to access CVS servers without setting up an external cvs program.
 It is used in the javacvs module in NetBeans and in other projects, such as
 SmartCVS and Maven SCM.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://javacvs.netbeans.org/library/

Package: libx11-data
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 1525
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: libx11
Version: 2:1.4.99.1-0ubuntu2
Breaks: libx11-6 (<< 2:1.4.1)
Description: X11 client-side library
 This package provides the locale data files for libx11.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libX11
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: time
Status: install ok installed
Priority: standard
Section: utils
Installed-Size: 148
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.7-23.1
Depends: libc6 (>= 2.3.4)
Description: The GNU time program for measuring cpu resource usage
 The 'time' command runs another program, then displays information
 about the resources used by that program, collected by the system while
 the program was running.  You can select which information is reported
 and the format in which it is shown, or have 'time' save the information
 in a file instead of display it on the screen.
 .
 The resources that 'time' can report on fall into the general
 categories of time, memory, I/O, and IPC calls.
 .
 The GNU version can format the output in arbitrary ways by using a
 printf-style format string to include various resource measurements.
Original-Maintainer: Tollef Fog Heen <tfheen@debian.org>

Package: libselinux1
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 189
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libselinux
Version: 2.1.0-4.1ubuntu1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: SELinux runtime shared libraries
 This package provides the shared libraries for Security-enhanced
 Linux that provides interfaces (e.g. library functions for the
 SELinux kernel APIs like getcon(), other support functions like
 getseuserbyname()) to SELinux-aware applications. Security-enhanced
 Linux is a patch of the Linux kernel and a number of utilities with
 enhanced security functionality designed to add mandatory access
 controls to Linux.  The Security-enhanced Linux kernel contains new
 architectural components originally developed to improve the security
 of the Flask operating system. These architectural components provide
 general support for the enforcement of many kinds of mandatory access
 control policies, including those based on the concepts of Type
 Enforcement, Role-based Access Control, and Multi-level Security.
 .
 libselinux1 provides an API for SELinux applications to get and set
 process and file security contexts and to obtain security policy
 decisions.  Required for any applications that use the SELinux
 API. libselinux may use the shared libsepol to manipulate the binary
 policy if necessary (e.g. to downgrade the policy format to an older
 version supported by the kernel) when loading policy.
Original-Maintainer: Russell Coker <russell@coker.com.au>

Package: libbatik-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 10922
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: batik
Version: 1.7.ubuntu-8ubuntu1
Depends: openjdk-6-jre-headless | java2-runtime-headless, libxalan2-java, libbsf-java, libavalon-framework-java (>= 4.2.0), libcommons-io-java, libcommons-logging-java, java-wrappers (>= 0.1.12), libxml-commons-external-java
Recommends: fop (>= 1:0.94), rhino, openjdk-6-jre
Description: xml.apache.org SVG Library
 Batik is a toolkit for applications or applets that want to use images
 in the Scalable Vector Graphics (SVG) format for various purposes, such
 as viewing, generation or manipulation.
 .
 Batik provides several modules to be used in applications:
  * A SVG generator module, usable to export graphics into the SVG format.
  * A SVG processor and SVG Viewing component for integrating SVG viewing.
  * A module to convert SVG to various formats, such as raster images
    (JPEG, PNG or Tiff) and PS, PDF.
 .
 fop is necessary for PDF output of rasterizer.
 .
 rhino is necessary for using the SVG browser, squiggle.
 .
 For detailed information, go to http://xml.apache.org/batik/
Homepage: http://xml.apache.org/batik/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: openssh-client
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: net
Installed-Size: 2278
Maintainer: Colin Watson <cjwatson@ubuntu.com>
Architecture: amd64
Source: openssh
Version: 1:5.9p1-5ubuntu1
Replaces: ssh, ssh-krb5
Provides: rsh-client, ssh-client
Depends: libc6 (>= 2.15), libedit2 (>= 2.11-20080614-1), libgssapi-krb5-2 (>= 1.10+dfsg~), libselinux1 (>= 1.32), libssl1.0.0 (>= 1.0.0), zlib1g (>= 1:1.1.4), debconf (>= 1.2.0) | debconf-2.0, adduser (>= 3.10), dpkg (>= 1.7.0), passwd
Recommends: xauth
Suggests: ssh-askpass, libpam-ssh, keychain, monkeysphere, openssh-blacklist, openssh-blacklist-extra
Conflicts: rsh-client (<< 0.16.1-1), sftp, ssh (<< 1:3.8.1p1-9), ssh-krb5 (<< 1:4.3p2-7)
Conffiles:
 /etc/ssh/ssh_config a7a6e6ef00bcd077b9b5e3e1b744fd30
 /etc/ssh/moduli b1c007bf229d5d1707a2aebe9732f13c
Description: secure shell (SSH) client, for secure access to remote machines
 This is the portable version of OpenSSH, a free implementation of
 the Secure Shell protocol as specified by the IETF secsh working
 group.
 .
 Ssh (Secure Shell) is a program for logging into a remote machine
 and for executing commands on a remote machine.
 It provides secure encrypted communications between two untrusted
 hosts over an insecure network. X11 connections and arbitrary TCP/IP
 ports can also be forwarded over the secure channel.
 It can be used to provide applications with a secure communication
 channel.
 .
 This package provides the ssh, scp and sftp clients, the ssh-agent
 and ssh-add programs to make public key authentication more convenient,
 and the ssh-keygen, ssh-keyscan, ssh-copy-id and ssh-argv0 utilities.
 .
 In some countries it may be illegal to use any encryption at all
 without a special permit.
 .
 ssh replaces the insecure rsh, rcp and rlogin programs, which are
 obsolete for most purposes.
Homepage: http://www.openssh.org/
Original-Maintainer: Debian OpenSSH Maintainers <debian-ssh@lists.debian.org>

Package: python-openssl
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 413
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pyopenssl
Version: 0.12-1ubuntu2
Provides: python2.7-openssl
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libc6 (>= 2.4), libssl1.0.0 (>= 1.0.0)
Suggests: python-openssl-doc, python-openssl-dbg
Description: Python wrapper around the OpenSSL library
 High-level wrapper around a subset of the OpenSSL library, includes
 .
   * SSL.Connection objects, wrapping the methods of Python's portable
     sockets
   * Callbacks written in Python
   * Extensive error-handling mechanism, mirroring OpenSSL's error
     codes
 .
 A lot of the object methods do nothing more than calling a
 corresponding function in the OpenSSL library.
Homepage: http://launchpad.net/pyopenssl
Original-Maintainer: Debian Python Modules Team <python-modules-team@lists.alioth.debian.org>
Python-Version: 2.7

Package: libevent-2.0-5
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 313
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libevent
Version: 2.0.16-stable-1
Depends: libc6 (>= 2.7)
Description: Asynchronous event notification library
 Libevent is an asynchronous event notification library that provides a
 mechanism to execute a callback function when a specific event occurs
 on a file descriptor or after a timeout has been reached.
 .
 It is meant to replace the asynchronous event loop found in
 event driven network servers. Currently, libevent supports /dev/poll,
 kqueue(2), event ports, select(2), poll(2) and epoll(4).
 .
 For backward compatibility and to transition to "libevent_core only"
 or "libevent_core + libevent_extra", the libevent source package builds
 the libevent library that includes everything in libevent_core and
 libevent_extra.
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://www.monkey.org/~provos/libevent/

Package: libiw30
Status: install ok installed
Priority: extra
Section: libs
Installed-Size: 85
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: wireless-tools
Version: 30~pre9-5ubuntu2
Depends: libc6 (>= 2.14)
Description: Wireless tools - library
 Wireless tools are used to manipulate the Linux Wireless Extensions. The
 Wireless Extension is an interface allowing you to set Wireless LAN specific
 parameters and get the specific stats.
 .
 This package contains the dynamic library libiw.
Homepage: http://www.hpl.hp.com/personal/Jean_Tourrilhes/Linux/Tools.html
Original-Maintainer: Guus Sliepen <guus@debian.org>

Package: ntpdate
Status: install ok installed
Priority: optional
Section: net
Installed-Size: 239
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ntp
Version: 1:4.2.6.p3+dfsg-1ubuntu3.1
Depends: netbase, libc6 (>= 2.14), libssl1.0.0 (>= 1.0.0)
Pre-Depends: dpkg (>= 1.15.7.2)
Recommends: lockfile-progs
Breaks: dhcp3-client (<< 4.1.0-1)
Conffiles:
 /etc/dhcp/dhclient-exit-hooks.d/ntpdate 1d4c6af64ca132451ee95a08686ea111
 /etc/logcheck/ignore.d.server/ntpdate 68d4df7cceb0e97bde87126c3a56b219
 /etc/default/ntpdate 39415ec9778476795fdbb832adc43b9b
 /etc/network/if-up.d/ntpdate 336a082b2390bda125d83c01fe125e93
Description: client for setting system time from NTP servers
 NTP, the Network Time Protocol, is used to keep computer clocks
 accurate by synchronizing them over the Internet or a local network,
 or by following an accurate hardware receiver that interprets GPS,
 DCF-77, NIST or similar time signals.
 .
 ntpdate is a simple NTP client that sets a system's clock to match
 the time obtained by communicating with one or more NTP servers.  It
 is not sufficient, however, for maintaining an accurate clock in the
 long run.  ntpdate by itself is useful for occasionally setting the
 time on machines that do not have full-time network access, such as
 laptops.
 .
 If the full NTP daemon from the package "ntp" is installed, then
 ntpdate is not necessary.
Homepage: http://support.ntp.org/
Original-Maintainer: Debian NTP Team <pkg-ntp-maintainers@lists.alioth.debian.org>

Package: vim-runtime
Status: install ok installed
Priority: optional
Section: editors
Installed-Size: 22306
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: vim
Version: 2:7.3.429-2ubuntu2.1
Recommends: vim | vim-gnome | vim-gtk | vim-athena | vim-nox | vim-tiny
Breaks: vim-tiny (<< 2:7.3.429-2ubuntu2.1)
Enhances: vim-tiny
Description: Vi IMproved - Runtime files
 Vim is an almost compatible version of the UNIX editor Vi.
 .
 Many new features have been added: multi level undo, syntax
 highlighting, command line history, on-line help, filename
 completion, block operations, folding, Unicode support, etc.
 .
 This package contains vimtutor and the architecture independent runtime
 files, used, if available, by all vim variants available in Debian.
 Example of such runtime files are: online documentation, rules for
 language-specific syntax highlighting and indentation, color schemes,
 and standard plugins.
Homepage: http://www.vim.org/
Original-Maintainer: Debian Vim Maintainers <pkg-vim-maintainers@lists.alioth.debian.org>

Package: gcc-4.6-base
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 194
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Breaks: dehydra (<= 0.9.hg20110609-2), gcj-4.6-base (<< 4.6.1-4~), gnat-4.6 (<< 4.6.1-5~)
Description: GCC, the GNU Compiler Collection (base package)
 This package contains files common to all languages and libraries
 contained in the GNU Compiler Collection (GCC).
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: xorg-sgml-doctools
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: x11
Installed-Size: 100
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:1.10-1
Description: Common tools for building X.Org SGML documentation
 This package contains tools for building the X.Org SGML documentation.
 Currently it only includes various entity definitions for the current
 release.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: python-libsmbios
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 169
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: libsmbios
Version: 2.2.28-0ubuntu2
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), libsmbios2
Suggests: libsmbios-doc
Description: Provide access to (SM)BIOS information -- python libraries
 libsmbios aims towards providing access to as much BIOS information as
 possible. This package provides python functions that can be imported
 into userspace programs.
Original-Maintainer: Jose Luis Tallon <jltallon@adv-solutions.net>

Package: libc6
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 10412
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: eglibc
Version: 2.15-0ubuntu10.3
Replaces: belocs-locales-bin, libc6-amd64
Provides: glibc-2.13-1
Depends: libc-bin (= 2.15-0ubuntu10.3), libgcc1, tzdata
Suggests: glibc-doc, debconf | debconf-2.0, locales
Breaks: nscd (<< 2.15)
Conflicts: belocs-locales-bin, libc6-amd64, prelink (<< 0.0.20090925), tzdata (<< 2007k-1), tzdata-etch
Conffiles:
 /etc/ld.so.conf.d/x86_64-linux-gnu.conf 593ad12389ab2b6f952e7ede67b8fbbf
Description: Embedded GNU C Library: Shared libraries
 Contains the standard libraries that are used by nearly all programs on
 the system. This package includes shared versions of the standard C library
 and the standard math library, as well as many others.
Homepage: http://www.eglibc.org
Original-Maintainer: GNU Libc Maintainers <debian-glibc@lists.debian.org>

Package: libcommons-logging-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 207
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.1.1-9
Depends: libcommons-parent-java
Suggests: libavalon-framework-java, libcommons-logging-java-doc, libexcalibur-logkit-java, liblog4j1.2-java, libservlet2.5-java
Description: commmon wrapper interface for several logging APIs
 Provides a simple, component oriented interface together with wrappers for
 several existing java logging systems. The user can choose at runtime which
 system he want to use for logging.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/logging

Package: libsm6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 77
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libsm
Version: 2:1.2.0-2build1
Depends: libc6 (>= 2.14), libice6 (>= 1:1.0.0), libuuid1 (>= 2.16)
Pre-Depends: multiarch-support
Description: X11 Session Management library
 This package provides the main interface to the X11 Session Management
 library, which allows for applications to both manage sessions, and make use
 of session managers to save and restore their state for later use.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libSM
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: w3m
Status: install ok installed
Multi-Arch: foreign
Priority: standard
Section: web
Installed-Size: 2100
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.5.3-5ubuntu1
Replaces: w3m-ssl, w3mmee
Provides: www-browser
Depends: libc6 (>= 2.15), libgc1c2 (>= 1:7.1), libgpm2 (>= 1.20.4), libssl1.0.0 (>= 1.0.0), libtinfo5, zlib1g (>= 1:1.1.4)
Recommends: ca-certificates
Suggests: w3m-img, mime-support, menu (>> 1.5), w3m-el, man-db, migemo
Conflicts: w3m-ssl
Conffiles:
 /etc/w3m/mailcap fe00c489702ba1bd12a5b40d580600fa
 /etc/w3m/config de6fa6407e070a79c1a7d5146cb0ff1f
Description: WWW browsable pager with excellent tables/frames support
 w3m is a text-based World Wide Web browser with IPv6 support.
 It features excellent support for tables and frames. It can be used
 as a standalone file pager, too.
 .
  * You can follow links and/or view images in HTML.
  * Internet message preview mode, you can browse HTML mail.
  * You can follow links in plain text if it includes URL forms.
  * With w3m-img, you can view inline images.
Original-Maintainer: Tatsuya Kinoshita <tats@debian.org>
Homepage: http://sourceforge.net/projects/w3m

Package: libgoogle-collections-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 640
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.0-2
Depends: libjsr305-java
Description: suite of collections and related goodies for Java 5.0
 This library is a natural extension of the Java Collections Framework. The
 major new types are:
  * BiMap. A Map that guarantees unique values, and supports an inverse view.
  * Multiset. A Collection that may contain duplicate values like a List, yet
    has order-independent equality like a Set. Often used to represent a
    histogram.
  * Multimap. Similar to Map, but may contain duplicate keys. Has subtypes
    SetMultimap and ListMultimap providing more specific behavior.
 .
 There are also more than a dozen collection implementations, mostly of the
 interfaces above, but not all. ReferenceMap, for example, is a ConcurrentMap
 implementation which easily handles any combination of strong, soft or weak
 keys with strong, soft or weak values. Static utility classes include:
  * Comparators. Natural order, compound, null-friendly, ad-hoc, ...
  * Iterators and Iterables. Element-based equality, cycle, concat, partition,
    filter with predicate, transform with function ...
  * Lists, Sets and Maps. A plethora of convenient factory methods and much
    more.
  * PrimitiveArrays: "boxing"/"unboxing" of primitive arrays
 .
 And there's more:
  * Immutable collections
  * Forwarding collections
  * Constrained collections
  * Implementation helpers like AbstractIterator
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://code.google.com/p/google-collections/

Package: language-selector-common
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 2609
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: language-selector
Version: 0.79
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), iso-codes, python-apt (>= 0.7.12.0), python-dbus, dbus, accountsservice (>= 0.6.15-2ubuntu3)
Pre-Depends: dpkg (>= 1.15.7.2)
Conffiles:
 /etc/dbus-1/system.d/com.ubuntu.LanguageSelector.conf 7fa4258d2c6b90e20fe299c6eca727ff
 /etc/fonts/conf.avail/69-language-selector-zh-tw.conf 5b4c23e1615eb318d785a61831bb4b66
 /etc/fonts/conf.avail/69-language-selector-zh-sg.conf 9d838a5656e8c8432fa544a4d79ae0f0
 /etc/fonts/conf.avail/69-language-selector-zh-cn.conf 9d838a5656e8c8432fa544a4d79ae0f0
 /etc/fonts/conf.avail/69-language-selector-ka-ge.conf e48609f277a6a0a4de0cd104c4a1fdf5
 /etc/fonts/conf.avail/69-language-selector-ja-jp.conf 184e8272d746b220fade6350a3227b57
 /etc/fonts/conf.avail/69-language-selector-zh-hk.conf c971802f45f35965c2c67e02e97f3ac2
 /etc/fonts/conf.avail/69-language-selector-zh-mo.conf c971802f45f35965c2c67e02e97f3ac2
 /etc/fonts/conf.avail/99-language-selector-zh.conf 6e0c405158e848b8183bf2675e002e75
 /etc/fonts/conf.avail/30-cjk-aliases.conf 033d9a5621510163427c711c71b81d62
Description: Language selector for Ubuntu
 This package let you change and install language packs
 in Ubuntu.
 .
 This package contains the common part of language-selector
Python-Version: 2.7

Package: libjsr305-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.1~+svn49-4
Suggests: libjsr305-java-doc
Description: Java library that provides annotations for software defect detection
 This library provides the implementation of Java Specification Request 305.
 JSR-305 specifies annotations for software defect detection. These
 annotations can used to automatically check that methods are working as
 expected.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://code.google.com/p/jsr-305/

Package: libsisu-guice-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 713
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: sisu-guice
Version: 3.1.0-1
Depends: glassfish-javaee, libaopalliance-java, libatinject-jsr330-api-java, libguava-java, libservlet2.4-java
Recommends: libcglib-java, libslf4j-java
Description: Patched build of Google Guice for Sisu-IoC
 Google Guice is a lightweight dependency injection framework
 for Java 5 and above.
 .
 This package contains a patched build of Guice modified for
 Sisu IoC framework (for instance, removes the need to write
 explicit bindings in Guice modules).
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: https://github.com/sonatype/sisu-guice

Package: dput
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 232
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.9.6.2ubuntu1
Depends: python (>= 2.5), gnupg
Suggests: openssh-client, lintian, mini-dinstall, rsync, bzr
Conffiles:
 /etc/dput.cf 01c1ae5386a11e8834faade8452258b0
 /etc/bash_completion.d/dput 4425e3e654ed566d8ad622e063b46984
Description: Debian package upload tool
 dput allows you to put one or more Debian packages into the archive.  This
 package also includes a dcut utility which can be used to generate and / or
 upload a commands file for the Debian FTP archive upload queue.
 .
 dput includes some tests to verify that the package is policy-compliant.
 It offers the possibility to run lintian before the upload. It can also
 run dinstall in dry-run-mode, when having used an appropriate upload method.
 This is very useful to see if the upload will pass dinstall sanity checks
 in the next run.
 .
 It is intended mainly for Debian maintainers only, although it can
 also be useful for people maintaining local apt repositories.
Original-Maintainer: Y Giridhar Appaji Nag <appaji@debian.org>

Package: libxmlgraphics-commons-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 625
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: xmlgraphics-commons
Version: 1.4.dfsg-4ubuntu1
Description: reusable components used by Batik and FOP
 Apache XML Graphics Commons is a library that consists of several
 reusable components used by Apache Batik and Apache FOP. Many of these
 components can easily be used separately outside the domains of SVG and
 XSL-FO. You will find components such as a PDF library, an RTF library,
 Graphics2D implementations that let you generate PDF & PostScript
 files, and much more.
Homepage: http://xmlgraphics.apache.org/commons/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: grub2-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: admin
Installed-Size: 139
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: grub2
Version: 1.99-21ubuntu3.7
Replaces: grub, grub-common (<< 1.99-1), grub-coreboot (<< 1.99-1), grub-efi (<< 1.99-1), grub-efi-amd64 (<< 1.99-1), grub-efi-ia32 (<< 1.99-1), grub-ieee1275 (<< 1.99-1), grub-legacy, grub-linuxbios (<< 1.99-1), grub-pc (<< 1.99-1), grub-yeeloong (<< 1.99-1)
Depends: grub-common (= 1.99-21ubuntu3.7), dpkg (>= 1.15.4) | install-info
Conflicts: grub (<< 0.97-54), grub-doc (<< 0.97-29ubuntu60), grub-legacy, grub-legacy-doc (<< 0.97-29ubuntu60)
Description: GRand Unified Bootloader (common files for version 2)
 This package contains common files shared by the distinct flavours of GRUB.
 The files in this package are specific to GRUB 2, and would break GRUB
 Legacy if installed on the same system.
Homepage: http://www.gnu.org/software/grub/
Original-Maintainer: GRUB Maintainers <pkg-grub-devel@lists.alioth.debian.org>

Package: libpng12-0
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 305
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libpng
Version: 1.2.46-3ubuntu4
Replaces: libpng12-dev (<= 1.2.8rel-7)
Depends: libc6 (>= 2.14), zlib1g (>= 1:1.1.4)
Pre-Depends: multiarch-support
Conflicts: libpng12-dev (<= 1.2.8rel-7), mzscheme (<= 1:209-5), pngcrush (<= 1.5.10-2), pngmeta (<= 1.11-3), povray-3.5 (<= 3.5.0c-10), qemacs (<= 0.3.1-5)
Description: PNG library - runtime
 libpng is a library implementing an interface for reading and writing
 PNG (Portable Network Graphics) format files.
 .
 This package contains the runtime library files needed to run software
 using libpng.
Homepage: http://libpng.org/pub/png/libpng.html
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: icedtea-netx-common
Status: install ok installed
Multi-Arch: foreign
Priority: extra
Section: java
Installed-Size: 733
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: icedtea-web
Version: 1.2-2ubuntu1.3
Replaces: icedtea-6-plugin (<< 1.2-2ubuntu1.3), icedtea-netx (<< 1.2-2ubuntu1.3), icedtea-plugin (<< 1.2-1~), openjdk-6-jre (<< 6b18-1.8.7-3), openjdk-6-jre-headless (<< 6b18-1.8.7-3)
Conflicts: openjdk-6-jre (<< 6b18-1.8.7-3), openjdk-6-jre-headless (<< 6b18-1.8.7-3)
Conffiles:
 /etc/icedtea-web/javaws.policy 01f40304afd5978f8cae1f891190ec17
Description: NetX - implementation of the Java Network Launching Protocol (JNLP)
 NetX provides a drop-in replacement for javaws (Java Web Start). Since
 upstream NetX is dormant, IcedTea is hosting and modifying the sources
 in the IcedTea-Web directory.
 .
 This package contains the architecture independent files.
Homepage: http://icedtea.classpath.org/wiki/IcedTea-Web
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>

Package: apt-utils
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 551
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: apt
Version: 0.8.16~exp12ubuntu10.7
Depends: libapt-inst1.4 (>= 0.8.0), libapt-pkg4.12 (>= 0.8.16~exp12ubuntu10.7), libc6 (>= 2.14), libdb5.1, libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.4.0)
Description: package managment related utility programs
 This package contains some less used commandline utilities related
 to package managment with APT.
 .
  * apt-extracttemplates is used by debconf to prompt for configuration
    questions before installation.
  * apt-ftparchive is used to create Packages and other index files
    needed to publish an archive of debian packages
  * apt-sortpkgs is a Packages/Sources file normalizer.
Original-Maintainer: APT Development Team <deity@lists.debian.org>

Package: udev
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: admin
Installed-Size: 995
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 175-0ubuntu9.2
Depends: libacl1 (>= 2.2.51-5), libc6 (>= 2.10), libglib2.0-0 (>= 2.16.0), libselinux1 (>= 1.32), upstart-job, libudev0 (>= 175), module-init-tools (>= 3.2.1-0ubuntu3), initramfs-tools (>= 0.92bubuntu63), procps, adduser, util-linux (>> 2.15~rc2), upstart (>= 1.4-0ubuntu6)
Suggests: watershed
Conffiles:
 /etc/udev/udev.conf 8b024b79a468658332fbf2586737907e
 /etc/udev/rules.d/README 3b6de9f3f911176734c66903b4f8735c
 /etc/init/udev.conf b4fb63a560e94cacf94765c9a371db99
 /etc/init/udevmonitor.conf b541dfb5aa4958e9a5336ecaec00ca15
 /etc/init/udev-finish.conf 28ebb3ad2d2c6ca545d72f3f0769f448
 /etc/init/udev-fallback-graphics.conf b8bfe7164e10cd0e53494b243c5728b1
 /etc/init/udevtrigger.conf 651ff2421dde80be7ce7ccbf7fa8cf18
Description: rule-based device node and kernel event manager
 udev is a collection of tools and a daemon to manage events received from
 the kernel and deal with them in user-space.  Primarily this involves
 creating and removing device nodes in /dev when hardware is discovered or
 removed from the system.
 .
 Events are received via kernel netlink messaged and processed according to
 rules in /etc/udev/rules.d and /lib/udev/rules.d, altering the name of the
 device node, creating additional symlinks or calling other tools and programs
 including those to load kernel modules and initialise the device.
Homepage: http://www.kernel.org/pub/linux/utils/kernel/hotplug/udev.html

Package: chkconfig
Status: install ok installed
Priority: optional
Section: admin
Installed-Size: 68
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 11.0-79.1-2
Depends: perl
Recommends: insserv
Description: system tool to enable or disable system services
 Chkconfig is a utility to update and query runlevel information for system
 services.  Chkconfig manipulates the numerous symbolic links in /etc/init.d/,
 to relieve system administrators of some of the drudgery of manually editing
 the symbolic links.
 .
 In Debian, there are several tools with similar functionality, but users
 coming from other Linux distributions will find the tools in this package
 more familiar.
Original-Maintainer: Peter Eisentraut <petere@debian.org>

Package: libdns81
Status: install ok installed
Priority: standard
Section: libs
Installed-Size: 1609
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: bind9
Version: 1:9.8.1.dfsg.P1-4ubuntu0.5
Replaces: libbind0
Depends: libc6 (>= 2.14), libgeoip1 (>= 1.4.8+dfsg), libgssapi-krb5-2 (>= 1.10+dfsg~), libisc83, libssl1.0.0 (>= 1.0.0)
Conflicts: libbind0, libbind9-41
Description: DNS Shared Library used by BIND
 The Berkeley Internet Name Domain (BIND) implements an Internet domain
 name server.  BIND is the most widely-used name server software on the
 Internet, and is supported by the Internet Software Consortium, www.isc.org.
 This package delivers the libdns shared library used by BIND's daemons and
 clients.
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: python-httplib2
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 208
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.7.2-1ubuntu2
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), ca-certificates
Description: comprehensive HTTP client library written for Python
 httplib2.py supports many features left out of other HTTP libraries.
  * HTTP and HTTPS
  * Keep-Alive
  * Authentication
  * Caching
  * All Methods
  * Redirects
  * Compression
  * Lost update support
  * Unit Tested
 .
 This package provides module for python2 series.
Homepage: http://code.google.com/p/httplib2/
Original-Maintainer: Luca Falavigna <dktrkranz@debian.org>

Package: libclone-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 65
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.31-1build3
Depends: perl (>= 5.14.2-3build1), perlapi-5.14.2, libc6 (>= 2.2.5)
Description: recursively copy Perl datatypes
 The Clone module provides a clone() method which makes recursive copies of
 nested hash, array, scalar and reference types, including tied variables and
 objects.
 .
 It is faster (although less flexible) than Storable's dclone. Its
 functionality is _not_ serializing in-memory objects (i.e. as
 Data::Dumper or YAML::Dump do), but deep-copying them over to new
 in-memory structures.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/Clone/

Package: libpixman-1-0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 582
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pixman
Version: 0.24.4-1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: pixel-manipulation library for X and cairo
 A library for manipulating pixel regions -- a set of Y-X banded
 rectangles, image compositing using the Porter/Duff model
 and implicit mask generation for geometric primitives including
 trapezoids, triangles, and rectangles.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libplexus-utils2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 286
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-utils2
Version: 2.0.5-1
Suggests: libplexus-utils2-java-doc
Description: utilities for the Plexus framework
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 While Plexus is similar to other inversion-of-control (IoC) or dependency
 injection frameworks such as the Spring Framework, it is a full-fledged
 container that supports many more features such as:
 .
  * Component lifecycles
  * Component instantiation strategies
  * Nested containers
  * Component configuration
  * Auto-wiring
  * Component dependencies, and
  * Various dependency injection techniques including constructor injection,
   setter injection, and private field injection.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-utils

Package: iptables
Status: install ok installed
Priority: important
Section: net
Installed-Size: 1426
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.4.12-1ubuntu4
Depends: libc6 (>= 2.7), libnfnetlink0 (>= 1.0.0)
Description: administration tools for packet filtering and NAT
 These are the user-space administration tools for the Linux
 kernel's netfilter and iptables. netfilter and iptables provide
 a framework for stateful and stateless packet filtering, network
 and port address translation, and other IP packet manipulation.
 The framework is the successor to ipchains.
 .
 netfilter and iptables are used in applications such as Internet
 connection sharing, firewalls, IP accounting, transparent proxying,
 advanced routing and traffic control.
Homepage: http://www.netfilter.org/
Original-Maintainer: Laurence J. Lane <ljlane@debian.org>

Package: libcommons-beanutils-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 286
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-beanutils
Version: 1.8.3-2
Depends: libcommons-logging-java
Recommends: libcommons-collections3-java
Suggests: libcommons-beanutils-java-doc
Description: utility for manipulating JavaBeans
 The BeanUtils Component contains a set of Java classes that provide
 static utility methods useful in manipulating Java classes that conform
 to the JavaBeans Specification naming patterns for bean properties in a
 dynamic fashion.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/beanutils/

Package: bash
Essential: yes
Status: install ok installed
Priority: required
Section: shells
Installed-Size: 1424
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.2-2ubuntu2
Replaces: bash-completion (<< 20060301-0), bash-doc (<= 2.05-1)
Depends: base-files (>= 2.1.12), debianutils (>= 2.15)
Pre-Depends: dash (>= 0.5.5.1-2.2), libc6 (>= 2.15), libtinfo5
Recommends: bash-completion (>= 20060301-0)
Suggests: bash-doc
Conflicts: bash-completion (<< 20060301-0)
Conffiles:
 /etc/bash.bashrc 286dc423e71186936c39e3507d2d0cf1
 /etc/skel/.bashrc 8da3d6b1fdbdfe97c6be8adadce98172
 /etc/skel/.profile ecb6d3479ac3823f1da7f314d871989b
 /etc/skel/.bash_logout 22bfb8c1dd94b5f3813a2b25da67463f
Description: GNU Bourne Again SHell
 Bash is an sh-compatible command language interpreter that executes
 commands read from the standard input or from a file.  Bash also
 incorporates useful features from the Korn and C shells (ksh and csh).
 .
 Bash is ultimately intended to be a conformant implementation of the
 IEEE POSIX Shell and Tools specification (IEEE Working Group 1003.2).
 .
 The Programmable Completion Code, by Ian Macdonald, is now found in
 the bash-completion package.
Homepage: http://tiswww.case.edu/php/chet/bash/bashtop.html
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: make
Status: install ok installed
Priority: standard
Section: devel
Installed-Size: 316
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: make-dfsg
Version: 3.81-8.1ubuntu1.1
Depends: libc6 (>= 2.14)
Suggests: make-doc
Description: An utility for Directing compilation.
 GNU Make is an utility which controls the generation of executables and
 other target files of a program from the program's source files. It
 determines automatically which pieces of a large program need to be
 (re)created, and issues the commands to (re)create them. Make is not
 limited to programs and executable, it can be applied to any task
 where a set of target files must be created based on a set of input
 files, based on dependency and processing rules. Indeed, Make is a
 general purpose dependency solver.
Homepage: http://www.gnu.org/software/make/
Original-Maintainer: Manoj Srivastava <srivasta@debian.org>

Package: util-linux
Essential: yes
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: utils
Installed-Size: 1559
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.20.1-1ubuntu3
Replaces: e2fsprogs, fdisk, fstrim, linux32, miscutils, schedutils, setterm, sparc-utils
Provides: linux32, schedutils
Depends: lsb-base (>= 3.0-6), tzdata (>= 2006c-2), dpkg (>= 1.15.4) | install-info, debconf (>= 0.5) | debconf-2.0, upstart-job
Pre-Depends: libblkid1 (>= 2.20.1), libc6 (>= 2.15), libncurses5 (>= 5.5-5~), libselinux1 (>= 1.32), libslang2 (>= 2.0.7-1), libtinfo5, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
Suggests: util-linux-locales, kbd | console-tools, dosfstools
Conflicts: console-tools (<< 1:0.2.3-21), fdisk, fstrim, kbd (<< 1.05-3), linux32, schedutils, setterm
Conffiles:
 /etc/init/hwclock.conf 132aa3db7e5a8cf55168e4866052208a
 /etc/init/hwclock-save.conf 4a002046525e338fc23e4418602865c9
Description: Miscellaneous system utilities
 This package contains a number of important utilities, most of which
 are oriented towards maintenance of your system.  Some of the more
 important utilities included in this package allow you to partition
 your hard disk, view kernel messages, and create new filesystems.
Homepage: http://userweb.kernel.org/~kzak/util-linux/
Original-Maintainer: LaMont Jones <lamont@debian.org>

Package: libgmp10
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 486
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gmp
Version: 2:5.0.2+dfsg-2ubuntu1
Depends: libc6 (>= 2.7)
Pre-Depends: multiarch-support
Description: Multiprecision arithmetic library
 GNU MP is a programmer's library for arbitrary precision
 arithmetic (ie, a bignum package).  It can operate on signed
 integer, rational, and floating point numeric types.
 .
 It has a rich set of functions, and the functions have a regular
 interface.
Original-Maintainer: Debian Science Team <debian-science-maintainers@lists.alioth.debian.org>
Homepage: http://gmplib.org/

Package: patchutils
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: text
Installed-Size: 223
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.3.2-1.1
Depends: libc6 (>= 2.4), perl, patch, debianutils (>= 1.16)
Description: Utilities to work with patches
 This package includes the following utilities:
  - combinediff creates a cumulative patch from two incremental patches
  - dehtmldiff extracts a diff from an HTML page
  - filterdiff extracts or excludes diffs from a diff file
  - fixcvsdiff fixes diff files created by CVS that "patch" mis-interprets
  - flipdiff exchanges the order of two patches
  - grepdiff shows which files are modified by a patch matching a regex
  - interdiff shows differences between two unified diff files
  - lsdiff shows which files are modified by a patch
  - recountdiff recomputes counts and offsets in unified context diffs
  - rediff and editdiff fix offsets and counts of a hand-edited diff
  - splitdiff separates out incremental patches
  - unwrapdiff demangles patches that have been word-wrapped
Original-Maintainer: Christoph Berg <myon@debian.org>
Homepage: http://cyberelk.net/tim/patchutils/index.html

Package: libcommons-configuration-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 410
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-configuration
Version: 1.7-1
Depends: libcommons-beanutils-java, libcommons-collections3-java, libcommons-digester-java, libcommons-lang-java, libcommons-logging-java, libjaxp1.3-java, libservlet2.5-java
Recommends: ant, libcommons-codec-java, libcommons-jexl-java, libcommons-jxpath-java, libcommons-vfs-java, liblog4j1.2-java (>= 1.2.16), libxml-commons-resolver1.1-java (>= 1.2)
Description: Java based library providing a generic configuration interface
 Commons Configuration provides a generic configuration interface which enables
 an application to read configuration data from a variety of sources:
  - Properties files
  - XML documents
  - Windows INI files
  - Property list files (.plist)
  - JNDI
  - JDBC Datasource
  - System properties
  - Applet parameters
  - Servlet parameters
 Additional sources of configuration parameters can be created by using custom
 configuration objects.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/configuration/

Package: libxcursor1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxcursor
Version: 1:1.1.12-1
Depends: libc6 (>= 2.4), libx11-6, libxfixes3, libxrender1
Pre-Depends: multiarch-support
Description: X cursor management library
 Xcursor is a simple library designed to help locate and load cursors for the
 X Window System.  Cursors can be loaded from files or memory and can exist in
 several sizes; the library automatically picks the best size.  When using
 images loaded from files, Xcursor prefers to use the Render extension's
 CreateCursor request for rendering cursors.  Where the Render extension is
 not supported, Xcursor maps the cursor image to a standard X cursor and uses
 the core X protocol CreateCursor request.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: icedtea-6-jre-cacao
Status: install ok installed
Multi-Arch: same
Priority: extra
Section: java
Installed-Size: 1137
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: openjdk-6
Version: 6b24-1.11.5-0ubuntu1~12.04.1
Provides: icedtea6-jre-cacao
Depends: openjdk-6-jre-headless (= 6b24-1.11.5-0ubuntu1~12.04.1), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6), zlib1g (>= 1:1.1.4)
Description: Alternative JVM for OpenJDK, using Cacao
 The package provides an alternative runtime using the Cacao VM and the
 Cacao Just In Time Compiler (JIT).  This is a somewhat faster alternative
 than the Zero port on architectures like alpha, armel, m68k, mips, mipsel,
 powerpc and s390.
 .
 The VM is started with the option '-cacao'. See the README.Debian for details.
Original-Maintainer: OpenJDK Team <openjdk@lists.launchpad.net>
Homepage: http://openjdk.java.net/

Package: po-debconf
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: devel
Installed-Size: 443
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.0.16+nmu2ubuntu1
Depends: perl, gettext (>= 0.16), intltool-debian (>= 0.34.2+20060512)
Recommends: libmail-sendmail-perl, libcompress-zlib-perl
Suggests: libmail-box-perl
Description: tool for managing templates file translations with gettext
 This package is an alternative to debconf-utils, and provides tools
 for managing translated debconf templates files with common gettext
 utilities.
Original-Maintainer: Nicolas FRANCOIS (Nekral) <nicolas.francois@centraliens.net>

Package: libfop-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 9529
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: fop
Version: 1:1.0.dfsg2-6
Replaces: fop (<< 1:1.0.dfsg2-6)
Depends: libxerces2-java, libxalan2-java, libbsf-java, libavalon-framework-java (>= 4.1.2-2), libbatik-java (>= 1.7), libcommons-io-java, libcommons-logging-java, libxt6, libxtst6, libxmlgraphics-commons-java (>= 1.4), java-wrappers (>= 0.1.15), libxml-commons-external-java
Recommends: libsaxon-java
Breaks: fop (<< 1:1.0.dfsg2-6)
Description: XML formatter driven by XSL Formatting Objects (XSL-FO.)
 FOP is a Java application that reads a formatting object tree and then
 turns it into a wide variety of output presentations (including AFP,
 PCL, PDF, PNG, PostScript, RTF, TIFF, and plain text), or displays
 the result on-screen.
 .
 The formatting object tree can be in the form of an XML document
 (output by an XSLT engine like xalan) or can be passed in memory as a
 DOM Document or (in the case of xalan) SAX events.
 .
 This package contains the fop jar file
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://xmlgraphics.apache.org/fop/

Package: ubuntu-minimal
Status: install ok installed
Priority: optional
Section: metapackages
Installed-Size: 57
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ubuntu-meta
Version: 1.267
Depends: adduser, apt, apt-utils, bzip2, console-setup, debconf, debconf-i18n, eject, gnupg, ifupdown, initramfs-tools, iproute, iputils-ping, isc-dhcp-client, kbd, less, locales, lsb-release, makedev, mawk, module-init-tools, net-tools, netbase, netcat-openbsd, ntpdate, passwd, procps, python, resolvconf, rsyslog, sudo, tzdata, ubuntu-keyring, udev, upstart, ureadahead, vim-tiny, whiptail
Description: Minimal core of Ubuntu
 This package depends on all of the packages in the Ubuntu minimal system,
 that is a functional command-line system with the following capabilities:
 .
  - Boot
  - Detect hardware
  - Connect to a network
  - Install packages
  - Perform basic diagnostics
 .
 It is also used to help ensure proper upgrades, so it is recommended that
 it not be removed.

Package: popularity-contest
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 192
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.53ubuntu1
Provides: popcon
Depends: debconf (>= 0.5) | debconf-2.0, dpkg (>= 1.10)
Pre-Depends: debconf (>= 1.5.34) | cdebconf (>= 0.106)
Recommends: cron | fcron
Suggests: anacron
Conffiles:
 /etc/cron.daily/popularity-contest 01be65cc458d99597d0b1f94c5cbe170
Description: Vote for your favourite packages automatically
 The popularity-contest package sets up a cron job that will
 periodically anonymously submit to the Ubuntu developers
 statistics about the most used Ubuntu packages on this system.
 .
 This information helps us making decisions such as which packages
 should go on the first CD. It also lets us improve future versions
 of Ubuntu so that the most popular packages are the ones which
 are installed automatically for new users.
Homepage: http://popcon.ubuntu.com/
Original-Maintainer: Popularity Contest Developers <popcon-developers@lists.alioth.debian.org>

Package: apparmor
Status: install ok installed
Priority: extra
Section: admin
Installed-Size: 1056
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.7.102-0ubuntu3.7
Replaces: apparmor-parser, apparmor-utils (<< 2.6.1-4ubuntu1), libapache2-mod-apparmor (<< 2.5.1-0ubuntu3)
Depends: libc6 (>= 2.14), debconf (>= 0.5) | debconf-2.0, python, lsb-base, initramfs-tools, debconf
Pre-Depends: dpkg (>= 1.15.7.2)
Suggests: apparmor-profiles, apparmor-docs, apparmor-utils
Breaks: apparmor-utils (<< 2.6.1-4ubuntu1), libapache2-mod-apparmor (<< 2.5.1-0ubuntu3)
Conffiles:
 /etc/apparmor/subdomain.conf df4dade439e2786fd1d227c99164563d
 /etc/apparmor.d/local/README b2c6b40577b4099c584cdf731f5aeb0b
 /etc/apparmor.d/tunables/proc ffaa055ceb36031c973ffaece22a5fc0
 /etc/apparmor.d/tunables/home ec0b11e815b30dc6fbf4d05a41aff9f5
 /etc/apparmor.d/tunables/global afd8e52df0705e289431f1615d4cbd13
 /etc/apparmor.d/tunables/multiarch 6ebecd63690d4a53f3e7ff6ae48941ca
 /etc/apparmor.d/tunables/alias 45dca5dd72a6c862d27caa936e6c00ad
 /etc/apparmor.d/abstractions/ibus 50790ff767727165ca62f9bda19fd5c8
 /etc/apparmor.d/abstractions/kerberosclient c3c029b0cae618c3a8272c846431d1c7
 /etc/apparmor.d/abstractions/ubuntu-helpers 6490a57f721752146f5493cce22930ce
 /etc/apparmor.d/abstractions/cups-client 57b86c021618d06e812eb6c6d83d9eee
 /etc/apparmor.d/abstractions/base 9f418cfc5f4e6fa579c261233b8af6df
 /etc/apparmor.d/abstractions/ubuntu-email 5f0898b479de684451e31494f6e1037a
 /etc/apparmor.d/abstractions/ubuntu-console-browsers d560f0509cdc8ffcdfa1dc115eee88f1
 /etc/apparmor.d/abstractions/apache2-common f0653bcbe2a7cfcadeb4eba79296c0fa
 /etc/apparmor.d/abstractions/private-files df792fcb32a3cbf763cee7d63463f4d1
 /etc/apparmor.d/abstractions/user-tmp 93247b3296a7f0bff353eb9ee11fba06
 /etc/apparmor.d/abstractions/orbit2 98b6459f02e5c68e6ef83dced628ea5f
 /etc/apparmor.d/abstractions/freedesktop.org 57a9b88fc6b1dbc3a18f25ada711891e
 /etc/apparmor.d/abstractions/samba 7b54ab9f0b755b04d239113abb09c5f6
 /etc/apparmor.d/abstractions/user-mail 8006dc58aa87d6a8e314360d6575131b
 /etc/apparmor.d/abstractions/mdns d4959c984a530f8c682e31f34927d57e
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/ubuntu-integration-xul a6d33002626e1d9a81a490e2f61509fa
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/user-files c6195739a0a14bf3c947530da605413f
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/mailto e60b3e4611a14d835d8b6fe0ffe27fc2
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/productivity dd54584ceece9aa1ee9c3c71418cd9ae
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/multimedia a9aefc522fef64f9394e9701d1f912b1
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/kde 15541761a5dbdc5ccd12e85e2afe4094
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/plugins-common e4ca6c6a6e88485685d7da20ecf1a24d
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/java 75835195940f17740a2a7f6a5e5b7459
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/text-editors 006c96f21261b0c15e2f453527136973
 /etc/apparmor.d/abstractions/ubuntu-browsers.d/ubuntu-integration 7e4a56934d013f470fb9ef92bcd77871
 /etc/apparmor.d/abstractions/X a5e35595ec71c9dc5e0cf74fcd906fee
 /etc/apparmor.d/abstractions/fonts 64df3ed5013568e2b67fc25bea8f9efa
 /etc/apparmor.d/abstractions/ubuntu-bittorrent-clients 6385893a933bd704925223e591800adf
 /etc/apparmor.d/abstractions/nis b2a829a4e26dd3ae92ec2f67536edc20
 /etc/apparmor.d/abstractions/ldapclient f6d4bac77e72abbace3805ad95dc5fad
 /etc/apparmor.d/abstractions/ubuntu-konsole 8c1c3041cf78f9b9d74b16da7264c745
 /etc/apparmor.d/abstractions/user-download aa76b02a2e8113400f1381c2f5af11b3
 /etc/apparmor.d/abstractions/ubuntu-media-players ff25e51b62d2bf5146134ae3c6530c6b
 /etc/apparmor.d/abstractions/nvidia 6f498b217d4e654c0c2d1e0f9ea2b161
 /etc/apparmor.d/abstractions/ubuntu-xterm bef5766269999b9e73ad6e11dd7930bd
 /etc/apparmor.d/abstractions/likewise eda6f01c5c1f1f09bc85a7f3a1d3ebaf
 /etc/apparmor.d/abstractions/smbpass b4d3be08dff2a9e3b4f1a18ddb65c63c
 /etc/apparmor.d/abstractions/wutmp 3cb05ef8e125c7c3edf00a505dd9e68f
 /etc/apparmor.d/abstractions/private-files-strict 53c40ea0b114f8959873e7a7415ed36f
 /etc/apparmor.d/abstractions/xdg-desktop d891f70210acc01e42c525012a1c3fc6
 /etc/apparmor.d/abstractions/bash 6829aac610c17dacee8aff8f6b2b28e7
 /etc/apparmor.d/abstractions/php5 6900efafb697bec0975237ca47dd8dc2
 /etc/apparmor.d/abstractions/aspell 88984f0b1c090f97140b2b7a6f93b1fb
 /etc/apparmor.d/abstractions/ubuntu-gnome-terminal 886de107666e17033b11aa3abb1ce054
 /etc/apparmor.d/abstractions/nameservice 3cef8d44e4476e45ef2ede8ac7cda463
 /etc/apparmor.d/abstractions/p11-kit 0891f55b0b96892c3ee65edf779bbe33
 /etc/apparmor.d/abstractions/kde bcf406ea65f835487dc700ca93d0857b
 /etc/apparmor.d/abstractions/launchpad-integration 08239d10ba383041e97bc7f3962eb788
 /etc/apparmor.d/abstractions/ssl_certs 9851f49b0c83fef45f6933a78e62baae
 /etc/apparmor.d/abstractions/dbus b9505561d6d1671277cfc71a978e99de
 /etc/apparmor.d/abstractions/video 2194baba2007ea20698441bc333f9446
 /etc/apparmor.d/abstractions/user-manpages c59f25e289e9a426807ab5830136aa42
 /etc/apparmor.d/abstractions/gnome 072b1bbd27f2201eac62b8795c8d1fc7
 /etc/apparmor.d/abstractions/consoles c7e6e00c4845e9afb877359691946386
 /etc/apparmor.d/abstractions/svn-repositories 8bc8a123d9ce516c53b818b8a4fc0ed1
 /etc/apparmor.d/abstractions/mysql 8798b0311f78ff2013480ae4c1509168
 /etc/apparmor.d/abstractions/winbind cf3bdad9d5b544c432d82afca8fe71a9
 /etc/apparmor.d/abstractions/ubuntu-feed-readers b8eb233df01672f4941357487b39cda9
 /etc/apparmor.d/abstractions/ubuntu-browsers 5c0382f39c818364bb01d412cea57c1e
 /etc/apparmor.d/abstractions/openssl f583435c277bf8ad3d35348f1cb8e03d
 /etc/apparmor.d/abstractions/xad 0b2fdc7be71e977e240d77338f414ec7
 /etc/apparmor.d/abstractions/user-write 7d74b716df22c3ba4cb5c9fe25947aff
 /etc/apparmor.d/abstractions/ruby 55dcd9676dbacca96e12f97460fdfe8d
 /etc/apparmor.d/abstractions/ssl_keys 2bff85dbd2face2b968226c9f06aec15
 /etc/apparmor.d/abstractions/authentication 04cf81938b39380d97f675e9e3d28824
 /etc/apparmor.d/abstractions/perl 3f8aff3081a1bf8e9c71598adc79d0d8
 /etc/apparmor.d/abstractions/gnupg 5e9d013a751456f528c45b0d358cb198
 /etc/apparmor.d/abstractions/python 8f2d014977b9344f35e8f410711f8731
 /etc/apparmor.d/abstractions/enchant a1ac9629b466be8a41cb5f87757f3363
 /etc/apparmor.d/abstractions/ubuntu-console-email 1ebfacc8ac5cfba7f3d59baceae52af8
 /etc/apparmor.d/abstractions/dbus-session 4b741586e28e56f184a2de218104de33
 /etc/apparmor.d/abstractions/web-data 86c2db1a266a9c2551f791a404cefd78
 /etc/apparmor.d/abstractions/audio c2bba0f488d025ae4a4adc2aabd9c217
 /etc/init.d/apparmor e979739b30dddc2568af2b8303312140
Description: User-space parser utility for AppArmor
 This provides the system initialization scripts needed to use the
 AppArmor Mandatory Access Control system, including the AppArmor Parser
 which is required to convert AppArmor text profiles into machine-readable
 policies that are loaded into the kernel for use with the AppArmor Linux
 Security Module.
Homepage: http://apparmor.net/
Original-Maintainer: Kees Cook <kees@debian.org>

Package: libjson-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 292
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.53-1
Depends: perl
Recommends: libjson-xs-perl (>= 2.270)
Suggests: libjson-pp-perl
Description: module for manipulating JSON-formatted data
 JSON is a Perl module for manipulating data stored in the format of the same
 name. JavaScript Object Notation (JSON) is a simple data serialization format
 (defined in RFC 4627) that serves as an alternative to XML.
 .
 The primary purpose of this module is to select an appropriate backend JSON
 implementation. It prefers either JSON::XS (see libjson-xs-perl) or JSON::PP
 (see libjson-pp-perl), but will fall back on a backport implementation if
 neither are available.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/JSON/

Package: rsyslog
Status: install ok installed
Priority: important
Section: admin
Installed-Size: 1202
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 5.8.6-1ubuntu8
Provides: linux-kernel-log-daemon, system-log-daemon
Depends: libc6 (>= 2.15), zlib1g (>= 1:1.1.4), upstart-job, lsb-base (>= 3.2-14), initscripts (>= 2.88dsf-13.3), adduser, ucf
Recommends: logrotate
Suggests: rsyslog-mysql | rsyslog-pgsql, rsyslog-doc, rsyslog-gnutls, rsyslog-gssapi, rsyslog-relp, apparmor (>= 2.3)
Conflicts: linux-kernel-log-daemon, system-log-daemon
Conffiles:
 /etc/rsyslog.conf 6a05320976aec88f9aa3ca964e2032f7
 /etc/logrotate.d/rsyslog a5b57eb392a10dba65760e89dcdc508c
 /etc/default/rsyslog 92f41006a8a34eeb390b945ee962d504
 /etc/init/rsyslog.conf 34b6c083e007bed20e8341486361529b
 /etc/init/dmesg.conf 218f9baf50c95553d5b611d62de520e1
 /etc/logcheck/ignore.d.server/rsyslog 650507df599fbbdd6cb4142bd77fd2ff
 /etc/apparmor.d/usr.sbin.rsyslogd b19cc6250081ef3700146db17f1efa44
Description: reliable system and kernel logging daemon
 Rsyslog is a multi-threaded implementation of syslogd (a system utility
 providing support for message logging), with features that include:
  * reliable syslog over TCP, SSL/TLS and RELP
  * on-demand disk buffering
  * email alerting
  * writing to MySQL or PostgreSQL databases (via separate output plugins)
  * permitted sender lists
  * filtering on any part of the syslog message
  * on-the-wire message compression
  * fine-grained output format control
  * failover to backup destinations
  * enterprise-class encrypted syslog relaying
 .
 It is the default syslogd on Debian systems.
Homepage: http://www.rsyslog.com/
Original-Maintainer: Michael Biebl <biebl@debian.org>
Original-Vcs-Browser: http://git.debian.org/?p=collab-maint/rsyslog.git;a=summary
Original-Vcs-Git: git://git.debian.org/git/collab-maint/rsyslog.git

Package: libservlet2.5-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 285
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: tomcat6
Version: 6.0.35-1ubuntu3.2
Description: Servlet 2.5 and JSP 2.1 Java API classes
 Apache Tomcat implements the Java Servlet and the JavaServer Pages (JSP)
 specifications from Sun Microsystems, and provides a "pure Java" HTTP web
 server environment for Java code to run.
 .
 This package contains the Java Servlet and JSP library.
Homepage: http://tomcat.apache.org
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: installation-report
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 75
Maintainer: Ubuntu Installer Team <ubuntu-installer@lists.ubuntu.com>
Architecture: all
Version: 2.46ubuntu1
Recommends: pciutils
Description: system installation report
 This package contains instructions and programs for reporting on
 the installation of a new system. It can help you fill out an
 installation report and send it to the Debian bug tracking system.
 .
 Purging this package will remove the logs of the system's installation.
Original-Maintainer: Debian Install System Team <debian-boot@lists.debian.org>

Package: libavalon-framework-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 174
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: avalon-framework
Version: 4.2.0-8
Suggests: libavalon-framework-java-doc
Description: Common framework for Java server applications
 The Avalon framework consists of interfaces that define
 relationships between commonly used application components,
 best-of-practice pattern enforcement, and several lightweight
 convenience implementations of the generic components.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://excalibur.apache.org/

Package: cpio
Status: install ok installed
Priority: required
Section: utils
Installed-Size: 328
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.11-7ubuntu3
Replaces: cpio-mt
Depends: libc6 (>= 2.14), dpkg (>= 1.15.4) | install-info
Suggests: libarchive1
Conflicts: cpio-mt, mt-st (<< 0.6)
Description: GNU cpio -- a program to manage archives of files
 GNU cpio is a tool for creating and extracting archives, or copying
 files from one place to another.  It handles a number of cpio formats
 as well as reading and writing tar files.
Homepage: http://www.gnu.org/software/cpio/
Original-Maintainer: Ruben Molina <rmolina@udea.edu.co>

Package: powermgmt-base
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 96
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1.31
Replaces: apmd (<= 3.0.2-1.17)
Depends: udev | makedev, libc6 (>= 2.3.4), module-init-tools
Description: Common utils and configs for power management
 This package contains utilities and configuration files
 for power management that are common to APM and ACPI.
Original-Maintainer: Chris Hanson <cph@debian.org>

Package: libstdc++6
Status: install ok installed
Multi-Arch: same
Priority: important
Section: libs
Installed-Size: 1190
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1)
Pre-Depends: multiarch-support
Breaks: gcc-4.1, gcc-4.3 (<< 4.3.6-1), gcc-4.4 (<< 4.4.6-4), gcc-4.5 (<< 4.5.3-2)
Conflicts: scim (<< 1.4.2-1)
Description: GNU Standard C++ Library v3
 This package contains an additional runtime library for C++ programs
 built with the GNU compiler.
 .
 libstdc++-v3 is a complete rewrite from the previous libstdc++-v2, which
 was included up to g++-2.95. The first version of libstdc++-v3 appeared
 in g++-3.0.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libhttpclient-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 428
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: httpcomponents-client
Version: 4.1.1-1
Depends: libcommons-codec-java, libcommons-logging-java, libhttpcore-java
Description: HTTP/1.1 compliant HTTP agent implementation
 HttpClient is a HTTP/1.1 compliant HTTP agent implementation based on
 HttpCore. It also provides reusable components for client-side
 authentication, HTTP state management, and HTTP connection management.
 .
 HttpComponents Client is a successor of and replacement for Commons
 HttpClient 3.x. Users of Commons HttpClient are strongly encouraged to
 upgrade.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://hc.apache.org/httpcomponents-client/index.html

Package: libpcsclite1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 86
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: pcsc-lite
Version: 1.7.4-2ubuntu2
Depends: libc6 (>= 2.15)
Pre-Depends: multiarch-support
Suggests: pcscd (= 1.7.4-2ubuntu2)
Breaks: pcscd (<< 1.7.4-2ubuntu2)
Conflicts: libpcsclite-dev (<< 1.7.4-2ubuntu2)
Description: Middleware to access a smart card using PC/SC (library)
 The purpose of PC/SC Lite is to provide a Windows(R) SCard interface
 in a very small form factor for communicating to smartcards and
 readers.
 .
 The PC/SC Lite library is used to connect to the PC/SC daemon from
 a client application and provide access to the desired reader.
Homepage: http://pcsclite.alioth.debian.org/
Original-Maintainer: Ludovic Rousseau <rousseau@debian.org>

Package: apport
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 968
Maintainer: Martin Pitt <martin.pitt@ubuntu.com>
Architecture: all
Version: 2.0.1-0ubuntu17.1
Replaces: python-apport (<< 1.17.2-0ubuntu3), ubiquity
Depends: python (>= 2.6), python-apport (>= 2.0.1-0ubuntu17.1), lsb-base (>= 3.0-6), python-gi, gir1.2-glib-2.0 (>= 1.29.17), sysv-rc (>= 2.86.ds1-14.1ubuntu2), upstart-job
Recommends: apport-symptoms
Suggests: apport-gtk | apport-kde
Conffiles:
 /etc/bash_completion.d/apport_completion dfe766d9328bb5c895038b44185133f9
 /etc/apport/blacklist.d/apport 44a58562c2c3923d9c44d67d4b5daf0f
 /etc/apport/blacklist.d/README.blacklist c2ed1eb9a17ec2550747b4960cf4b73c
 /etc/apport/native-origins.d/lts-q-backports 6f1e7c350c7879a2b8d3f5535e4f47d0
 /etc/logrotate.d/apport fa54dab59ef899b48d5455c976008df4
 /etc/init/apport.conf 61faaa43d687d7ded21201e34ff4d5ca
 /etc/cron.daily/apport 3488c008abeb2df01712c62419296592
 /etc/default/apport 3446c6cac185f44237f59786e006ebe4
Description: automatically generate crash reports for debugging
 apport automatically collects data from crashed processes and
 compiles a problem report in /var/crash/. This utilizes the crashdump
 helper hook provided by the Ubuntu kernel.
 .
 This package also provides a command line frontend for browsing and
 handling the crash reports. For desktops, you should consider
 installing the GTK+ or Qt user interface (apport-gtk or apport-kde).
Homepage: https://wiki.ubuntu.com/Apport

Package: libmpfr4
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 747
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: mpfr4
Version: 3.1.0-3ubuntu2
Depends: libc6 (>= 2.14), libgmp10
Pre-Depends: multiarch-support
Conflicts: libgmp3 (<< 4.1.4-3)
Description: multiple precision floating-point computation
 MPFR provides a library for multiple-precision floating-point computation
 with correct rounding.  The computation is both efficient and has a
 well-defined semantics. It copies the good ideas from the
 ANSI/IEEE-754 standard for double-precision floating-point arithmetic
 (53-bit mantissa).
Homepage: http://www.mpfr.org/
Original-Maintainer: Laurent Fousse <lfousse@debian.org>

Package: libhtml-tagset-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 76
Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.20-2
Depends: perl (>= 5.6.0-16)
Description: Data tables pertaining to HTML
 HTML-Tagset contains data tables useful in dealing with HTML.  For instance,
 it provides %HTML::Tagset::emptyElement, which lists all of the HTML elements
 which cannot have content.  It provides no functions or methods.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTML-Tagset/

Package: libcommons-collections-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 292
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.1.1-10
Suggests: libcommons-collections-java-doc
Description: set of abstract data type interfaces and implementations
 The Java Collections Framework provides a set of abstract data
 type interfaces and implementations that offer both a wealth
 of useful functionality, and a solid foundation for extending
 that functionality.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/collections/

Package: isc-dhcp-client
Status: install ok installed
Priority: important
Section: net
Installed-Size: 732
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: isc-dhcp
Version: 4.1.ESV-R4-0ubuntu5.5
Replaces: dhcp3-client
Provides: dhcp3-client
Depends: debianutils (>= 2.8.2), isc-dhcp-common (= 4.1.ESV-R4-0ubuntu5.5), iproute, libc6 (>= 2.15)
Suggests: resolvconf, avahi-autoipd, apparmor
Breaks: network-manager (<< 0.8.2~rc1)
Conflicts: dhcp-client (<< 3.0), ifupdown (<< 0.6.8+nmu3), resolvconf (<= 1.45), samba-common (<< 3.0.0beta1-2)
Conffiles:
 /etc/apparmor.d/sbin.dhclient 89decb33ad9d3be0de07779a5178f0ee
 /etc/dhcp/dhclient-exit-hooks.d/debug dd91ed0be720067f550fbab6460cce3d
 /etc/dhcp/dhclient-exit-hooks.d/rfc3442-classless-routes ee96d782b56da3e073e1353d88f9017a
 /etc/dhcp/dhclient-enter-hooks.d/debug e8024270338806ef2315ad693178f237
 /etc/dhcp/dhclient.conf 7f622632a2a0bbb0f890ff9bc6f0b78e
Description: ISC DHCP client
 This is the client from the Internet Software Consortium's implementation of
 DHCP. For more information visit http://www.isc.org.
 .
 Dynamic Host Configuration Protocol (DHCP) is a protocol like BOOTP
 (actually dhcpd includes much of the functionality of bootpd). It
 gives client machines "leases" for IP addresses and can
 automatically set their network configuration. If your machine
 depends on DHCP (especially likely if it's a workstation on a large
 network, or a laptop, or attached to a cable modem), keep this or
 another DHCP client installed.
 .
 Extra documentation can be found in the package isc-dhcp-common.
Original-Maintainer: Debian ISC DHCP maintainers <pkg-dhcp-devel@lists.alioth.debian.org>

Package: libcommons-pool-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 172
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: commons-pool
Version: 1.5.6-1
Description: pooling implementation for Java objects
 Pool provides an Object-pooling API, with three major aspects:
  1. A generic object pool interface that clients and implementors can use to
     provide easily interchangeable pooling implementations.
  2. A toolkit for creating modular object pools.
  3. Several general purpose pool implementations.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://commons.apache.org/pool/

Package: ca-certificates
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: misc
Installed-Size: 373
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 20111211
Depends: openssl (>= 1.0.0), debconf (>= 0.5) | debconf-2.0
Enhances: openssl
Description: Common CA certificates
 This package includes PEM files of CA certificates to allow SSL-based
 applications to check for the authenticity of SSL connections.
 .
 It includes, among others, certificate authorities used by the Debian
 infrastructure and those shipped with Mozilla's browsers.
 .
 Please note that Debian can neither confirm nor deny whether the
 certificate authorities whose certificates are included in this package
 have in any way been audited for trustworthiness or RFC 3647 compliance.
 Full responsibility to assess them belongs to the local system
 administrator.
Original-Maintainer: Michael Shuler <michael@pbandjelly.org>

Package: update-notifier-common
Status: install ok installed
Priority: optional
Section: gnome
Installed-Size: 1944
Maintainer: Michael Vogt <michael.vogt@ubuntu.com>
Architecture: all
Source: update-notifier
Version: 0.119ubuntu8.6
Replaces: update-notifier (<< 0.75.1)
Depends: python, python-apt (>= 0.6.12), python-debian, debconf, patch
Pre-Depends: dpkg (>= 1.15.7.2)
Recommends: libpam-modules (>= 1.0.1-9ubuntu3)
Suggests: gksu
Conffiles:
 /etc/update-motd.d/90-updates-available 0628c543e94792202076f0d3c3c521cf
 /etc/update-motd.d/98-fsck-at-reboot 16003ee8c8c80a565a98a7696cee04c0
 /etc/update-motd.d/98-reboot-required 1c4d534d0abd44d566899e47c4f22786
 /etc/cron.daily/update-notifier-common ac3a73308ace1070b9980c2bc56fb416
 /etc/apt/apt.conf.d/20archive 9e28a07261e6ad5ede22d5286291ca23
 /etc/apt/apt.conf.d/15update-stamp b9de0ac9e2c9854b1bb213e362dc4e41
 /etc/apt/apt.conf.d/99update-notifier 8e4023de6d0e7bdd45f6b018511abfe7
 /etc/apt/apt.conf.d/10periodic 03ddb526e156071de0667748b6ac1d33
Description: Files shared between update-notifier and other packages
 Apt setup files and reboot notification scripts shared between
 update-notifier and other packages, notably for server use cases.

Package: strace
Status: install ok installed
Priority: optional
Section: utils
Installed-Size: 396
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.5.20-2.3ubuntu1
Depends: libc6 (>= 2.4)
Description: A system call tracer
 strace is a system call tracer, i.e. a debugging tool which prints out
 a trace of all the system calls made by a another process/program.
 The program to be traced need not be recompiled for this, so you can
 use it on binaries for which you don't have source.
 .
 System calls and signals are events that happen at the user/kernel
 interface. A close examination of this boundary is very useful for bug
 isolation, sanity checking and attempting to capture race conditions.
Homepage: http://sourceforge.net/projects/strace/
Original-Maintainer: Frederik Schüler <fs@debian.org>

Package: vim-tiny
Status: install ok installed
Priority: important
Section: editors
Installed-Size: 826
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: vim
Version: 2:7.3.429-2ubuntu2.1
Provides: editor
Depends: vim-common (= 2:7.3.429-2ubuntu2.1), libc6 (>= 2.15), libselinux1 (>= 1.32), libtinfo5
Suggests: indent
Conffiles:
 /etc/vim/vimrc.tiny ffad4bb1a71e453fece46cd5f29434e8
Description: Vi IMproved - enhanced vi editor - compact version
 Vim is an almost compatible version of the UNIX editor Vi.
 .
 Many new features have been added: multi level undo, syntax
 highlighting, command line history, on-line help, filename
 completion, block operations, folding, Unicode support, etc.
 .
 This package contains a minimal version of vim compiled with no
 GUI and a small subset of features in order to keep small the
 package size. This package does not depend on the vim-runtime
 package, but installing it you will get its additional benefits
 (online documentation, plugins, ...).
Homepage: http://www.vim.org/
Original-Maintainer: Debian Vim Maintainers <pkg-vim-maintainers@lists.alioth.debian.org>

Package: python-debian
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 263
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.1.21ubuntu1
Replaces: python-deb822
Provides: python-deb822
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-chardet
Recommends: python-apt
Suggests: gpgv
Conflicts: python-deb822
Description: Python modules to work with Debian-related data formats
 This package provides Python modules that abstract many formats of Debian
 related files. Currently handled are:
  * Debtags information (debian.debtags module)
  * debian/changelog (debian.changelog module)
  * Packages files, pdiffs (debian.debian_support module)
  * Control files of single or multiple RFC822-style paragraphs, e.g.
    debian/control, .changes, .dsc, Packages, Sources, Release, etc.
    (debian.deb822 module)
  * Raw .deb and .ar files, with (read-only) access to contained
    files and meta-information
Original-Maintainer: Debian python-debian Maintainers <pkg-python-debian-maint@lists.alioth.debian.org>

Package: binutils
Status: install ok installed
Priority: optional
Section: devel
Installed-Size: 8564
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 2.22-6ubuntu1
Replaces: binutils-gold (<< 2.20.51.20100415)
Provides: elf-binutils
Depends: libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.6), zlib1g (>= 1:1.2.0)
Suggests: binutils-doc (>= 2.22-6ubuntu1)
Conflicts: binutils-gold (<< 2.20.51.20100415), elf-binutils, gas, modutils (<< 2.4.19-1)
Description: GNU assembler, linker and binary utilities
 The programs in this package are used to assemble, link and manipulate
 binary and object files.  They may be used in conjunction with a compiler
 and various libraries to build programs.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: ssh-import-id
Status: install ok installed
Priority: extra
Section: misc
Installed-Size: 53
Maintainer: Dustin Kirkland <kirkland@ubuntu.com>
Architecture: all
Version: 2.10-0ubuntu1
Replaces: ssh-import
Depends: wget, ca-certificates
Recommends: openssh-server
Breaks: ssh-import
Conffiles:
 /etc/ssh/ssh_import_id 3442654c47e93f0c03b0510639b5c184
Description: securely retrieve an SSH public key and install it locally
 This utility will securely contact a public keyserver (Launchpad.net by
 default), retrieve one or more user's public keys, and append these to
 the current user's ~/.ssh/authorized_keys file.
Homepage: http://launchpad.net/ssh-import-id

Package: python-lazr.restfulclient
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 237
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: lazr.restfulclient
Version: 0.12.0-1ubuntu1
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-httplib2, python-oauth, python-pkg-resources, python-wadllib (>= 1.1.4), python-zope.interface, python-simplejson
Description: client for lazr.restful-based web services
 A programmable client library that takes advantage of the commonalities
 among lazr.rest web services to provide added functionality on top
 of wadllib.
Homepage: https://launchpad.net/lazr.restfulclient
Original-Maintainer: Luca Falavigna <dktrkranz@debian.org>

Package: libx11-doc
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: doc
Installed-Size: 9180
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: libx11
Version: 2:1.4.99.1-0ubuntu2
Replaces: libx11-dev (<< 2:1.4.4-3)
Depends: xorg-sgml-doctools (>= 1:1.5)
Description: X11 client-side library (development documentation)
 This package provides a client interface to the X Window System, otherwise
 known as 'Xlib'.  It provides a complete API for the basic functions of the
 window system.
 .
 This package contains supplemental documentation for the library found in
 libx11-6. Non-developers likely have little use for this package.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libX11
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: less
Status: install ok installed
Priority: standard
Section: text
Installed-Size: 324
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 444-1ubuntu1
Depends: libc6 (>= 2.11), libncurses5 (>= 5.5-5~), debianutils (>= 1.8)
Description: pager program similar to more
 This package provides "less", a file pager (that is, a memory-efficient
 utility for displaying text one screenful at a time). Unlike the basic
 pager "more", it is capable of both backward and forward navigation
 through a file. As part of the GNU project, it is widely regarded as
 the standard pager on UNIX-derived systems.
 .
 Also provided are "lessecho", a simple utility for ensuring arguments
 with spaces are correctly quoted; "lesskey", a tool for modifying the
 standard (vi-like) keybindings; and "lesspipe", a filter for specific
 types of input, such as .doc or .txt.gz files.
Homepage: http://www.greenwoodsoftware.com/less/
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>

Package: libglib2.0-0
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 3740
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: glib2.0
Version: 2.32.3-0ubuntu1
Replaces: libglib2.0-dev (<< 2.23.2-2)
Depends: libc6 (>= 2.15), libffi6 (>= 3.0.4), libpcre3 (>= 8.10), libselinux1 (>= 1.32), zlib1g (>= 1:1.2.2)
Pre-Depends: multiarch-support
Recommends: libglib2.0-data, shared-mime-info
Breaks: gdm3 (<< 3.0.3), gnome-control-center (<< 1:3), gnome-session (<< 3.0.0-3), gvfs (<< 1.8), libgtk-3-0 (<< 3.0.12)
Conflicts: bamfdaemon (<= 0.2.92-0ubuntu1), libzeitgeist-gio, wncksyncdaemon
Description: GLib library of C routines
 GLib is a library containing many useful C routines for things such
 as trees, hashes, lists, and strings.  It is a useful general-purpose
 C library used by projects such as GTK+, GIMP, and GNOME.
 .
 This package contains the shared libraries.
Homepage: http://www.gtk.org/
Original-Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>

Package: libasyncns0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 84
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libasyncns
Version: 0.8-4
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: Asynchronous name service query library
 libasyncns is a C library for Linux/Unix for executing name service queries
 asynchronously. It is an asynchronous wrapper around getaddrinfo(3),
 getnameinfo(3), res_query(3) and res_search(3) from libc and libresolv.
Original-Maintainer: Tanguy Ortolo <tanguy+debian@ortolo.eu>
Homepage: http://0pointer.de/lennart/projects/libasyncns/

Package: libgomp1
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 88
Maintainer: Ubuntu Core developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: gcc-4.6
Version: 4.6.3-1ubuntu5
Depends: gcc-4.6-base (= 4.6.3-1ubuntu5), libc6 (>= 2.14)
Pre-Depends: multiarch-support
Breaks: gcc-4.1, gcc-4.3 (<< 4.3.6-1), gcc-4.4 (<< 4.4.6-4), gcc-4.5 (<< 4.5.3-2)
Description: GCC OpenMP (GOMP) support library
 GOMP is an implementation of OpenMP for the C, C++, and Fortran compilers
 in the GNU Compiler Collection.
Homepage: http://gcc.gnu.org/
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>

Package: libsisu-ioc-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 2464
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: sisu-ioc
Version: 2.3.0-3
Depends: libaopalliance-java, libatinject-jsr330-api-java, libcdi-api-java, libplexus-classworlds2-java (>= 2.4), libplexus-containers1.5-java (>= 1.5.5), libplexus-utils2-java (>= 2.0.5), libsisu-guice-java
Recommends: junit4, libosgi-compendium-java, libosgi-core-java, libslf4j-java
Description: JSR 330 container and OSGi/Plexus adapter
 Sisu is a fully compliant JSR330 container that supports classpath scanning,
 auto-binding, and dynamic auto-wiring. Sisu uses patched Google Guice to
 perform dependency injection and provides the JSR330 support.
 .
 Sisu also provides a replacement Plexus container that builds on top of the
 JSR330 core. Plexus is the dependency injection container used in Maven 2.x.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://sisu.sonatype.org/

Package: libplexus-containers1.5-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 428
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-containers1.5
Version: 1.5.5-2
Depends: libasm3-java, libcommons-cli-java, libgoogle-collections-java (>= 1.0), libjdom1-java, libmaven-plugin-tools-java, libmaven2-core-java, libplexus-classworlds2-java, libplexus-cli-java, libplexus-utils2-java, libqdox-java, libxbean-java
Description: Plexus' inversion-of-control (IoC) container
 The Plexus project provides a full software stack for creating and executing
 software projects. Based on the Plexus container, the applications can
 utilise component-oriented programming to build modular, reusable components
 that can easily be assembled and reused.
 .
 Plexus Containers is Plexus' inversion-of-control (IoC) container
 and companion tools:
  * plexus-container-default is the IoC container itself,
  * plexus-component-metadata is a Maven plugin to generate plexus
    component.xml from source annotations,
  * plexus-component-annotations provides the Java 5 annotations
    for plexus components,
  * plexus-component-javadoc provides javadoc taglets to add plexus
    documentation to javadoc.
 .
 This package replaces both plexus-containers and plexus-component-metadata from
 1.0.x branch.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://plexus.codehaus.org/plexus-containers/

Package: libtext-charwidth-perl
Status: install ok installed
Priority: required
Section: perl
Installed-Size: 75
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 0.04-7build1
Depends: libc6 (>= 2.2.5), perl-base (>= 5.14.2-3), perlapi-5.14.2
Description: get display widths of characters on the terminal
 This module permits perl software to get the display widths of characters
 and strings on the terminal, using wcwidth() and wcswidth() from libc.
 .
 It provides mbwidth(), mbswidth(), and mblen().
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://search.cpan.org/search?module=Text::CharWidth

Package: libxt6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 457
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxt
Version: 1:1.1.1-2build1
Depends: libc6 (>= 2.14), libice6 (>= 1:1.0.0), libsm6, libx11-6
Pre-Depends: multiarch-support
Description: X11 toolkit intrinsics library
 libXt provides the X Toolkit Intrinsics, an abstract widget library upon
 which other toolkits are based.  Xt is the basis for many toolkits, including
 the Athena widgets (Xaw), and LessTif (a Motif implementation).
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXt
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: readline-common
Status: install ok installed
Multi-Arch: foreign
Priority: important
Section: utils
Installed-Size: 107
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: readline6
Version: 6.2-8
Replaces: libreadline-common, libreadline4 (<< 4.3-16), libreadline5 (<< 5.0-11)
Depends: dpkg (>= 1.15.4) | install-info
Conflicts: libreadline-common, libreadline5 (<< 5.0-11)
Description: GNU readline and history libraries, common files
 The GNU readline library aids in the consistency of user interface
 across discrete programs that need to provide a command line
 interface.
 .
 The GNU history library provides a consistent user interface for
 recalling lines of previously typed input.
Original-Maintainer: Matthias Klose <doko@debian.org>

Package: libcommons-lang-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 348
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 2.6-3ubuntu1
Description: Extension of the java.lang package
 The Lang Component contains a set of Java classes that provide helper
 methods for standard Java classes, especially those found in the
 java.lang package in the Sun JDK. The following classes are included:
 .
  * StringUtils - Helper for java.lang.String.
  * CharSetUtils - Methods for dealing with CharSets, which are sets of
    characters such as [a-z] and [abcdez].
  * RandomStringUtils - Helper for creating randomised Strings.
  * NumberUtils - Helper for java.lang.Number and its subclasses.
  * NumberRange - A range of numbers with an upper and lower bound.
  * ObjectUtils - Helper for java.lang.Object.
  * SerializationUtils - Helper for serializing Objects.
  * SystemUtils - Utility class defining the Java system properties.
  * NestedException package - A sub-package for the creation of nested
    exceptions.
  * Enum package - A sub-package for the creation of enumerated types.
  * Builder package - A sub-package for the creation of equals, hashCode,
    compareTo and toString methods.
Homepage: http://commons.apache.org/lang/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: python-launchpadlib
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 276
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.9.12-1
Depends: python2.7, python (>= 2.7.1-0ubuntu2), python (<< 2.8), python-simplejson, python-httplib2 (>= 0.4.0), python-wadllib, python-lazr.restfulclient (>= 0.11.2-1), python-lazr.uri (>= 1.0.2-4), python-oauth, python-keyring (>= 0.5)
Suggests: python-pkg-resources, python-testresources
Description: Launchpad web services client library
 A free Python library for scripting Launchpad through its web services
 interface.
 .
 It currently provides access to the following parts of Launchpad:
  * People and Teams
  * Team memberships
  * Bugs and bugtasks
 .
 The Launchpad API is currently in beta, and may well change in ways
 incompatible with this library.
 .
 You can find current API documentation at
 https://help.launchpad.net/API/launchpadlib
Original-Maintainer: Luca Falavigna <dktrkranz@debian.org>
Homepage: https://launchpad.net/launchpadlib

Package: libcap2
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 56
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 1:2.22-1ubuntu3
Depends: libc6 (>= 2.8)
Pre-Depends: multiarch-support
Description: support for getting/setting POSIX.1e capabilities
 This library implements the user-space interfaces to the POSIX
 1003.1e capabilities available in Linux kernels. These capabilities are
 a partitioning of the all powerful root privilege into a set of distinct
 privileges.
Homepage: http://sites.google.com/site/fullycapable/
Original-Maintainer: Torsten Werner <twerner@debian.org>

Package: libnfnetlink0
Status: install ok installed
Priority: extra
Section: libs
Installed-Size: 76
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libnfnetlink
Version: 1.0.0-1
Depends: libc6 (>= 2.4)
Description: Netfilter netlink library
 libnfnetlink is the low-level library for netfilter related
 kernel/userspace communication. It provides a generic messaging
 infrastructure for in-kernel netfilter subsystems (such as
 nfnetlink_log, nfnetlink_queue, nfnetlink_conntrack) and their
 respective users and/or management tools in userspace.
Original-Maintainer: netfilter maintainers <netfilter-maintainers@ned.snow-crash.org>

Package: libwrap0
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 148
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: tcp-wrappers
Version: 7.6.q-21
Replaces: tcpd (<< 7.6.q-20)
Depends: libc6 (>= 2.11)
Pre-Depends: multiarch-support
Recommends: tcpd
Breaks: tcpd (<< 7.6.q-20)
Description: Wietse Venema's TCP wrappers library
 Wietse Venema's network logger, also known as TCPD or LOG_TCP.
 .
 These programs log the client host name of incoming telnet,
 ftp, rsh, rlogin, finger etc. requests.
 .
 Security options are:
  - access control per host, domain and/or service;
  - detection of host name spoofing or host address spoofing;
  - booby traps to implement an early-warning system.
Original-Maintainer: Marco d'Itri <md@linux.it>

Package: libkrb5-3
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 959
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: krb5
Version: 1.10+dfsg~beta1-2ubuntu0.3
Replaces: libkrb53 (<< 1.6.dfsg.4~beta1-7)
Depends: libc6 (>= 2.14), libcomerr2 (>= 1.34), libk5crypto3 (>= 1.9+dfsg~beta1), libkeyutils1, libkrb5support0 (= 1.10+dfsg~beta1-2ubuntu0.3)
Pre-Depends: multiarch-support
Recommends: krb5-locales
Suggests: krb5-doc, krb5-user
Breaks: libkrb53 (<< 1.6.dfsg.4~beta1-9), libsmbclient (<= 2:3.6.1-2), sssd (<= 1.2.1-4.3)
Description: MIT Kerberos runtime libraries
 Kerberos is a system for authenticating users and services on a network.
 Kerberos is a trusted third-party service.  That means that there is a
 third party (the Kerberos server) that is trusted by all the entities on
 the network (users and services, usually called "principals").
 .
 This is the MIT reference implementation of Kerberos V5.
 .
 This package contains the runtime library for the main Kerberos v5 API
 used by applications and Kerberos clients.
Homepage: http://web.mit.edu/kerberos/
Original-Maintainer: Sam Hartman <hartmans@debian.org>

Package: augeas-lenses
Status: install ok installed
Priority: optional
Section: misc
Installed-Size: 754
Maintainer: Raphaël Pinson <raphink@ubuntu.com>
Architecture: all
Source: augeas
Version: 0.10.0-0ubuntu4
Suggests: augeas-doc
Description: Set of lenses needed by libaugeas0 to parse config files
 Augeas parses configuration files described in lenses into a tree structure,
 which it exposes through its public API. Changes made through the API are
 written back to the initially read files.
 .
 Lenses are the building blocks of the file <-> tree transformation; they
 combine parsing a file and building the tree (the get transformation), with
 turning the tree back into an (updated) file (the put transformation).
 .
 The transformation works very hard to preserve comments and formatting
 details. It is controlled by ''lens'' definitions that describe the file
 format and the transformation into a tree. This package includes the official
 set of lenses.
Homepage: http://augeas.net/
Original-Maintainer: Nicolas Valcárcel Scerpella (Canonical) <nicolas.valcarcel@canonical.com>

Package: lsof
Status: install ok installed
Priority: standard
Section: utils
Installed-Size: 452
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 4.81.dfsg.1-1build1
Replaces: lsof-2.0.35, lsof-2.0.36, lsof-2.0.38, lsof-2.2 (<< 4.73)
Depends: libc6 (>= 2.11)
Conflicts: suidmanager (<< 0.50)
Description: List open files
 Lsof is a Unix-specific diagnostic tool.  Its name stands
 for LiSt Open Files, and it does just that.  It lists
 information about any files that are open, by processes
 currently running on the system.
Original-Maintainer: Norbert Tretkowski <nobse@debian.org>

Package: liblockfile1
Status: install ok installed
Multi-Arch: same
Priority: standard
Section: libs
Installed-Size: 56
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: liblockfile
Version: 1.09-3
Depends: libc6 (>= 2.4), liblockfile-bin (>= 1.09-3)
Pre-Depends: multiarch-support
Description: NFS-safe locking library
 Liblockfile is a shared library with NFS-safe locking functions.
Original-Maintainer: Miquel van Smoorenburg <miquels@cistron.nl>

Package: libxau6
Status: install ok installed
Multi-Arch: same
Priority: optional
Section: libs
Installed-Size: 54
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: libxau
Version: 1:1.0.6-4
Depends: libc6 (>= 2.4)
Pre-Depends: multiarch-support
Description: X11 authorisation library
 This package provides the main interface to the X11 authorisation handling,
 which controls authorisation for X connections, both client-side and
 server-side.
 .
 More information about X.Org can be found at:
 <URL:http://www.X.org>
 .
 This module can be found at
 git://anongit.freedesktop.org/git/xorg/lib/libXau
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libio-string-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 72
Maintainer: Ubuntu Core Developers <ubuntu-devel@lists.ubuntu.com>
Architecture: all
Version: 1.08-2
Depends: perl (>= 5.6.0-16)
Description: Emulate IO::File interface for in-core strings
 The IO::String module provide the IO::File interface for in-core
 strings.  An IO::String object can be attached to a string, and
 will make it possible to use the normal file operations for reading or
 writing data, as well as seeking to various locations of the string.
 The main reason you might want to do this, is if you have some other
 library module that only provide an interface to file handles, and you
 want to keep all the stuff in memory.
 .
 The IO::String module provide an interface compatible with
 IO::File as distributed with IO-1.20, but the following methods
 are not available; new_from_fd, fdopen, format_write,
 format_page_number, format_lines_per_page, format_lines_left,
 format_name, format_top_name.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>`;