all: proposal.pdf

proposal.pdf: biblio.bib proposal.tex
	pdflatex proposal
	bibtex proposal
	pdflatex proposal
	pdflatex proposal

clean:
	\rm -f *.dvi *.aux *.ps *~ *.log *.blg *.bbl {proposal}.pdf

